import { setDefaultResultOrder } from "node:dns";
import { resolve4 } from "node:dns/promises";
import https from "node:https";

// В контейнере хостинга IPv6 не маршрутизируется — не уходим в AAAA-записи.
setDefaultResultOrder("ipv4first");

const HOST = "api.telegram.org";

// Сеть хостинга (Timeweb, RU) молча отбрасывает пакеты до того IP, который отдаёт
// DNS для api.telegram.org (149.154.166.110) — запрос висит до таймаута. При этом
// другой адрес Bot API, 149.154.167.220, доступен и отвечает за ~50мс.
// Поэтому при сбое обычного запроса идём напрямую по рабочему IP, сохраняя SNI
// и заголовок Host — сертификат при этом проверяется по имени api.telegram.org.
const KNOWN_GOOD_IPS = ["149.154.167.220"];

const DIRECT_TIMEOUT_MS = 2500;
const IP_TIMEOUT_MS = 5000;

type SendResult = { ok: boolean; status?: number; body?: string; error?: string };

function postViaIp(ip: string, path: string, payload: string): Promise<SendResult> {
  return new Promise((resolve) => {
    const req = https.request(
      {
        host: ip,
        servername: HOST, // SNI: сертификат проверяется по этому имени
        port: 443,
        method: "POST",
        path,
        headers: {
          Host: HOST,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
        timeout: IP_TIMEOUT_MS,
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () =>
          resolve({
            ok: res.statusCode !== undefined && res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            body: data.slice(0, 300),
          }),
        );
      },
    );
    req.on("error", (e) => resolve({ ok: false, error: e.message }));
    req.on("timeout", () => {
      req.destroy();
      resolve({ ok: false, error: "timeout" });
    });
    req.write(payload);
    req.end();
  });
}

/**
 * Отправка сообщения в Telegram. Никогда не бросает исключений — канал
 * вспомогательный, его сбой не должен влиять на обработку заявки.
 */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const path = `/bot${token}/sendMessage`;
  const payload = JSON.stringify({
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  });
  const started = Date.now();

  // 1. Обычный запрос — сработает там, где сеть не режет Telegram,
  //    и продолжит работать, если блокировку снимут.
  try {
    const res = await fetch(`https://${HOST}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      signal: AbortSignal.timeout(DIRECT_TIMEOUT_MS),
    });
    if (res.ok) {
      console.log(`Telegram: отправлено обычным запросом за ${Date.now() - started}мс`);
      return true;
    }
    const body = await res.text();
    console.error(`Telegram: обычный запрос — HTTP ${res.status} ${body.slice(0, 200)}`);
    // Ошибка самого Telegram (неверный chat_id, бота убрали из группы) —
    // другой маршрут не поможет.
    if (res.status >= 400 && res.status < 500 && res.status !== 429) return false;
  } catch (e) {
    console.error(`Telegram: обычный запрос не прошёл (${(e as Error).message})`);
  }

  // 2. Обход блокировки: напрямую по доступным IP Bot API.
  const candidates = [...KNOWN_GOOD_IPS];
  try {
    for (const ip of await resolve4(HOST)) {
      if (!candidates.includes(ip)) candidates.push(ip);
    }
  } catch {
    // DNS недоступен — хватит статического списка
  }

  for (const ip of candidates) {
    const res = await postViaIp(ip, path, payload);
    if (res.ok) {
      console.log(`Telegram: отправлено через ${ip} за ${Date.now() - started}мс`);
      return true;
    }
    console.error(
      `Telegram: ${ip} — ${res.error ?? `HTTP ${res.status} ${res.body ?? ""}`.trim()}`,
    );
    if (res.status && res.status >= 400 && res.status < 500 && res.status !== 429) return false;
  }

  console.error(`Telegram: не доставлено, перепробованы ${candidates.join(", ")}`);
  return false;
}

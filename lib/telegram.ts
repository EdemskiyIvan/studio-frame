import { setDefaultResultOrder } from "node:dns";

// В контейнерах хостинга IPv6 часто назначен, но не маршрутизируется. Node в таком
// случае пытается подключиться по AAAA-записи api.telegram.org и висит до таймаута.
// Принудительно предпочитаем IPv4.
setDefaultResultOrder("ipv4first");

const ATTEMPTS = 3;
const ATTEMPT_TIMEOUT_MS = 3500;
const RETRY_DELAY_MS = 400;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Отправка сообщения в Telegram. Никогда не бросает исключений и не блокирует
 * вызывающий код: канал вспомогательный, его сбой не должен влиять на заявку.
 */
export async function sendTelegramMessage(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    const started = Date.now();
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS),
      });

      if (res.ok) {
        console.log(`Telegram: отправлено с попытки ${attempt} за ${Date.now() - started}мс`);
        return true;
      }

      const body = await res.text();
      console.error(`Telegram: попытка ${attempt} — HTTP ${res.status} ${body.slice(0, 200)}`);
      // Ошибка самого Telegram (неверный chat_id, бот удалён из группы и т.п.) —
      // повторы бессмысленны, выходим сразу.
      if (res.status >= 400 && res.status < 500 && res.status !== 429) return false;
    } catch (e) {
      const err = e as Error;
      console.error(
        `Telegram: попытка ${attempt} — ${err.name}: ${err.message} (${Date.now() - started}мс)`,
      );
    }

    if (attempt < ATTEMPTS) await sleep(RETRY_DELAY_MS * attempt);
  }

  console.error(`Telegram: не доставлено после ${ATTEMPTS} попыток`);
  return false;
}

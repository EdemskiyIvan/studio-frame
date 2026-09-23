import { NextResponse } from "next/server";
import net from "node:net";
import dnsp from "node:dns/promises";

export const dynamic = "force-dynamic";

const HOST = "api.telegram.org";

function tcpProbe(host: string, family: 4 | 6, timeoutMs = 4000) {
  return new Promise<{ target: string; ok: boolean; ms: number; error?: string }>((resolve) => {
    const started = Date.now();
    const socket = net.connect({ host, port: 443, family });
    const finish = (ok: boolean, error?: string) => {
      socket.destroy();
      resolve({ target: `${host} (IPv${family})`, ok, ms: Date.now() - started, error });
    };
    socket.setTimeout(timeoutMs);
    socket.once("connect", () => finish(true));
    socket.once("timeout", () => finish(false, "timeout"));
    socket.once("error", (e) => finish(false, (e as Error).message));
  });
}

async function httpProbe(url: string, timeoutMs = 5000) {
  const started = Date.now();
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
    return { url, ok: res.ok, status: res.status, ms: Date.now() - started };
  } catch (e) {
    const err = e as Error;
    return { url, ok: false, ms: Date.now() - started, error: `${err.name}: ${err.message}` };
  }
}

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!process.env.DIAG_KEY || key !== process.env.DIAG_KEY) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const result: Record<string, unknown> = { node: process.version };

  // 1. Что резолвится изнутри контейнера
  try {
    result.dns_v4 = await dnsp.resolve4(HOST);
  } catch (e) {
    result.dns_v4 = `error: ${(e as Error).message}`;
  }
  try {
    result.dns_v6 = await dnsp.resolve6(HOST);
  } catch (e) {
    result.dns_v6 = `error: ${(e as Error).message}`;
  }

  // 2. TCP-коннект отдельно по IPv4 и IPv6 — покажет, какой стек «мёртвый»
  result.tcp = await Promise.all([tcpProbe(HOST, 4), tcpProbe(HOST, 6)]);

  // 3. Прямые коннекты к каждому IPv4-адресу
  if (Array.isArray(result.dns_v4)) {
    result.tcp_direct_v4 = await Promise.all(
      (result.dns_v4 as string[]).map((ip) => tcpProbe(ip, 4)),
    );
  }

  // 4. Реальные HTTP-запросы к Telegram — 3 подряд, смотрим стабильность
  if (token) {
    const runs = [];
    for (let i = 0; i < 3; i++) {
      runs.push(await httpProbe(`https://api.telegram.org/bot${token}/getMe`));
    }
    result.telegram_http = runs.map((r) => ({ ...r, url: "api.telegram.org/getMe" }));
  }

  // 5. Контроль: работает ли исходящая сеть в принципе
  result.control = await httpProbe("https://api.resend.com/domains");

  return NextResponse.json(result);
}

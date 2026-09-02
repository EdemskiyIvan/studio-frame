import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  contact?: string;
  projectType?: string;
  comment?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const contact = (body.contact ?? "").trim();
  const projectType = (body.projectType ?? "").trim();
  const comment = (body.comment ?? "").trim();

  if (!name || !contact || !projectType) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO ?? "hello@telnoffmedia.ru";
  const from = process.env.RESEND_FROM_EMAIL ?? "Заявки с сайта <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY не задан — заявка не отправлена", { name, contact, projectType });
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 });
  }

  const html = `
    <h2>Новая заявка с сайта</h2>
    <p><b>Имя:</b> ${escapeHtml(name)}</p>
    <p><b>Контакт:</b> ${escapeHtml(contact)}</p>
    <p><b>Тип проекта:</b> ${escapeHtml(projectType)}</p>
    ${comment ? `<p><b>Комментарий:</b> ${escapeHtml(comment)}</p>` : ""}
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: contact.includes("@") ? contact : undefined,
      subject: `Заявка с сайта: ${projectType}`,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", res.status, errText);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

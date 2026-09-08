import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "gabriellopezmdp@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, contact, need, budget, website } = body as Record<string, string>;

  // Honeypot: real visitors never fill this hidden field.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof contact !== "string" ||
    typeof need !== "string" ||
    !name.trim() ||
    !contact.trim() ||
    !need.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (name.length > 200 || contact.length > 200 || need.length > 5000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const replyTo = EMAIL_RE.test(contact.trim()) ? contact.trim() : undefined;

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo,
      subject: `Nueva consulta de ${name}`,
      html: `
        <h2>Nueva consulta desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contacto:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Presupuesto aproximado:</strong> ${escapeHtml(budget || "No especificado")}</p>
        <p><strong>Qué necesita:</strong></p>
        <p>${escapeHtml(need).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

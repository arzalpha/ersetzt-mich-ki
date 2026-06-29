import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 })
  }

  await resend.emails.send({
    from: 'Kontaktformular <noreply@ersetzt-mich-ki.de>',
    to: process.env.CONTACT_EMAIL ?? 'christian.arzberger@arzalpha.com',
    replyTo: email.trim(),
    subject: `Kontaktanfrage von ${name.trim()} — ersetzt-mich-ki.de`,
    text: `Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\nNachricht:\n${message.trim()}`,
  })

  return NextResponse.json({ ok: true })
}

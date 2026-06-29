import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail' }, { status: 400 })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Konfigurationsfehler' }, { status: 500 })
  }

  const body: Record<string, unknown> = { email }
  if (process.env.MAILERLITE_GROUP_ID) {
    body.groups = [process.env.MAILERLITE_GROUP_ID]
  }

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok && res.status !== 409) {
    return NextResponse.json({ error: 'MailerLite-Fehler' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

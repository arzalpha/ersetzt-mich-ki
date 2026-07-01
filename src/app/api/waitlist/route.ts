import { NextRequest, NextResponse } from 'next/server'
import { getClientIp, isRateLimited, isSameOrigin } from '@/lib/rateLimit'

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: 'Nicht erlaubt' }, { status: 403 })
  }

  const ip = getClientIp(req)
  if (isRateLimited(ip, 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.' }, { status: 429 })
  }

  const { email } = await req.json()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail' }, { status: 400 })
  }

  const listmonkUrl = process.env.LISTMONK_URL
  const listUuid = process.env.LISTMONK_LIST_UUID
  if (!listmonkUrl || !listUuid) {
    return NextResponse.json({ error: 'Konfigurationsfehler' }, { status: 500 })
  }

  const res = await fetch(`${listmonkUrl}/api/public/subscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, list_uuids: [listUuid] }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Listmonk-Fehler' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

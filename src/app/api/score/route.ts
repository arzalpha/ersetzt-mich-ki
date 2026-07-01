import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { buildPrompt } from '@/lib/prompt'
import type { ScoreResult } from '@/lib/types'
import { getClientIp, isRateLimited, isSameOrigin } from '@/lib/rateLimit'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: 'Nicht erlaubt' }, { status: 403 })
  }

  const ip = getClientIp(req)
  if (isRateLimited(ip, 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.' }, { status: 429 })
  }

  const { job, tasks } = await req.json()

  if (!job?.trim()) {
    return NextResponse.json({ error: 'Jobtitel fehlt' }, { status: 400 })
  }

  const jobNorm = job.trim().slice(0, 100)
  const tasksNorm = tasks?.trim().slice(0, 500) || ''

  const prompt = buildPrompt(jobNorm, tasksNorm)

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 800,
    temperature: 0,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''

  // Extract JSON object even if Claude wraps it in text or markdown
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  let result: ScoreResult
  try {
    result = JSON.parse(jsonMatch ? jsonMatch[0] : text)
  } catch {
    return NextResponse.json({ error: 'Parsing-Fehler', raw: text.slice(0, 200) }, { status: 500 })
  }

  return NextResponse.json(result)
}

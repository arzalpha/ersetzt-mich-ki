import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { buildPrompt } from '@/lib/prompt'
import type { ScoreResult } from '@/lib/types'

const client = new Anthropic()

export async function POST(req: NextRequest) {
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

  let result: ScoreResult
  try {
    result = JSON.parse(text)
  } catch {
    return NextResponse.json({ error: 'Parsing-Fehler' }, { status: 500 })
  }

  return NextResponse.json(result)
}

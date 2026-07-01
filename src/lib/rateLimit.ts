const hits = new Map<string, number[]>()

export function isRateLimited(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < windowMs)

  if (timestamps.length >= limit) {
    hits.set(ip, timestamps)
    return true
  }

  timestamps.push(now)
  hits.set(ip, timestamps)
  return false
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0].trim() ?? 'unknown'
}

export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin')
  if (!origin) return false
  try {
    const host = req.headers.get('host')
    return new URL(origin).host === host
  } catch {
    return false
  }
}

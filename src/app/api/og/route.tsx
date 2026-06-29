import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const job = searchParams.get('job') ?? 'Dein Beruf'
  const score = parseInt(searchParams.get('score') ?? '50', 10)

  const color = score < 30 ? '#00ff88' : score <= 65 ? '#ffe600' : '#e500a4'
  const label = score < 30 ? 'Geringes Risiko' : score <= 65 ? 'Mittleres Risiko' : 'Hohes Risiko'

  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', background: '#060614', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', background: `radial-gradient(circle, ${color}20 0%, transparent 70%)` }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ color: 'rgba(0,229,255,0.6)', fontSize: '18px', fontFamily: 'monospace', marginBottom: '20px', letterSpacing: '0.3em' }}>
            &gt; KI-JOBRISIKO-CHECK_
          </div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '32px', fontWeight: 700, marginBottom: '8px', textAlign: 'center' }}>
            {job}
          </div>
          <div style={{ fontSize: '160px', fontWeight: 900, color: color, lineHeight: 1, marginBottom: '16px', textShadow: `0 0 40px ${color}80` }}>
            {score}%
          </div>
          <div style={{ background: `${color}20`, border: `1px solid ${color}60`, color: color, fontSize: '24px', fontWeight: 700, padding: '10px 28px', borderRadius: '100px', marginBottom: '40px', fontFamily: 'monospace' }}>
            {label}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '20px', fontFamily: 'monospace' }}>
            ersetzt-mich-ki.de · ein Tool von karriereengel.de
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

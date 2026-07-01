'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import PixelRobot from '@/components/PixelRobot'
import type { ScoreResult } from '@/lib/types'

function scoreColor(score: number) {
  if (score < 30) return '#00ff88'
  if (score <= 65) return '#ffe600'
  return '#e500a4'
}
function scoreLabel(score: number) {
  if (score < 30) return 'Geringes Risiko'
  if (score <= 65) return 'Mittleres Risiko'
  return 'Hohes Risiko'
}
function scoreGlowClass(score: number) {
  if (score < 30) return 'glow-safe'
  if (score <= 65) return 'glow-warn'
  return 'glow-magenta'
}

function DimensionBar({ label, value, inverted }: { label: string; value: number; inverted?: boolean }) {
  const display = inverted ? 100 - value : value
  const color = display < 30 ? '#00ff88' : display <= 65 ? '#ffe600' : '#e500a4'
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono w-44 shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
      <div className="flex-1 rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${display}%`, background: color, boxShadow: `0 0 8px ${color}` }} />
      </div>
      <span className="text-xs font-mono w-8 text-right" style={{ color }}>{display}%</span>
    </div>
  )
}

function FreebieMockup() {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140" className="shrink-0" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,229,255,0.25))' }}>
      <rect x="14" y="10" width="86" height="112" rx="6" fill="#0d0d2b" stroke="#00e5ff" strokeOpacity="0.5" strokeWidth="1.5" transform="rotate(-4 57 66)" />
      <rect x="20" y="16" width="86" height="112" rx="6" fill="#0d0d2b" stroke="#00e5ff" strokeWidth="2" />
      <rect x="20" y="16" width="86" height="26" rx="6" fill="#00e5ff" opacity="0.12" />
      <rect x="30" y="26" width="44" height="6" rx="2" fill="#00e5ff" />
      <rect x="30" y="52" width="66" height="4" rx="2" fill="#ffffff" opacity="0.5" />
      <rect x="30" y="62" width="66" height="4" rx="2" fill="#ffffff" opacity="0.3" />
      <rect x="30" y="72" width="46" height="4" rx="2" fill="#ffffff" opacity="0.3" />
      <rect x="30" y="90" width="30" height="18" rx="4" fill="#e500a4" opacity="0.85" />
      <text x="45" y="102" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#fff">PDF</text>
      <circle cx="86" cy="99" r="12" fill="#00ff88" />
      <text x="86" y="103" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#060614">✓</text>
    </svg>
  )
}

function WaitlistBlock() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className="rounded-2xl p-6 mb-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(155,0,232,0.1) 100%)', border: '1px solid rgba(0,229,255,0.25)' }}
    >
      <div className="absolute pointer-events-none" style={{ top: '-40px', right: '-40px', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(229,0,164,0.25) 0%, transparent 70%)' }} />
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
        <FreebieMockup />
        <div className="flex-1 w-full">
          <p className="text-xs font-mono tracking-widest mb-2" style={{ color: '#00e5ff' }}>&gt; GRATIS DOWNLOAD_</p>
          <h2 className="text-2xl font-black text-white mb-1">Hol dir dein kostenloses Freebie</h2>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <strong className="text-white">„Mein KI-Karriereplan“</strong> — 10 Seiten mit deinem persönlichen
            Aktionsplan, je nach Risikolevel. Plus: Du bekommst als Erste:r Bescheid, wenn Karriereengel live geht.
          </p>
          {status === 'done' ? (
            <p className="text-sm font-bold" style={{ color: '#00ff88' }}>✓ Check dein Postfach — dein Freebie ist unterwegs!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="deine@email.de"
                required
                disabled={status === 'sending'}
                className="flex-1 min-w-0 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none"
                style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(0,229,255,0.3)' }}
              />
              <button
                type="submit"
                disabled={status === 'sending' || !email.trim()}
                className="font-black text-sm px-5 py-2.5 rounded-xl transition whitespace-nowrap text-white"
                style={{ background: 'linear-gradient(135deg, #00e5ff 0%, #9b00e8 100%)', boxShadow: '0 0 20px rgba(0,229,255,0.3)', opacity: status === 'sending' ? 0.5 : 1 }}
              >
                {status === 'sending' ? '…' : 'Jetzt kostenlos sichern →'}
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-xs mt-2" style={{ color: '#e500a4' }}>Fehler beim Eintragen — bitte nochmal versuchen.</p>}
          <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Kein Spam. Jederzeit abmeldbar.</p>
        </div>
      </div>
    </section>
  )
}

export default function ErgebnisPage() {
  const params = useSearchParams()
  const job = params.get('job') ?? ''
  const scoreParam = parseInt(params.get('score') ?? '0', 10)
  const horizon = params.get('horizon') ?? 'mittel'

  const [result, setResult] = useState<ScoreResult | null>(null)
  const [hasTasks, setHasTasks] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem('scoreResult')
    const storedTasks = sessionStorage.getItem('scoreTasks')
    if (stored) setResult(JSON.parse(stored))
    if (storedTasks) setHasTasks(storedTasks.trim().length > 0)
  }, [])

  const score = result?.score ?? scoreParam
  const color = scoreColor(score)
  const label = scoreLabel(score)
  const glowClass = scoreGlowClass(score)

  const shareUrl = `https://ersetzt-mich-ki.de/ergebnis?job=${encodeURIComponent(job)}&score=${score}&horizon=${horizon}`
  const shareText = `Mein KI-Jobrisiko-Score als ${job}: ${score} % 🤖 Wie sieht es bei dir aus?`

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute pointer-events-none" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`, transition: 'background 0.5s' }} />

      <div className="w-full max-w-xl relative z-10">
        <Link href="/" className="text-xs font-mono transition mb-8 block" style={{ color: 'rgba(0,229,255,0.5)' }}>
          ← anderen Beruf prüfen
        </Link>

        <div className="flex items-start gap-4 mb-2">
          <PixelRobot size={60} />
          <div>
            <p className="text-xs font-mono tracking-widest mb-1" style={{ color: 'rgba(0,229,255,0.6)' }}>&gt; SCAN ABGESCHLOSSEN_</p>
            <h1 className="text-3xl font-black text-white">{job}</h1>
            {hasTasks && <p className="text-xs mt-1 font-mono" style={{ color: '#ffe600' }}>✦ persönlicher Score · deine Aufgaben berücksichtigt</p>}
          </div>
        </div>

        <div className="flex flex-col items-center my-10">
          <div className={`text-[100px] font-black leading-none ${glowClass}`} style={{ color, fontVariantNumeric: 'tabular-nums' }}>
            {score}%
          </div>
          <div className="mt-3 text-sm font-bold px-5 py-1.5 rounded-full font-mono" style={{ background: `${color}18`, border: `1px solid ${color}50`, color }}>
            {label}
          </div>
        </div>

        {result && (
          <>
            <section className="mb-8">
              <h2 className="text-xs font-mono tracking-widest mb-4" style={{ color: 'rgba(0,229,255,0.6)' }}>&gt; WARUM DIESER SCORE</h2>
              <ul className="flex flex-col gap-3">
                {result.reasons.map((r, i) => (
                  <li key={i} className="text-sm flex gap-3 items-start" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span className="font-mono shrink-0 mt-0.5" style={{ color: '#e500a4' }}>{String(i + 1).padStart(2, '0')}.</span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 rounded-2xl p-5" style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.1)' }}>
              <h2 className="text-xs font-mono tracking-widest mb-5" style={{ color: 'rgba(0,229,255,0.6)' }}>&gt; ANALYSE · 5 DIMENSIONEN</h2>
              <div className="flex flex-col gap-4">
                <DimensionBar label="ROUTINE-ANTEIL" value={result.routine} />
                <DimensionBar label="REGELBASIERTHEIT" value={result.rule_based} />
                <DimensionBar label="KREATIVITÄT" value={result.creativity} inverted />
                <DimensionBar label="MENSCH. INTERAKTION" value={result.human} inverted />
                <DimensionBar label="KÖRPERL. PRÄSENZ" value={result.physical} inverted />
              </div>
              <p className="text-xs font-mono mt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>Grün = KI-sicher · Gelb = mittleres Risiko · Pink = hohes Risiko</p>
            </section>

            <section className="mb-8 rounded-2xl p-5" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <h2 className="text-xs font-mono tracking-widest mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>&gt; DEIN AKTIONSPLAN</h2>
              <ul className="flex flex-col gap-3">
                {result.what_to_do.map((w, i) => (
                  <li key={i} className="text-sm flex gap-3 items-start" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span className="font-mono shrink-0 mt-0.5" style={{ color: '#00ff88' }}>✓</span>
                    {w}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        <section className="mb-8">
          <h2 className="text-xs font-mono tracking-widest mb-4" style={{ color: 'rgba(0,229,255,0.6)' }}>&gt; ERGEBNIS TEILEN</h2>
          <div className="flex gap-3 flex-wrap">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-bold px-4 py-2 rounded-lg transition hover:opacity-80" style={{ background: '#0077b5' }}>LinkedIn</a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-bold px-4 py-2 rounded-lg transition hover:opacity-80" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>𝕏 / Twitter</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-bold px-4 py-2 rounded-lg transition hover:opacity-80" style={{ background: '#25d366' }}>WhatsApp</a>
          </div>
        </section>

        <section className="rounded-2xl p-6 mb-8 opacity-40 pointer-events-none select-none" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>&gt; DEMNÄCHST_</p>
          <h2 className="text-2xl font-black mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Mach deinen Lebenslauf KI-sicher</h2>
          <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>Karriereengel hilft dir, die Fähigkeiten in den Vordergrund zu stellen, die KI nicht ersetzen kann — mit einem Lebenslauf, der dich zukunftssicher positioniert.</p>
          <span className="inline-block font-black text-lg px-6 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
            Bald verfügbar
          </span>
        </section>

        <WaitlistBlock />

        <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Spielerische, illustrative Einschätzung — keine Berufsberatung, ohne Gewähr. Bewertet anhand von 5 Dimensionen mit einem KI-Sprachmodell (Claude, Anthropic).{' '}
            <Link href="/ueber" className="underline hover:opacity-60 transition">Über das Projekt</Link>{' · '}
            <Link href="/impressum" className="underline hover:opacity-60 transition">Impressum</Link>{' · '}
            <Link href="/datenschutz" className="underline hover:opacity-60 transition">Datenschutz</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

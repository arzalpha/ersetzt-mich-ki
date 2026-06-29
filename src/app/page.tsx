'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PixelRobot from '@/components/PixelRobot'
import type { ScoreResult } from '@/lib/types'

export default function Home() {
  const router = useRouter()
  const [job, setJob] = useState('')
  const [tasks, setTasks] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!job.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job: job.trim(), tasks: tasks.trim() }),
      })

      if (!res.ok) throw new Error()

      const result: ScoreResult = await res.json()
      sessionStorage.setItem('scoreResult', JSON.stringify(result))
      sessionStorage.setItem('scoreJob', job.trim())
      sessionStorage.setItem('scoreTasks', tasks.trim())

      router.push(
        `/ergebnis?job=${encodeURIComponent(job.trim())}&score=${result.score}&horizon=${result.horizon}`
      )
    } catch {
      setError('Fehler beim Abrufen. Bitte nochmal versuchen.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '60%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(229,0,164,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-lg relative z-10">
        <div className="flex justify-center mb-6">
          <PixelRobot size={100} />
        </div>

        <p className="text-center text-xs font-mono tracking-[0.3em] mb-4" style={{ color: '#00e5ff', opacity: 0.7 }}>
          &gt; KI-JOBRISIKO-CHECK_
        </p>

        <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight text-center mb-3">
          Ersetzt KI<br />
          <span className="glow-magenta" style={{ color: '#e500a4' }}>deinen Job?</span>
        </h1>

        <p className="text-center mb-8" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem' }}>
          Jobtitel eingeben — der Roboter sagt dir, wie gefährdet du bist
          <br />und was du dagegen tun kannst.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono font-semibold tracking-widest mb-2" style={{ color: '#00e5ff', opacity: 0.8 }}>
              JOBTITEL *
            </label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="z.B. Buchhalter, Krankenpflegerin, Designer …"
              maxLength={100}
              required
              disabled={loading}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-lg transition"
              style={{ background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.08)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold tracking-widest mb-2" style={{ color: '#00e5ff', opacity: 0.5 }}>
              DEINE AUFGABEN <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>— OPTIONAL · für deinen persönlichen Score</span>
            </label>
            <textarea
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              placeholder="z.B. Ich führe Beratungsgespräche, erstelle Berichte und entwickle neue Konzepte …"
              maxLength={500}
              rows={3}
              disabled={loading}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-sm transition resize-none"
              style={{ background: 'rgba(0,229,255,0.03)', border: '1px solid rgba(0,229,255,0.12)' }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.12)' }}
            />
          </div>

          {error && <p className="text-sm text-center" style={{ color: '#e500a4' }}>{error}</p>}

          <button
            type="submit"
            disabled={loading || !job.trim()}
            className="w-full font-black text-xl py-4 rounded-xl transition-all duration-200 mt-1"
            style={{
              background: loading ? 'rgba(229,0,164,0.3)' : 'linear-gradient(135deg, #e500a4 0%, #9b00e8 100%)',
              color: '#fff',
              boxShadow: loading ? 'none' : '0 0 30px rgba(229,0,164,0.4)',
              opacity: !job.trim() ? 0.4 : 1,
              cursor: !job.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            {loading
              ? <span className="font-mono text-base tracking-widest" style={{ color: '#00e5ff' }}>&gt; ROBOTER ANALYSIERT …</span>
              : 'Jetzt prüfen →'}
          </button>
        </form>

        <p className="text-center mt-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Spielerische, illustrative Einschätzung · Keine Berufsberatung · Ohne Gewähr
        </p>
        <p className="text-center mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          Ein Tool von{' '}
          <a href="https://karriereengel.de" target="_blank" rel="noopener noreferrer"
            className="underline transition hover:opacity-60" style={{ color: 'rgba(255,255,255,0.3)' }}>
            karriereengel.de
          </a>
          {' · '}
          <a href="/impressum" className="underline transition hover:opacity-60" style={{ color: 'rgba(255,255,255,0.3)' }}>Impressum</a>
          {' · '}
          <a href="/datenschutz" className="underline transition hover:opacity-60" style={{ color: 'rgba(255,255,255,0.3)' }}>Datenschutz</a>
        </p>
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Kontakt() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(0,229,255,0.05)',
    border: '1px solid rgba(0,229,255,0.2)',
  }

  return (
    <main className="min-h-screen px-4 py-16 max-w-xl mx-auto">
      <Link href="/" className="text-xs font-mono transition mb-8 block" style={{ color: 'rgba(0,229,255,0.5)' }}>
        ← Zurück
      </Link>
      <p className="text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(0,229,255,0.6)' }}>&gt; KONTAKT_</p>
      <h1 className="text-3xl font-black text-white mb-2">Schreib uns</h1>
      <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Fragen, Feedback oder Kooperationsanfragen — wir antworten in der Regel innerhalb von 48 Stunden.
      </p>

      {status === 'done' ? (
        <div className="rounded-2xl p-6 text-center" style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }}>
          <p className="text-2xl font-black text-white mb-2">Nachricht gesendet ✓</p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Wir melden uns bald bei dir.</p>
          <Link href="/" className="inline-block mt-4 text-sm underline" style={{ color: 'rgba(0,229,255,0.6)' }}>Zurück zur Startseite</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2" style={{ color: '#00e5ff', opacity: 0.7 }}>NAME *</label>
            <input
              type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Dein Name" required maxLength={100}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)' }}
            />
          </div>
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2" style={{ color: '#00e5ff', opacity: 0.7 }}>E-MAIL *</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de" required maxLength={200}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)' }}
            />
          </div>
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2" style={{ color: '#00e5ff', opacity: 0.7 }}>NACHRICHT *</label>
            <textarea
              value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Was liegt dir auf dem Herzen?" required maxLength={2000} rows={5}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition resize-none"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)' }}
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-center" style={{ color: '#e500a4' }}>Fehler beim Senden. Bitte nochmal versuchen.</p>
          )}

          <button
            type="submit" disabled={status === 'sending'}
            className="w-full font-black text-lg py-3 rounded-xl transition text-white"
            style={{
              background: 'linear-gradient(135deg, #e500a4 0%, #9b00e8 100%)',
              boxShadow: '0 0 24px rgba(229,0,164,0.3)',
              opacity: status === 'sending' ? 0.5 : 1,
            }}
          >
            {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden →'}
          </button>
        </form>
      )}
    </main>
  )
}

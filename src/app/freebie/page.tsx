'use client'

import { useEffect } from 'react'
import PixelRobot from '@/components/PixelRobot'

const PDF_URL = '/ki-karriereplan.pdf'

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

export default function Freebie() {
  useEffect(() => {
    window._paq?.push(['trackEvent', 'Freebie', 'Download', 'ki-karriereplan.pdf'])
    const timer = setTimeout(() => {
      window.location.href = PDF_URL
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <PixelRobot size={70} />
      <p className="text-sm mt-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Dein Download startet …</p>
      <a href={PDF_URL} className="text-sm mt-3 underline" style={{ color: 'rgba(0,229,255,0.7)' }}>
        Startet nichts? Hier klicken.
      </a>
    </main>
  )
}

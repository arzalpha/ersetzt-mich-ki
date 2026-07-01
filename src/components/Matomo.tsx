'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const MATOMO_URL = 'https://analytics.arzalpha.com/'
const MATOMO_SITE_ID = '8'
const CONSENT_KEY = 'matomo-consent'

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

type Consent = 'granted' | 'denied' | null

function getStoredConsent(): Consent {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(CONSENT_KEY)
  return v === 'granted' || v === 'denied' ? v : null
}

export function MatomoTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstLoad = useRef(true)
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(() => {
    setConsent(getStoredConsent())
  }, [])

  useEffect(() => {
    if (consent !== 'granted') return
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }
    if (!window._paq) return
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    window._paq.push(['setCustomUrl', url])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }, [pathname, searchParams, consent])

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, 'granted')
    setConsent('granted')
  }

  function decline() {
    window.localStorage.setItem(CONSENT_KEY, 'denied')
    setConsent('denied')
  }

  return (
    <>
      {consent === 'granted' && (
        <Script id="matomo-init" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${MATOMO_URL}";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      )}
      {consent === null && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4"
          style={{ background: '#0d0d2b', borderTop: '1px solid rgba(0,229,255,0.2)' }}
        >
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Wir nutzen anonyme, cookiefreie Reichweitenmessung (Matomo, selbst gehostet). Keine Weitergabe an Dritte.{' '}
              <a href="/datenschutz" className="underline" style={{ color: 'rgba(0,229,255,0.8)' }}>Mehr erfahren</a>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="text-sm px-4 py-2 rounded-lg transition"
                style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="text-sm font-bold px-4 py-2 rounded-lg text-white transition"
                style={{ background: '#00e5ff', color: '#060614' }}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

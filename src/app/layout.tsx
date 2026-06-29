import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ersetzt KI deinen Job? — Kostenloser KI-Risikocheck',
  description:
    'Gib deinen Jobtitel ein und erfahre, wie wahrscheinlich Künstliche Intelligenz deinen Job automatisiert. Spielerische, illustrative Einschätzung — kostenlos und ohne Anmeldung.',
  metadataBase: new URL('https://ersetzt-mich-ki.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'ersetzt-mich-ki.de',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}

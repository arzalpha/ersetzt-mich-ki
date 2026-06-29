import Link from 'next/link'

export const metadata = { title: 'Impressum — ersetzt-mich-ki.de' }

export default function Impressum() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-xs font-mono transition mb-8 block" style={{ color: 'rgba(0,229,255,0.5)' }}>← Zurück</Link>
      <h1 className="text-3xl font-black text-white mb-8">Impressum</h1>
      <div className="text-sm leading-relaxed space-y-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
        <p className="font-semibold text-white">Angaben gemäß § 5 TMG</p>
        <p>Christian Arzberger<br />c/o Block Services<br />Stuttgarter Str. 106<br />70736 Fellbach</p>
        <p><strong className="text-white">Kontakt:</strong><br />E-Mail: <a href="mailto:christian.arzberger@arzalpha.com" className="underline" style={{ color: 'rgba(255,255,255,0.6)' }}>christian.arzberger@arzalpha.com</a></p>
        <p><strong className="text-white">Verantwortlich für den Inhalt gem. § 55 Abs. 2 RStV:</strong><br />Christian Arzberger, Adresse wie oben</p>
        <p className="text-xs pt-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Dieses Tool ist ein spielerisches, illustratives Analyse-Instrument und stellt keine Berufs-, Rechts- oder sonstige Beratung dar.</p>
      </div>
    </main>
  )
}

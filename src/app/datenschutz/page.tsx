import Link from 'next/link'

export const metadata = { title: 'Datenschutz — ersetzt-mich-ki.de' }

export default function Datenschutz() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-xs font-mono transition mb-8 block" style={{ color: 'rgba(0,229,255,0.5)' }}>← Zurück</Link>
      <h1 className="text-3xl font-black text-white mb-8">Datenschutzerklärung</h1>
      <div className="text-sm leading-relaxed space-y-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
        <section>
          <h2 className="text-white font-bold mb-2">1. Verantwortlicher</h2>
          <p>Christian Arzberger, c/o Block Services, Stuttgarter Str. 106, 70736 Fellbach<br />E-Mail: <a href="mailto:christian.arzberger@arzalpha.com" className="underline" style={{ color: 'rgba(255,255,255,0.6)' }}>christian.arzberger@arzalpha.com</a></p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">2. Welche Daten wir verarbeiten</h2>
          <p>Wenn du deinen Jobtitel (und optional deine Aufgaben) eingibst, wird dieser Text zur Analyse an die Anthropic API (Claude) übermittelt. Die Eingaben werden <strong className="text-white">nicht dauerhaft gespeichert</strong> und nicht mit deiner Person verknüpft.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">3. Verarbeitung durch Anthropic</h2>
          <p>Deine Eingabe wird zur Verarbeitung an Anthropic PBC (USA) übertragen. Anthropic verarbeitet die Anfrage gemäß ihrer <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(255,255,255,0.6)' }}>Datenschutzerklärung</a>. Die Übertragung erfolgt auf Basis von Art. 49 Abs. 1 lit. b DSGVO.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">4. Hosting</h2>
          <p>Diese Website wird über Vercel Inc. (USA) gehostet. Dabei werden technisch notwendige Daten (IP-Adresse, Zugriffszeit, Browser) serverseitig verarbeitet. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(255,255,255,0.6)' }}>Vercel Privacy Policy</a>.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">5. Cookies & Tracking</h2>
          <p>Diese Website verwendet <strong className="text-white">keine Tracking-Cookies</strong> und kein Analytics. Die Ergebnisanzeige nutzt den sessionStorage deines Browsers (lokal, wird beim Schließen des Tabs gelöscht).</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">6. Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Da wir keine personenbezogenen Daten dauerhaft speichern, entfällt in der Regel ein Löschungsanspruch. Kontakt: <a href="mailto:christian.arzberger@arzalpha.com" className="underline" style={{ color: 'rgba(255,255,255,0.6)' }}>christian.arzberger@arzalpha.com</a></p>
        </section>
        <p className="text-xs pt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>Stand: Juni 2026 · <Link href="/impressum" className="underline">Impressum</Link></p>
      </div>
    </main>
  )
}

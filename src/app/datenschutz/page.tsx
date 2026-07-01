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
          <p>
            Christian Arzberger, c/o Block Services, Stuttgarter Str. 106, 70736 Fellbach<br />
            Kontakt: <Link href="/kontakt" className="underline" style={{ color: 'rgba(0,229,255,0.7)' }}>Kontaktformular</Link>
          </p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">2. Welche Daten wir verarbeiten</h2>
          <p>Wenn du deinen Jobtitel (und optional deine Aufgaben) eingibst, wird dieser Text zur Analyse an die Anthropic API (Claude) übermittelt. Die Eingaben werden <strong className="text-white">nicht dauerhaft gespeichert</strong> und nicht mit deiner Person verknüpft.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">3. Verarbeitung durch Anthropic</h2>
          <p>Deine Eingabe wird zur Verarbeitung an Anthropic PBC (USA) übertragen gemäß ihrer <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(0,229,255,0.7)' }}>Datenschutzerklärung</a>. Grundlage: Art. 49 Abs. 1 lit. b DSGVO.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">4. Hosting</h2>
          <p>Diese Website wird über Vercel Inc. (USA) gehostet. Dabei werden technisch notwendige Daten (IP-Adresse, Zugriffszeit, Browser) verarbeitet. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'rgba(0,229,255,0.7)' }}>Vercel Privacy Policy</a>.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">5. Kontaktformular</h2>
          <p>Wenn du das Kontaktformular nutzt, werden dein Name, deine E-Mail-Adresse und deine Nachricht zur Bearbeitung deiner Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten werden nicht an Dritte weitergegeben und nach Abschluss der Anfrage gelöscht.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">6. Cookies & Reichweitenmessung</h2>
          <p>Diese Website verwendet <strong className="text-white">keine Tracking-Cookies</strong>. Die Ergebnisanzeige nutzt den sessionStorage deines Browsers (lokal, wird beim Schließen des Tabs gelöscht).</p>
          <p className="mt-3">Zur anonymen Reichweitenmessung setzen wir Matomo ein, eine selbst gehostete Open-Source-Analysesoftware (kein Drittanbieter). Matomo ist so konfiguriert, dass <strong className="text-white">keine Cookies gesetzt</strong> und deine IP-Adresse anonymisiert wird. Es findet keine Weitergabe an Dritte statt. Die Messung erfolgt nur nach deiner Zustimmung über den Cookie-Hinweis auf der Website; deine Entscheidung wird lokal in deinem Browser gespeichert und kann jederzeit durch Löschen der Browserdaten zurückgesetzt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-2">7. Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Kontakt über das <Link href="/kontakt" className="underline" style={{ color: 'rgba(0,229,255,0.7)' }}>Kontaktformular</Link>.</p>
        </section>
        <p className="text-xs pt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Stand: Juni 2026 · <Link href="/impressum" className="underline">Impressum</Link>
        </p>
      </div>
    </main>
  )
}

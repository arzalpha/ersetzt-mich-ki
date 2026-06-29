import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über dieses Projekt — ersetzt-mich-ki.de',
  description: 'Warum ich dieses Tool gebaut habe — und warum ich an KI glaube, ohne dabei Panik zu verbreiten.',
}

export default function Ueber() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-xs font-mono transition mb-8 block" style={{ color: 'rgba(0,229,255,0.5)' }}>
        ← Zurück
      </Link>

      <p className="text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(0,229,255,0.6)' }}>
        &gt; ÜBER DIESES PROJEKT_
      </p>
      <h1 className="text-4xl font-black text-white mb-10 leading-tight">
        Kein Alarmismus.<br />
        <span style={{ color: '#00e5ff' }}>Nur Klarheit.</span>
      </h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Warum gibt es dieses Tool?</h2>
          <p>
            KI verändert die Arbeitswelt — das ist keine Dystopie, sondern Realität. Millionen Menschen
            fragen sich gerade, was das für ihren Beruf bedeutet. Die meisten Antworten, die sie finden,
            sind entweder panikmachend oder beschönigend.
          </p>
          <p className="mt-3">
            Ich wollte etwas Drittes: ein ehrliches, spielerisches Werkzeug, das deinen Beruf
            in zwei Minuten einordnet — und dir konkrete Wege aufzeigt, wie du dich
            positionieren kannst. Keine Katastrophenszenarien, keine leeren Beruhigungen.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Ich glaube an KI.</h2>
          <p>
            Ich bin überzeugter KI-Nutzer und -Enthusiast. Künstliche Intelligenz ist eines der
            kraftvollsten Werkzeuge, das Menschen je hatten — sie macht uns produktiver, kreativer
            und hilft uns, bessere Entscheidungen zu treffen.
          </p>
          <p className="mt-3">
            Genau deshalb nehme ich sie ernst. Wer KI verharmlost, wird von ihr überrascht. Wer
            sie versteht, kann mit ihr wachsen.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Was dieses Tool ist — und was nicht.</h2>
          <div className="rounded-2xl p-5 space-y-2" style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.1)' }}>
            <p className="flex gap-2"><span style={{ color: '#00ff88' }}>✓</span> Eine spielerische, illustrative Einschätzung auf Basis öffentlich bekannter Forschung</p>
            <p className="flex gap-2"><span style={{ color: '#00ff88' }}>✓</span> Ein Denkanstoß, der zum Handeln motiviert</p>
            <p className="flex gap-2"><span style={{ color: '#00ff88' }}>✓</span> Transparent in der Methodik — 5 Dimensionen, offen erläutert</p>
            <p className="flex gap-2 mt-3"><span style={{ color: '#e500a4' }}>✗</span> Keine Berufsberatung oder wissenschaftliche Studie</p>
            <p className="flex gap-2"><span style={{ color: '#e500a4' }}>✗</span> Keine Prognose mit Garantie — die Zukunft ist ungewiss</p>
            <p className="flex gap-2"><span style={{ color: '#e500a4' }}>✗</span> Kein Urteil über einzelne Menschen oder Arbeitgeber</p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Wer steckt dahinter?</h2>
          <p>
            Ich bin <strong style={{ color: '#fff' }}>Christian Arzberger</strong> — und dieses Tool
            ist mein Projekt. Ich baue{' '}
            <a href="https://karriereengel.de" target="_blank" rel="noopener noreferrer"
              className="underline font-semibold" style={{ color: '#00e5ff' }}>
              Karriereengel
            </a>
            {' '}— eine Plattform, die Menschen dabei hilft, ihre berufliche Zukunft aktiv zu gestalten.
            Lebenslauf, Bewerbung, Positionierung: Karriereengel steht auf der Seite der Arbeitnehmer:innen.
          </p>
          <p className="mt-3">
            Ich glaube: Der beste Schutz vor KI-Automatisierung ist kein Kopf-in-den-Sand-Stecken,
            sondern ein starkes, klares Profil — das die Fähigkeiten betont, die KI nicht ersetzen kann.
            Dieses Tool soll der erste Schritt sein.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Feedback & Kontakt</h2>
          <p>
            Hast du Anmerkungen zur Methodik, einen Fehler entdeckt oder willst einfach Hallo sagen?
            Ich freue mich über jede Nachricht.
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-3 font-bold px-5 py-2 rounded-xl text-sm transition hover:opacity-80"
            style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)', color: '#00e5ff' }}
          >
            Kontaktformular →
          </Link>
        </section>

      </div>

      <div className="mt-12 pt-6 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}>
        <Link href="/impressum" className="underline hover:opacity-60 transition">Impressum</Link>
        {' · '}
        <Link href="/datenschutz" className="underline hover:opacity-60 transition">Datenschutz</Link>
        {' · '}
        <Link href="/kontakt" className="underline hover:opacity-60 transition">Kontakt</Link>
      </div>
    </main>
  )
}

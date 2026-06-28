# Architektur — ersetzt-mich-ki.de

> Entschieden: 29.06.2026. Bindend für Phase 1 (MVP).

---

## Scoring-Modell

### Zwei Modi

| Modus | Trigger | Deterministik |
|---|---|---|
| **Berufs-Score** | Jobtitel only | 100% — Supabase-Cache |
| **Persönlicher Score** | Jobtitel + eigene Aufgaben | ~99% — Claude temperature=0 |

Auf der Ergebnis-Seite erscheinen bei Aufgaben-Eingabe **beide Scores nebeneinander**:
> „Dein Score: 58 % — Durchschnitt Buchhalter: 71 %"

Dieses Delta ist der virale Hook.

---

## Scoring-Dimensionen (5 Achsen)

| Dimension | 0 = sicher | 100 = KI-Risiko | Gewicht |
|---|---|---|---|
| `routine` | variabel, situativ | repetitiv, vorhersehbar | 30 % |
| `rule_based` | Urteil, Intuition | klar regelbasiert/datengetrieben | 25 % |
| `creativity` | Kreativität ist Kern | kaum nötig | 20 % *(invertiert)* |
| `human` | persönl. Interaktion unverzichtbar | kaum Menschenkontakt | 15 % *(invertiert)* |
| `physical` | körperl./ortsgeb. Präsenz nötig | ortsunabhängig möglich | 10 % *(invertiert)* |

**Invertiert** = hoher Rohwert bedeutet „sicher", wird vor Gewichtung umgekehrt (100 − x).

**Score-Formel:**
```
score = routine×0.30 + rule_based×0.25 + (100−creativity)×0.20
        + (100−human)×0.15 + (100−physical)×0.10
```

**Zeithorizont aus Score:**
- < 30 % → `niedrig` (sicher)
- 30–65 % → `mittel`
- > 65 % → `hoch` (hohes Risiko)

---

## Claude System-Prompt (Phase 1)

```
Du bist ein neutrales Analyse-Tool für KI-Automatisierungsrisiken im deutschen Arbeitsmarkt.
Beantworte NUR auf Deutsch. Antworte NUR als valides JSON, kein Text davor oder danach.
Sei ehrlich aber konstruktiv — jeder Score bekommt einen Ausweg.

Bewerte den Beruf nach exakt diesem Schema (Werte 0–100, ganzzahlig):

routine      — Anteil repetitiver, vorhersehbarer Aufgaben (0=nie gleich, 100=immer gleich)
rule_based   — Anteil regelbasierter/datengetriebener Arbeit (0=Intuition, 100=klare Regeln)
creativity   — Anteil kreativer, neuartiger Problemlösung (0=kaum, 100=Kernkompetenz)
human        — Unverzichtbarkeit persönlicher menschlicher Interaktion (0=kaum, 100=unverzichtbar)
physical     — Notwendigkeit körperlicher/ortsgebundener Präsenz (0=vollständig remote, 100=immer vor Ort)

Berechne score nach: routine*0.30 + rule_based*0.25 + (100-creativity)*0.20 + (100-human)*0.15 + (100-physical)*0.10
Runde auf ganze Zahl.

horizon: "niedrig" wenn score<30, "mittel" wenn 30<=score<=65, "hoch" wenn score>65

reasons: 3 kurze, konkrete Sätze WAS genau automatisierbar ist (oder warum nicht).
what_to_do: 3 konkrete, ermutigende Handlungsempfehlungen für diese Person.

BERUF: {{jobtitel}}
{{#aufgaben}}
INDIVIDUELLE AUFGABEN DIESER PERSON: {{aufgaben}}
Berücksichtige diese Aufgaben bei der Bewertung. Gibt es Abweichungen vom Berufsdurchschnitt, erkläre sie in reasons.
{{/aufgaben}}

Antworte exakt in diesem Format:
{
  "routine": 0,
  "rule_based": 0,
  "creativity": 0,
  "human": 0,
  "physical": 0,
  "score": 0,
  "horizon": "niedrig|mittel|hoch",
  "reasons": ["...", "...", "..."],
  "what_to_do": ["...", "...", "..."]
}
```

---

## Caching-Strategie

### Supabase-Tabelle: `job_scores`

```sql
CREATE TABLE job_scores (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title    text NOT NULL,              -- normalisiert: lowercase, trimmed
  score        int NOT NULL,
  horizon      text NOT NULL,
  dimensions   jsonb NOT NULL,             -- {routine, rule_based, creativity, human, physical}
  reasons      text[] NOT NULL,
  what_to_do   text[] NOT NULL,
  source       text DEFAULT 'live',        -- 'live' | 'batch'
  created_at   timestamptz DEFAULT now(),
  UNIQUE(job_title)
);
```

**Lookup-Logik:**
1. Normalize Jobtitel (lowercase, trim, Umlaute normalisieren)
2. Exact-Match in `job_scores` → sofortige Antwort
3. Kein Treffer → Claude-Call (temperature=0) → Ergebnis speichern

**Persönlicher Score (+ Aufgaben):** Wird NICHT gecacht (zu viele Kombinationen). Direkt Claude-Call, temperature=0.

---

## Tech-Stack (Phase 1)

| Komponente | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| Hosting | Vercel |
| KI | Anthropic Claude (claude-haiku-4-5 für Speed/Cost) |
| Share-Cards | `@vercel/og` (dynamische OG-Bilder) |
| Datenbank | Supabase (job_scores + optional leads) |
| Sprache | Nur Deutsch |

---

## Entscheidungslog

| Datum | Entscheidung | Begründung |
|---|---|---|
| 29.06.2026 | Deterministischer Score | Virales Teilen setzt Konsistenz voraus |
| 29.06.2026 | Zwei Modi (Basis + Persönlich) | Delta als viraler Hook |
| 29.06.2026 | Nur Deutsch | Zielgruppe DACH, kein i18n-Aufwand im MVP |
| 29.06.2026 | Claude Haiku | Speed + Kosten; Sonnet nur bei Qualitätsproblemen |
| 29.06.2026 | Kein Batch-Precompute in Phase 1 | DB wächst organisch; Komplexität spart Wochenend-Zeit |

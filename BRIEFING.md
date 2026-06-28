# Projektbriefing — ersetzt-mich-ki.de

> Erstellt 29.06.2026 (arzalpha-Ideensession). Virales Marketing-/Funnel-Asset für **Karriereengel**. Kein eigenständiges Produkt.
> **Timing:** Domain JETZT reservieren; **Bau erst NACH** den aktuellen Prioritäten (Buchreihe, mietermappe-Launch).

---

## 1. Idee in einem Satz
Eine virale Mini-Website, auf der ein:e Arbeitnehmer:in in DACH den eigenen **Jobtitel (+ optional Tätigkeiten)** eingibt und eine **spielerische, illustrative Prognose** bekommt: „Wie wahrscheinlich ersetzt KI deinen Job?" — teilbar, mit klarem **Funnel zu Karriereengel**.

## 2. Warum dieses Projekt (strategische Logik)
- **Eingebaute Distribution:** Spielt mit (berechtigter) Job-Angst → hohe Teil-/PR-Wahrscheinlichkeit.
- **Funnel-Asset:** Job-Angst ist der perfekte Einstieg → Karriereengel (CV zukunftssicher machen) + später Weiterbildungs-Affiliate (Förderkompass).
- **Schnell baubar:** MVP an einem Wochenende möglich.

## 3. Zielgruppe
Arbeitnehmer:innen in DACH (DE primär, AT/CH später), die sich Sorgen um KI/Jobsicherheit machen. Breit, emotional, teil-affin. **Nicht** B2B/HR.

## 4. Features

### MVP (Phase 1 — schlank & viral)
- **Landing:** knackiger Hero („Ersetzt KI deinen Job?"), 1 Eingabefeld (Jobtitel) + optionales Textfeld (typische Aufgaben), 1 CTA.
- **KI-Prognose:** LLM (Claude) bewertet anhand eines **transparenten, nachvollziehbaren Rasters** (Routine-Anteil, Daten-/Regelbasiertheit, Kreativität, zwischenmenschlicher Anteil, körperliche Präsenz) → **Risiko-Score in %** + **Zeithorizont** (niedrig/mittel/hoch) + 3–4 kurze, kluge Begründungen.
- **Ergebnis-Seite:** großer Score (Gauge/Visual), Begründungen, **„Was du tun kannst"** → CTA zu Karriereengel.
- **Share-Card (KERN der Viralität):** dynamisch generiertes OG-Bild mit dem persönlichen Score → WhatsApp/LinkedIn/X-Buttons.
- **Disclaimer (prominent):** „Spielerische, illustrative Einschätzung. Keine Berufsberatung. Ohne Gewähr."
- **Optional Lead-Capture:** „Ausführlicher Report + Tipps per Mail" → Karriereengel/Newsletter.
- **Impressum + Datenschutz** (Pflicht).

### Später (Phase 2/3)
- E-Mail-Strecke, A/B-Tests am Hook, PR-/Reddit-/LinkedIn-Launch.
- **Programmatic SEO:** „Wird [Beruf] von KI ersetzt?"-Seiten je Beruf.
- AT/CH-Varianten.
- **NICHT bauen:** Arbeitgeber-spezifische Variante (Rechtsrisiko).

## 5. Tech-Stack
- **Frontend/Hosting:** Next.js + Vercel
- **KI:** Anthropic Claude (Server-Route)
- **Share-Cards:** `@vercel/og`
- **Daten (optional):** Supabase (Submissions/Leads)
- **Stripe:** vorerst NICHT nötig

## 6. Monetarisierung / Funnel
1. **Primär:** CTA → Karriereengel
2. **Sekundär:** Förderkompass (sobald live)
3. **Tertiär:** E-Mail-Capture → Newsletter

## 7. Recht & Ethik (verbindlich)
- Strikt spielerisch/illustrativ framen + prominenter Disclaimer
- Keine Arbeitgeber-spezifische Variante
- Jeden Angst-Score mit konstruktivem Ausweg paaren
- DSGVO: Jobtitel + E-Mail = personenbezogen → Datenschutzerklärung, minimale Speicherung
- EU AI Act: Awareness-Tool, KEIN HR-Entscheidungssystem

## 8. Koordinaten
- **Domain:** `ersetzt-mich-ki.de` (Registrar: INWX/Netcup, ~6–10 €/J)
- **Optionale Domain:** `ki-jobrisiko.de`
- **Repo:** `arzalpha/ersetzt-mich-ki`
- **Funnel-Ziel:** karriereengel.de
- **Visuelle Identität:** bold/plakativ (bewusst anders als arzalpha-Creme/Gold)

## 9. Phasen
- **Phase 0 ✅:** Domain reservieren + Repo anlegen
- **Phase 1 (MVP, NACH aktuellen Prios):** Landing + Eingabe + LLM-Prognose + Share-Card + Disclaimer + Funnel-CTA + Impressum/Datenschutz
- **Phase 2:** Lead-Capture + Launch (Reddit/LinkedIn/PR)
- **Phase 3:** Programmatic SEO + AT/CH

## 10. Erfolgsmetriken
Shares · CTR → Karriereengel · E-Mail-Signups · Conversions zu Karriereengel (zahlend)

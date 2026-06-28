# Projektbriefing — ersetzt-mich-ki.de

> Erstellt 29.06.2026 (arzalpha-Ideensession). Virales Marketing-/Funnel-Asset für **Karriereengel**. Kein eigenständiges Produkt.
> **Timing:** Domain JETZT reservieren; **Bau erst NACH** den aktuellen Prioritäten (Buchreihe, mietermappe-Launch) — siehe [[current-priorities]].

---

## 1. Idee in einem Satz
Eine virale Mini-Website, auf der ein:e Arbeitnehmer:in in DACH den eigenen **Jobtitel (+ optional Tätigkeiten)** eingibt und eine **spielerische, illustrative Prognose** bekommt: „Wie wahrscheinlich ersetzt KI deinen Job?" — teilbar, mit klarem **Funnel zu Karriereengel**.

## 2. Warum dieses Projekt (strategische Logik)
- **Eingebaute Distribution:** Spielt mit (berechtigter) Job-Angst → hohe Teil-/PR-Wahrscheinlichkeit. Genau das, was kaltem SEO/Produkten sonst fehlt.
- **Funnel-Asset:** Job-Angst ist der perfekte Einstieg → Karriereengel (CV zukunftssicher machen) + später Weiterbildungs-Affiliate (siehe Förderkompass).
- **Schnell baubar:** MVP an einem Wochenende möglich.

## 3. Zielgruppe
Arbeitnehmer:innen in DACH (DE primär, AT/CH später), die sich Sorgen um KI/Jobsicherheit machen. Breit, emotional, teil-affin. **Nicht** B2B/HR.

## 4. Features

### MVP (Phase 1 — schlank & viral)
- **Landing:** knackiger Hero („Ersetzt KI deinen Job?"), 1 Eingabefeld (Jobtitel) + optionales Textfeld (typische Aufgaben), 1 CTA.
- **KI-Prognose:** LLM (Claude/GPT) bewertet anhand eines **transparenten, nachvollziehbaren Rasters** (Routine-Anteil, Daten-/Regelbasiertheit, Kreativität, zwischenmenschlicher Anteil, körperliche Präsenz) → **Risiko-Score in %** + **Zeithorizont** (niedrig/mittel/hoch) + 3–4 kurze, kluge Begründungen (welche Aufgaben automatisierbar, welche sicher).
- **Ergebnis-Seite:** großer Score (Gauge/Visual), Begründungen, **„Was du tun kannst"** (konstruktiv, Hoffnung!) → CTA zu Karriereengel.
- **Share-Card (KERN der Viralität):** dynamisch generiertes OG-Bild mit dem persönlichen Score → WhatsApp/LinkedIn/X-Buttons.
- **Disclaimer (prominent):** „Spielerische, illustrative Einschätzung. Keine Berufsberatung. Ohne Gewähr."
- **Optional Lead-Capture:** „Ausführlicher Report + Tipps per Mail" → Karriereengel/Newsletter.
- **Impressum + Datenschutz** (Pflicht).

### Später (Phase 2/3)
- E-Mail-Strecke, A/B-Tests am Hook, PR-/Reddit-/LinkedIn-Launch.
- **Programmatic SEO:** „Wird [Beruf] von KI ersetzt?"-Seiten je Beruf (viral *und* dauerhafter Such-Traffic).
- AT/CH-Varianten (Locale).
- **NICHT bauen:** die „mit Arbeitgeber"-Variante (namentliche Arbeitgeber-Prognose = Rufschädigungs-/Rechtsrisiko).

## 5. Tech-Stack (an bestehenden arzalpha-Stack angelehnt)
- **Frontend/Hosting:** Next.js + Vercel (wie Karriereengel/mietermappe).
- **KI:** Anthropic Claude oder OpenAI über Server-Route (oder n8n-Webhook).
- **Share-Cards:** `@vercel/og` (dynamische OG-Bilder).
- **Daten (optional):** Supabase (Submissions/Leads, Basis für programmatic SEO).
- **Stripe:** vorerst NICHT nötig (kostenloses Tool).

## 6. Monetarisierung / Funnel
1. **Primär:** CTA nach Ergebnis → **Karriereengel** (CV/Zukunftssicherung).
2. **Sekundär:** Weiterbildungs-Affiliate / **Förderkompass** (sobald live).
3. **Tertiär:** E-Mail-Capture → Newsletter.
4. (Display-Ads erst bei großem Traffic, optional.)
→ Das Tool ist **Marketing-Asset**, kein Direktumsatz-Produkt.

## 7. Distribution
Virale Share-Card · PR-Winkel („neues Tool zeigt KI-Jobrisiko" — Medien lieben KI-Angst-Stories) · Reddit (r/de, r/arbeitsleben) · LinkedIn · später programmatic SEO.

## 8. Recht & Ethik (verbindlich)
- **Strikt spielerisch/illustrativ framen** + prominenter Disclaimer (keine Beratung, ohne Gewähr, Methodik transparent).
- **Keine Arbeitgeber-spezifische Variante.**
- **DSGVO:** Jobtitel + E-Mail = personenbezogen → Datenschutzerklärung, Einwilligung für Mail, minimale Speicherung. Impressum gem. [[impressum-adresse]].
- **EU AI Act:** klar **Awareness/Entertainment-Tool**, KEIN HR-/Einstellungs-Entscheidungssystem (nicht Annex-III). Minimales Risiko, aber in KI-Doku aufnehmen.
- **Ethik/Wohlbefinden:** jeden Angst-Score mit konstruktivem „Was du tun kannst" + Hoffnung paaren. Nie jemanden hart abservieren.

## 9. Koordinaten
- **Domain:** `ersetzt-mich-ki.de` — laut DNS frei (29.06.2026), **noch zu reservieren** (.de, ~6–10 €/J; Registrar z. B. INWX/Netcup/Strato).
- **Optionale Marken-/Weiterleitungs-Domain:** `ki-jobrisiko.de` (frei) — falls später seriösere Marke gewünscht.
- **Repo (anzulegen):** `arzalpha/ersetzt-mich-ki`.
- **Funnel-Ziel:** karriereengel.de.
- **Marke/Owner:** arzalpha / Karriereengel.
- **Visuelle Identität:** eigener, **bold/plakativer** Look (Viralität braucht laut, nicht elegant) — bewusst abgesetzt vom ruhigen arzalpha-Creme/Gold.

## 10. Phasen
- **Phase 0 (jetzt):** Domain reservieren.
- **Phase 1 (MVP, ~1 Wochenende, NACH aktuellen Prios):** Landing + Eingabe + LLM-Prognose + Ergebnis + dynamische Share-Card + Disclaimer + Karriereengel-CTA + Impressum/Datenschutz.
- **Phase 2:** Lead-Capture + Launch (Reddit/LinkedIn/PR).
- **Phase 3:** programmatic SEO „Wird [Beruf] ersetzt?" + AT/CH.

## 11. Erfolgsmetriken
Shares / viraler Koeffizient · CTR → Karriereengel · E-Mail-Signups · Conversions zu Karriereengel (zahlend).

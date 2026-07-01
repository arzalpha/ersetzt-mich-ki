# ersetzt-mich-ki.de — KANBAN

## In Progress
- [ ] Phase 2: n8n-Automation — Freebie-Mail nach Double-Opt-in (Workflow + Transactional-Template)

## On Hold

## Backlog
- [ ] Phase 1: Landing mit Eingabe (Jobtitel + optional Tätigkeiten) + CTA
- [ ] Phase 1: KI-Prognose-Route (Claude/GPT) mit Bewertungsraster
- [ ] Phase 1: Ergebnis-Seite mit Score, Begründungen, „Was du tun kannst"
- [ ] Phase 1: Dynamische Share-Card (@vercel/og) — Viralitäts-Kern
- [ ] Phase 1: Disclaimer (spielerisch, illustrativ, keine Beratung)
- [ ] Phase 1: Impressum + Datenschutz (DSGVO-konform)
- [ ] Phase 1: Karriereengel-CTA als Funnel-Ziel
- [ ] Phase 2: Launch (Reddit/LinkedIn/PR)
- [ ] Phase 3: Programmatic SEO (Beruf-spezifische Seiten)
- [ ] Phase 3: AT/CH-Varianten (Locale)

## Erledigt (01.07.2026)
- [x] Phase 0: Domain `ersetzt-mich-ki.de` registrieren
- [x] Phase 1: Repo `arzalpha/ersetzt-mich-ki` anlegen + Next.js + Vercel aufsetzen
- [x] Phase 2: Lead-Capture Infrastruktur — Listmonk + Scaleway SMTP + Freebie-Zugang
  - Listmonk auf `arzalpha-01` Docker (https://listmonk.arzalpha.com)
  - Scaleway Transactional Email: `mail.karriereengel.de` (SPF/DKIM/DMARC konfiguriert, 10/10 bei mail-tester)
  - Waitlist-API in ersetzt-mich-ki.de (Next.js) → Listmonk-Integration
  - Liste "ersetzt-mich-ki Interessenten" angelegt (Double-Opt-in)
  - Opt-in-Mail texten (Bestätigung + humorvoller Ton)
  - Freebie-Seite (`/freebie`) existiert, redirected zu `/ki-karriereplan.pdf`

---

## 🔄 Handover-Update (01.07.2026 22:00)

**Newsletter-Stack für ersetzt-mich-ki.de ist LIVE:**
- ✅ Listmonk-Instanz (https://listmonk.arzalpha.com) gehostet + SSL
- ✅ Scaleway SMTP-Relay konfiguriert (mail.karriereengel.de), 10/10 Zustellbarkeit
- ✅ Waitlist-Formular in ersetzt-mich-ki.de (`src/app/api/waitlist/route.ts`) → Listmonk-Integration
- ✅ Liste "ersetzt-mich-ki Interessenten" (Listmonk-UUID: `e4cc2c73-3171-4f31-b48f-bd08200062ac`) mit Double-Opt-in
- ✅ Opt-in-Bestätigungsmail texten (humorvoller Robo-Ton, Bestätigungs-Link + CTA)
- ✅ Vercel Env-Vars aktualisiert (LISTMONK_URL, LISTMONK_LIST_UUID) — Redeploy läuft

**Nächster Schritt (ausstehend):**
- n8n-Automation: Nach Double-Opt-in → Freebie-Mail automatisch senden
  - Plan: Workflow prüft jede Minute ob neue bestätigte Abonnenten → Transactional-Mail mit Freebie-Link (https://ersetzt-mich-ki.de/freebie) → Attribut-Flag setzen um Duplikate zu vermeiden
  - Braucht: neuer Listmonk API-User (Settings→Users), Transactional-Mail-Template mit Freebie-Text
  - Diese Automation ist Basis für alle zukünftigen Follow-up-Mails (Serienmail-System)

**Tech-Dependencies:**
- Listmonk läuft in Docker auf `arzalpha-01:9000` (via NPM-Proxy auf Port 81, SSL)
- Scaleway TEM verifiziert und konfiguriert für Versand-Domain `mail.karriereengel.de`
- Listmonk + n8n + Scaleway = zentrale Newsletter-Infrastruktur für ALLE arzalpha-Projekte (siehe [[project_newsletter_stack]] Memory)

**Für den PM (Phase 1 MVP):**
- Lead-Capture ist einsatzbereit — sobald Scoring-Route live geht, können echte E-Mails gesammelt werden
- Der Funnel: ersetzt-mich-ki.de/ergebnis → E-Mail-Eingabe → Listmonk → Opt-in-Bestätigung → Freebie-PDF → später Follow-up-Mailserien
- Keine Blocker für Phase 1, alles läuft ✓

---

**Letzte Aktualisierung:** 2026-07-01 22:00 (Handover an PM)
**Phasen-Status:** Phase 2 in Progress (Lead-Capture + Listmonk live, Freebie-Automation 02.07. TODO)
**Priorität:** NACH Buchreihe + mietermappe-Launch

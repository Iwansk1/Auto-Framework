# Automotive Framework — Handleiding

Welkom! Deze handleiding legt uit hoe je de live demo van het Headless Automotive Framework kunt gebruiken en navigeren.

---

## Live URLs

| Wat                 | URL                                          |
| ------------------- | -------------------------------------------- |
| **Demo website**    | https://auto-framework-demo.vercel.app       |
| **CMS Admin panel** | https://auto-framework-demo.vercel.app/admin |

---

## Demo Website

De website heeft vier hoofdpagina's die toegankelijk zijn via de navigatiebalk.

### Catalogus (`/`)

Bekijk alle voertuigen in de database. Je kunt:

- Zoeken op merk of model via de zoekbalk
- Filteren op categorie, brandstoftype en maximale prijs
- Tot 3 voertuigen selecteren voor vergelijking via de **Compare** knop
- Op **Configure** klikken bij een voertuig om de configurator te openen

### Vergelijken (`/compare`)

Vergelijk geselecteerde voertuigen naast elkaar. Je kunt:

- Wisselen tussen **Performance** scoring (acceleratie, pk's, topsnelheid) en **Efficiency** scoring (brandstofverbruik, bereik)
- Elk voertuig gerangschikt en gescoord zien op basis van de actieve strategie
- Voertuigen verwijderen uit de vergelijking

### Configureren (`/configure/[id]`)

Configureer een voertuig met opties die volledig via de CMS worden beheerd. Je kunt:

- Een lakkleur selecteren
- Een wielkeuze maken
- Optiepakketten aan- en uitzetten
- De totaalprijs live zien updaten in de sidebar

### Occasions (`/occasions`)

Bekijk tweedehands voertuigaanbod. Je kunt:

- Zoeken op merk of model
- Filteren op prijs, kilometerstand, transmissie en conditie
- Op **View Details** klikken om de detailpagina te openen

### Occasion Detail (`/occasions/[slug]`)

Volledige detailpagina van een tweedehands listing met:

- Afbeeldingen carousel (gebruik pijlen of klik op thumbnails om te navigeren)
- Voertuigspecificaties en volledige lijst met kenmerken
- Een **Contact Dealer** formulier dat uitklapt wanneer je erop klikt

---

## Admin Panel

Het admin panel op `/admin` is waar alle content wordt beheerd. Gebruik deze inloggegevens:

|                |                             |
| -------------- | --------------------------- |
| **E-mail**     | admin@admin.com             |
| **Wachtwoord** | _(wordt apart aangeleverd)_ |

### Voertuigen beheren

Ga naar **Vehicles** in de zijbalk om voertuigen toe te voegen, te bewerken of te verwijderen. Elk voertuig heeft velden voor specs, categorie, brandstoftype en een afbeelding. Afbeeldingen moeten eerst worden geüpload naar **Media** en daarna worden geselecteerd via "Choose from existing".

### Configurator opties beheren

Drie aparte collecties bepalen wat er in de configurator verschijnt:

- **Colours** — lakopties met naam, hex code en prijsmodifier
- **Wheels** — wielopties met maat en prijsmodifier
- **Packages** — optiepakketten met naam, omschrijving, kenmerken en prijsmodifier

Wijzigingen hier zijn direct zichtbaar op de configuratiepagina.

### Occasions beheren

Ga naar **Occasions** om tweedehands listings toe te voegen of te bewerken. Een aantal dingen om rekening mee te houden:

- Het **Features** veld accepteert vrije tekst — typ één kenmerk per regel en elke regel wordt een aparte bullet point op de website
- Upload afbeeldingen eerst naar **Media** en selecteer ze daarna via "Choose from existing" in het afbeeldingen veld
- Het uitvinken van **Available** verwijdert de listing direct van de website zonder hem te verwijderen

---

## Framework Packages (dit werkt helaas nog niet ivm onbekende problemen bij het publishen van de packages)

Het framework is opgesplitst in installeerbare npm packages. De core en React packages kunnen in elk project worden geïnstalleerd:

```bash
npm install @automotive/core @automotive/react @automotive/adapter-static
```

De broncode is beschikbaar op: **https://github.com/Iwansk1/Auto-Framework**

De monorepo bevat:

- `packages/core` — pure TypeScript logica (modellen, services, strategieën)
- `packages/react` — React hooks, context providers en headless componenten
- `packages/adapter-static` — statische data adapter (geen backend nodig)
- `packages/adapter-payload` — Payload CMS adapter
- `packages/adapter-rest` — REST API adapter
- `apps/demo` — de live Next.js demo met Payload CMS
- `apps/demo-react` — Vite + React demo met statische data
- `apps/demo-nextjs` — Next.js demo met de REST adapter

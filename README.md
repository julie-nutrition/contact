# contact-julie-nutrition

Single link-in-bio page for **Julie Bauza** — diététicienne-nutritionniste.
Deployed on `contact.julie-nutrition.fr`.

Built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Personnaliser le contenu

Modifier l'objet `JULIE` en haut de [src/App.tsx](src/App.tsx) pour mettre à
jour le nom, l'email, le téléphone, l'URL Instagram, le lien cal.com, etc.

## Ajouter la photo de Julie

Déposer l'image dans [public/img/julie.jpg](public/img/julie.jpg).
Un placeholder s'affiche automatiquement si le fichier est absent.

## Polices

- **Margin Regular** (titres) — fichier local servi depuis `public/fonts/`.
- **Open Sans** (corps de texte) — chargée via Google Fonts dans `index.html`.

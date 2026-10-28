# Dirac Society website

A responsive website built with Vite, React, JSX, and CSS. The page is split into small components so each section can be edited independently.

## Run locally

```sh
cd Dirac-Society-Website
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173). Source edits update the browser automatically. Stop the server with Ctrl+C.

## Share a temporary public preview

After connecting the ngrok client to a free account, keep `npm run dev` running and use a second terminal:

```sh
npm run share
```

Share the HTTPS address printed by ngrok. The address remains available while both terminal commands are running.

## Production build

```sh
npm run build
npm run preview
```

The build generates `dist/`, ready for a static host such as GitHub Pages. Do not edit generated files in `dist/`; builds replace them. Relative asset URLs support repository subpaths. No deployment has been configured or performed.

## Source files

- `index.html`: Vite entry document and page metadata.
- `src/App.jsx`: puts the page sections together in order.
- `src/components/`: one JSX file for each section and reusable element.
- `src/data/siteContent.js`: committee, team, research, events, pillars, and article copy.
- `src/styles.css`: colours, typography, responsive layouts, and focus states.
- `public/dirac-logo.png`: the supplied society logo used in the header, footer, and favicon.
- `vite.config.js`: build configuration.

## Update content

Edit the `committee` and `teamMembers` entries in `src/data/siteContent.js` to change names and roles. Portrait circles are placeholders; replace the placeholder markup in `src/components/PersonCard.jsx` when photographs are available. Edit the `articles` array in the content file to update journal text.

Research and events are labelled as forthcoming. Speakers, dates, publications, university affiliation, and contact details still need to be supplied. The three introductory articles are starter copy for review. Membership/contact links can be added when available; there is currently no submission form or backend.

Google Fonts supplies the typefaces, with local system fallbacks. Graphics use local diagrams and typography.

# gidraf.dev

Personal site and interactive résumé for **Gidraf Orenja Mtange** — Senior Software Engineer.

Built with Next.js (App Router), GSAP scroll animation, and a lightweight Three.js
point-cloud globe. Dark, engineering-grade aesthetic. Fully responsive and
`prefers-reduced-motion` aware.

The site also serves a print-clean, ATS-friendly PDF résumé at
`/Gidraf-Orenja-Mtange-Resume.pdf` (the "Download Résumé" button).

---

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 14 (App Router, standalone out) |
| UI             | React 18                                |
| Animation      | GSAP + ScrollTrigger                    |
| 3D             | Three.js (point-cloud globe)            |
| Styling        | Hand-written CSS design system          |
| Container      | Multi-stage Docker (node:20-alpine)     |

---

## Run locally (Node)

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## Run with Docker

```bash
# build + start
docker compose up --build -d

# visit
open http://localhost:3000

# stop
docker compose down
```

Or with plain Docker:

```bash
docker build -t gidraf-dev .
docker run -p 3000:3000 gidraf-dev
```

The image uses Next.js `standalone` output, so the final runtime layer is small
(only the server bundle, static assets and `public/`).

---

## Deploying to gidraf.dev

Any platform that runs a container works:

- **Vercel** — `git push`; it auto-detects Next.js (no Docker needed).
- **A VPS / Render / Fly.io / Railway** — deploy the Docker image, point the
  `gidraf.dev` DNS A/CNAME record at the host, and add TLS (Caddy, Nginx, or the
  platform's built-in certs).

To put it behind your own Nginx:

```nginx
server {
  server_name gidraf.dev;
  location / { proxy_pass http://127.0.0.1:3000; }
}
```

---

## Editing content

All résumé content lives in **`lib/data.js`** — profile, summary, experience,
skills, projects and education. Update that one file and every section, plus the
page metadata, follows.

To update the downloadable résumé, replace
`public/Gidraf-Orenja-Mtange-Resume.pdf`.

---

## Project structure

```
gidraf-dev/
├── app/
│   ├── globals.css      # design system
│   ├── layout.js        # metadata + fonts
│   └── page.js          # all sections + GSAP setup
├── components/
│   └── Globe.js         # Three.js hero globe
├── lib/
│   └── data.js          # single source of content
├── public/
│   └── Gidraf-Orenja-Mtange-Resume.pdf
├── Dockerfile
└── docker-compose.yml
```

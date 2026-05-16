# GFL Service & Repair — Site Institucional

Site institucional da GFL Service & Repair Ltda, Centro de Serviços Autorizado Midea Blue Service e Carrier.

## Stack

- Astro 6 (static)
- Tailwind v4 (via `@tailwindcss/vite`)
- Swiper.js 11
- Montserrat (Google Fonts)
- TypeScript strict

## Desenvolvimento

```bash
npm install
npm run dev
# http://localhost:4321
```

## Build

```bash
npm run build
# Output em ./dist
```

## Deploy

Docker via Easypanel no VPS Hostinger. Imagem `nginx:alpine` servindo `./dist`.

```bash
docker build -t gfl-site .
docker run -p 8080:80 gfl-site
```

## Estrutura

- `src/pages/` — páginas Astro (index, pmoc, servicos, sobre, contato, privacidade)
- `src/components/` — componentes reutilizáveis (layout, home, seo)
- `src/layouts/BaseLayout.astro` — layout base com SEO + Schema.org
- `src/lib/empresa.ts` — dados centralizados da GFL
- `public/images/` — imagens estáticas (logos, produtos, fachada)
- `src/styles/globals.css` — Tailwind v4 + theme tokens GFL

## Identidade visual

Paleta oficial Midea Carrier:

- Azul Midea `#0099DA` (CTAs)
- Azul Carrier `#23356D` (institucional)
- Cinza `#CACACA` (bordas)
- Branco dominante

Use as classes `bg-gfl-midea`, `text-gfl-carrier`, etc.

## Imagens necessárias em `public/images/`

- `logos/gfl-logo-fundo-branco.png`
- `logos/gfl-logo-fundo-preto.png`
- `produtos/midea-ar-condicionado-ambientada-quarto.webp`
- `produtos/midea-ar-condicionado-split-packshot.webp`
- `produtos/midea-ar-condicionado-comando-voz.webp`
- `produtos/midea-lava-e-seca-aberta-roupas.webp`
- `produtos/midea-lava-e-seca-frente.webp`
- `produtos/midea-linha-vrf-industrial.webp`
- `fachada/fachada-frontal.jpg`

Mais em `public/`:

- `favicon.ico`, `favicon-32x32.png`, `favicon-192x192.png`
- `og-image.jpg`

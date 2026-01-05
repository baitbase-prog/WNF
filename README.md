# Launch Week Landing Page

Single-page landing site for a crypto marketing agency offer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and lightweight shadcn-style UI components. Static-friendly and ready for Vercel.

## Prerequisites
- Node.js 18+
- npm (or pnpm/yarn if you prefer)

## Getting started
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Editable content
All marketing copy, pricing, and links live in `src/content/offer.ts`. Update this file to change CTAs, FAQs, packages, and hero text without touching components.

## Scripts
- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – run the built app locally
- `npm run lint` – lint the project

## Deployment
1. Set `NEXT_PUBLIC_CALL_URL` in your environment for the call booking link.
2. Deploy to Vercel (recommended) or any platform that supports Next.js App Router static output.
3. Replace placeholder assets in `/public` (`brand/logo.svg`, `brand/hero.svg`, `og.svg`, `favicon.svg`) and update the external deck URL in `src/content/offer.ts`.

## Notes
- Smooth scrolling and anchor navigation are built-in.
- Analytics placeholder is commented inside `src/app/layout.tsx`; add your script when ready.
- Tailwind theme tokens live in `src/app/globals.css` for quick brand tweaks.

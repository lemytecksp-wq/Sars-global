# SARS Global Next.js Rebuild

This folder contains the preservation-first Next.js App Router conversion of the SARS Global website.

## What Is Included

- Next.js App Router structure
- Shared `SiteHeader` and `SiteFooter`
- Header navigation with `What We Do`, `About Us`, `Work`, `Hire Talent`, `BPO Services`, `Insights`, `Contact`
- Preserved existing page content and visual sections generated from the current static HTML source
- Canonical routes for Home, About, Services, Work, Portfolio, Hire Talent, BPO Services, Contact, Insights, blog detail pages, Privacy and Terms
- Redirects for legacy `/about-us/`, `/service/` and `/hire-developers/` routes
- Next Metadata API helpers for page and article SEO
- Public `sitemap.xml` and `robots.txt`
- Redesigned React-powered Insights listing with filters and uniform article cards
- Shared newsletter footer block: `Get the Talent Report`
- Netlify build config using the official Next.js runtime

## Scripts

```bash
npm install
npm run validate
npm run build
npm run dev
```

## Netlify

Use this folder as the Netlify deploy root:

```text
outputs/sars-next
```

The included `netlify.toml` uses:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

If Netlify reports a `baseUrl` TypeScript error, make sure you uploaded this latest folder or zip. `tsconfig.json` intentionally does not include `compilerOptions.baseUrl`.

## Content Generation

The current static site source is preserved through `scripts/extract-static-pages.mjs`.

Run this when the source HTML changes:

```bash
npm run validate
node scripts/extract-static-pages.mjs
```

The generator updates:

- `content/pages.ts`
- `content/blog.ts`
- static route files in `app/`

The hand-built Insights listing and shared layout components remain separate from generated content.

## Notes

The footer newsletter form keeps the existing visual form but does not fake a successful backend subscription. It prompts users to contact `business@sarsglobal.io` until a newsletter endpoint is connected.

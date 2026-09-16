import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const requiredRoutes = [
  "/",
  "/about/",
  "/services/",
  "/work/",
  "/portfolio/",
  "/hire-talent/",
  "/bpo-services/",
  "/contact/",
  "/insights/",
  "/insights/why-cost-per-lead-keeps-rising/",
  "/insights/signs-tech-stack-costing-you-growth/",
  "/insights/what-makes-a-website-successful/",
  "/insights/ai-automation-small-businesses-2026/",
  "/privacy/",
  "/terms/",
];

const routeFiles = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/work/page.tsx",
  "app/portfolio/page.tsx",
  "app/hire-talent/page.tsx",
  "app/bpo-services/page.tsx",
  "app/contact/page.tsx",
  "app/insights/page.tsx",
  "app/insights/[slug]/page.tsx",
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
  "scripts/audit-pages.mjs",
];

const requiredAssets = [
  "public/assets/img/sars-new-logo.png",
  "public/assets/img/favicon.png",
  "public/Sarsglobal.mp4",
  "netlify.toml",
  "app/styles/site.css",
  "app/styles/hire-talent.css",
  "app/styles/bpo-services.css",
];

const removedAssets = [
  `public/assets/img/${"sars"}-${"logo"}.png`,
  `public/assets/img/${"sars"}-${"logo"}-${"512"}.png`,
];

const failures = [];

for (const file of [...routeFiles, ...requiredAssets]) {
  if (!existsSync(path.join(root, file))) {
    failures.push(`Missing ${file}`);
  }
}

for (const file of removedAssets) {
  if (existsSync(path.join(root, file))) {
    failures.push(`Old logo asset should be removed: ${file}`);
  }
}

const sitemap = readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
for (const route of requiredRoutes) {
  const loc = `https://sarsglobal.io${route}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) {
    failures.push(`Sitemap missing ${loc}`);
  }
}

const header = readFileSync(path.join(root, "components/layout/SiteHeader.tsx"), "utf8");
const footer = readFileSync(path.join(root, "components/layout/SiteFooter.tsx"), "utf8");
for (const label of ["What We Do", "About Us", "Work", "Hire Talent", "BPO Services", "Insights", "Contact"]) {
  if (!header.includes(label)) failures.push(`Header missing ${label}`);
  if (!footer.includes(label)) failures.push(`Footer missing ${label}`);
}
if (!header.includes("/assets/img/sars-new-logo.png")) {
  failures.push("Header must use /assets/img/sars-new-logo.png.");
}
if (header.includes("<span>SARS Global</span>")) {
  failures.push("Header must not render separate SARS Global text beside the logo.");
}
if (!footer.includes("/assets/img/sars-new-logo.png")) {
  failures.push("Footer must use /assets/img/sars-new-logo.png.");
}

const config = readFileSync(path.join(root, "next.config.mjs"), "utf8");
for (const route of ["/hire-developers/:path*", "/about-us/:path*", "/service/:path*"]) {
  if (!config.includes(route)) {
    failures.push(`Redirect missing ${route}`);
  }
}

const tsconfig = JSON.parse(readFileSync(path.join(root, "tsconfig.json"), "utf8"));
if (Object.prototype.hasOwnProperty.call(tsconfig.compilerOptions || {}, "baseUrl")) {
  failures.push("tsconfig.json must not include compilerOptions.baseUrl for the Netlify TypeScript version.");
}
const alias = tsconfig.compilerOptions?.paths?.["@/*"];
if (!Array.isArray(alias) || !alias.includes("./*")) {
  failures.push('tsconfig.json must keep the "@/*" path alias.');
}

const netlifyConfig = readFileSync(path.join(root, "netlify.toml"), "utf8");
if (!netlifyConfig.includes('publish = ".next"')) {
  failures.push('netlify.toml must publish ".next" for the Netlify Next.js runtime.');
}
if (!netlifyConfig.includes("@netlify/plugin-nextjs")) {
  failures.push("netlify.toml must include @netlify/plugin-nextjs.");
}

const generatedPages = readFileSync(path.join(root, "content/pages.ts"), "utf8");
const localAssetRefs = new Set(
  [...generatedPages.matchAll(/(?:src|href)=\\?"(\/(?:assets|Sarsglobal\.mp4)[^"\\]*)/g)].map((match) =>
    match[1].split("?")[0],
  ),
);

for (const ref of localAssetRefs) {
  const publicPath = path.join(root, "public", ref.slice(1));
  if (!existsSync(publicPath)) {
    failures.push(`Missing local public asset ${ref}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("SARS Global Next.js validation passed.");

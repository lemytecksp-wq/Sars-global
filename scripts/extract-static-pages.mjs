import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(here, "..");
const sourceRoot = path.resolve(appRoot, "..", "sars-new");
const oldLogoName = `${"sars"}-${"logo"}`;
const oldLogo512Path = `/assets/img/${oldLogoName}-${"512"}.png`;
const oldLogoPath = `/assets/img/${oldLogoName}.png`;
const oldRemoteLogoUrl = `https://sarsglobal.io/wp-content/uploads/2025/05/${"sars"}${"logo"}-1.png`;
const oldLogo512Pattern = new RegExp(escapeRegExp(oldLogo512Path), "g");
const oldLogoPattern = new RegExp(escapeRegExp(oldLogoPath), "g");
const oldRemoteLogoPattern = new RegExp(escapeRegExp(oldRemoteLogoUrl), "g");

const routes = [
  { route: "/", file: "index.html" },
  { route: "/about", file: "about/index.html" },
  { route: "/services", file: "services/index.html" },
  { route: "/work", file: "work/index.html" },
  { route: "/portfolio", file: "portfolio/index.html" },
  { route: "/hire-talent", file: "hire-talent/index.html" },
  { route: "/bpo-services", file: "bpo-services/index.html" },
  { route: "/contact", file: "contact/index.html" },
  { route: "/privacy", file: "privacy/index.html" },
  { route: "/terms", file: "terms/index.html" },
  { route: "/404", file: "404.html" },
  {
    route: "/insights/why-cost-per-lead-keeps-rising",
    file: "insights/why-cost-per-lead-keeps-rising/index.html",
    blog: true,
  },
  {
    route: "/insights/signs-tech-stack-costing-you-growth",
    file: "insights/signs-tech-stack-costing-you-growth/index.html",
    blog: true,
  },
  {
    route: "/insights/what-makes-a-website-successful",
    file: "insights/what-makes-a-website-successful/index.html",
    blog: true,
  },
  {
    route: "/insights/ai-automation-small-businesses-2026",
    file: "insights/ai-automation-small-businesses-2026/index.html",
    blog: true,
  },
];

function decodeHtml(input = "") {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&rarr;/g, "→")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(input = "") {
  return decodeHtml(input.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function pick(html, regex) {
  const match = html.match(regex);
  return match ? decodeHtml(match[1].trim()) : "";
}

function pickRaw(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim() : "";
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pickMetaName(html, name) {
  const regex = new RegExp(
    `<meta\\s+name=["']${escapeRegExp(name)}["']\\s+content=(["'])([\\s\\S]*?)\\1`,
    "i",
  );
  const match = html.match(regex);
  return match ? decodeHtml(match[2].trim()) : "";
}

function pickMetaProperty(html, property) {
  const regex = new RegExp(
    `<meta\\s+property=["']${escapeRegExp(property)}["']\\s+content=(["'])([\\s\\S]*?)\\1`,
    "i",
  );
  const match = html.match(regex);
  return match ? decodeHtml(match[2].trim()) : "";
}

function pickCanonical(html) {
  const match = html.match(/<link\s+rel=["']canonical["']\s+href=(["'])([\s\S]*?)\1/i);
  return match ? decodeHtml(match[2].trim()) : "";
}

function getMainHtml(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!main) {
    throw new Error("Missing <main> block.");
  }

  return main[1]
    .replace(/https:\/\/sarsglobal\.io\/Sarsglobal\.mp4/g, "/Sarsglobal.mp4")
    .replace(oldLogo512Pattern, "/assets/img/sars-new-logo.png")
    .replace(oldLogoPattern, "/assets/img/sars-new-logo.png")
    .replace(/\/assets\/img\/favicon\.png/g, "/assets/img/sars-new-logo.png")
    .replace(oldRemoteLogoPattern, "/assets/img/sars-new-logo.png")
    .replace(/href="\/service\//g, 'href="/services/')
    .replace(/href="\/about-us\//g, 'href="/about/')
    .trim();
}

function getBodyClass(html) {
  const bodyClass = pickRaw(html, /<body[^>]*class="([^"]*)"/i);
  return bodyClass
    .split(/\s+/)
    .filter((name) => name && name !== "sars-page" && name !== "is-loading")
    .join(" ");
}

function getStructuredData(html) {
  return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) =>
      match[1]
        .trim()
        .replace(oldRemoteLogoPattern, "https://sarsglobal.io/assets/img/sars-new-logo.png")
        .replace(oldLogo512Pattern, "/assets/img/sars-new-logo.png")
        .replace(oldLogoPattern, "/assets/img/sars-new-logo.png"),
    )
    .filter(Boolean);
}

function getBlogData(route, html) {
  const slug = route.split("/").filter(Boolean).pop();
  const title = stripTags(pickRaw(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i));
  const category = stripTags(pickRaw(html, /<p\b[^>]*class="[^"]*sars-kicker[^"]*"[^>]*>([\s\S]*?)<\/p>/i)) || "Insights";
  const metaText = stripTags(pickRaw(html, /<div\b[^>]*class="[^"]*sars-post-meta[^"]*"[^>]*>([\s\S]*?)<\/div>/i));
  const readTime = metaText.match(/(\d+\s+min\s+read)/i)?.[1] || "";
  const published = pickMetaProperty(html, "article:published_time")
    || pick(html, /"datePublished"\s*:\s*"([^"]+)"/i)
    || "2026-08-12";
  const image = pickMetaProperty(html, "og:image")
    .replace(oldRemoteLogoUrl, "/assets/img/sars-new-logo.png")
    || "/assets/img/sars-new-logo.png";

  return {
    slug,
    route,
    title,
    category,
    description: pickMetaName(html, "description"),
    published,
    readTime,
    image,
    visualLabel: title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase(),
  };
}

function getPage(routeSpec) {
  const html = readFileSync(path.join(sourceRoot, routeSpec.file), "utf8");
  const title = pick(html, /<title>([\s\S]*?)<\/title>/i) || "SARS Global";
  const description = pickMetaName(html, "description");
  const canonical = pickCanonical(html)
    || `https://sarsglobal.io${routeSpec.route === "/" ? "/" : `${routeSpec.route}/`}`;

  return {
    route: routeSpec.route,
    title,
    description,
    canonical,
    robots: pickMetaName(html, "robots"),
    ogTitle: pickMetaProperty(html, "og:title"),
    ogDescription: pickMetaProperty(html, "og:description"),
    ogImage: pickMetaProperty(html, "og:image").replace(oldRemoteLogoUrl, "https://sarsglobal.io/assets/img/sars-new-logo.png"),
    twitterTitle: pickMetaName(html, "twitter:title"),
    twitterDescription: pickMetaName(html, "twitter:description"),
    twitterImage: pickMetaName(html, "twitter:image").replace(oldRemoteLogoUrl, "https://sarsglobal.io/assets/img/sars-new-logo.png"),
    bodyClass: getBodyClass(html),
    mainHtml: getMainHtml(html),
    structuredData: getStructuredData(html),
    blog: routeSpec.blog ? getBlogData(routeSpec.route, html) : null,
  };
}

const pages = routes.map(getPage);
const blogs = pages.filter((page) => page.blog).map((page) => page.blog);
const categories = ["All", ...new Set(blogs.map((post) => post.category).filter(Boolean))];

mkdirSync(path.join(appRoot, "content"), { recursive: true });
writeFileSync(
  path.join(appRoot, "content/pages.ts"),
  `export type PageRecord = {
  route: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  bodyClass: string;
  mainHtml: string;
  structuredData: readonly string[];
  blog: BlogPost | null;
};

export type BlogPost = {
  slug: string;
  route: string;
  title: string;
  category: string;
  description: string;
  published: string;
  readTime: string;
  image: string;
  visualLabel: string;
};

export const PAGES = ${JSON.stringify(Object.fromEntries(pages.map((page) => [page.route, page])), null, 2)} as const satisfies Record<string, PageRecord>;

export function getPageByRoute(route: string): PageRecord {
  const normalized = route !== "/" ? route.replace(/\\/$/, "") : route;
  const page = PAGES[normalized as keyof typeof PAGES];
  if (!page) {
    throw new Error(\`Missing page content for route: \${route}\`);
  }
  return page;
}
`,
);

writeFileSync(
  path.join(appRoot, "content/blog.ts"),
  `import type { BlogPost } from "./pages";

export const BLOG_POSTS = ${JSON.stringify(blogs, null, 2)} as const satisfies readonly BlogPost[];
export const BLOG_CATEGORIES = ${JSON.stringify(categories, null, 2)} as const;

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
`,
);

const staticPages = [
  { dir: "app", route: "/" },
  { dir: "app/about", route: "/about" },
  { dir: "app/services", route: "/services" },
  { dir: "app/work", route: "/work" },
  { dir: "app/portfolio", route: "/portfolio" },
  { dir: "app/hire-talent", route: "/hire-talent" },
  { dir: "app/bpo-services", route: "/bpo-services" },
  { dir: "app/contact", route: "/contact" },
  { dir: "app/privacy", route: "/privacy" },
  { dir: "app/terms", route: "/terms" },
  { dir: "app/404", route: "/404" },
];

for (const page of staticPages) {
  const targetDir = path.join(appRoot, page.dir);
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(
    path.join(targetDir, "page.tsx"),
    `import { StaticPage } from "@/components/pages/StaticPage";
import { makePageMetadata } from "@/content/metadata";

export const metadata = makePageMetadata(${JSON.stringify(page.route)});

export default function Page() {
  return <StaticPage route=${JSON.stringify(page.route)} />;
}
`,
  );
}

console.log(`Generated ${pages.length} pages and ${blogs.length} blog posts.`);

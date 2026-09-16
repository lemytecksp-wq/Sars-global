import type { Metadata } from "next";
import { getPageByRoute } from "./pages";
import { getBlogBySlug } from "./blog";

const siteUrl = "https://sarsglobal.io";
const defaultImage = "/assets/img/sars-new-logo.png";

function canonicalFromRoute(route: string) {
  return `${siteUrl}${route === "/" ? "/" : `${route}/`}`;
}

function absoluteImageUrl(image: string) {
  return image.startsWith("http") ? image : `${siteUrl}${image}`;
}

function robotsFromString(value: string) {
  const lower = value.toLowerCase();
  return {
    index: !lower.includes("noindex"),
    follow: !lower.includes("nofollow"),
    googleBot: {
      index: !lower.includes("noindex"),
      follow: !lower.includes("nofollow"),
      "max-image-preview": "large" as const,
    },
  };
}

export function makePageMetadata(route: string): Metadata {
  const page = getPageByRoute(route);
  const title = page.title;
  const description = page.description || page.ogDescription;
  const canonical = page.canonical || canonicalFromRoute(route);
  const image = page.ogImage || page.twitterImage || defaultImage;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: robotsFromString(page.robots || "index, follow, max-image-preview:large"),
    openGraph: {
      title: page.ogTitle || title,
      description: page.ogDescription || description,
      url: canonical,
      siteName: "SARS Global",
      images: [{ url: image }],
      type: route.startsWith("/insights/") ? "article" : "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle || page.ogTitle || title,
      description: page.twitterDescription || page.ogDescription || description,
      images: [page.twitterImage || image],
    },
  };
}

export function makeBlogMetadata(slug: string): Metadata {
  const post = getBlogBySlug(slug);
  if (!post) {
    return {};
  }

  const metadata = makePageMetadata(post.route);
  const openGraph =
    metadata.openGraph && typeof metadata.openGraph === "object" ? metadata.openGraph : {};
  const articleImage = post.image ? absoluteImageUrl(post.image) : undefined;

  return {
    ...metadata,
    openGraph: {
      ...openGraph,
      type: "article",
      publishedTime: post.published,
      authors: ["SARS Global"],
      images: articleImage ? [{ url: articleImage }] : openGraph.images,
    },
    twitter: {
      ...metadata.twitter,
      images: articleImage ? [articleImage] : metadata.twitter?.images,
    },
  };
}

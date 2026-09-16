import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/content/industriesData";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "automotive" },
    { slug: "healthcare" },
    { slug: "real-estate" },
    { slug: "b2b" },
    { slug: "b2b-saas" },
    { slug: "b2b-lead-generation" },
    { slug: "education" },
    { slug: "agritech" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return {};

  const canonical = `https://sarsglobal.io${industry.route}/`;
  return {
    title: industry.title,
    description: industry.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: industry.title,
      description: industry.metaDescription,
      url: canonical,
      siteName: "SARS Global",
      images: [{ url: "https://sarsglobal.io/assets/img/sars-hero-visual.png" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.title,
      description: industry.metaDescription,
      images: ["https://sarsglobal.io/assets/img/sars-hero-visual.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry || slug === "hub") {
    notFound();
  }

  return <IndustryPageTemplate data={industry} />;
}

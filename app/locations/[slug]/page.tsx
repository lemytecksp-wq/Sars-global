import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA } from "@/content/locationsData";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "alwar" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS_DATA[slug];
  if (!location) return {};

  const canonical = `https://sarsglobal.io${location.route}/`;
  return {
    title: location.title,
    description: location.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: canonical,
      siteName: "SARS Global",
      images: [{ url: "https://sarsglobal.io/assets/img/sars-hero-visual.png" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.metaDescription,
      images: ["https://sarsglobal.io/assets/img/sars-hero-visual.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const location = LOCATIONS_DATA[slug];
  if (!location || slug === "hub") {
    notFound();
  }

  return <LocationPageTemplate data={location} />;
}

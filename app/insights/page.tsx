import type { Metadata } from "next";
import { InsightsListing } from "@/components/insights/InsightsListing";
import { StructuredData } from "@/components/ui/StructuredData";

export const metadata: Metadata = {
  title: { absolute: "Insights | SARS Global" },
  description:
    "Ideas, insights and digital perspectives from SARS Global on marketing, AI, technology, websites and business growth.",
  alternates: {
    canonical: "https://sarsglobal.io/insights/",
  },
  openGraph: {
    title: "Insights | SARS Global",
    description:
      "Practical thinking on growth, technology, AI, design and digital performance from the SARS Global team.",
    url: "https://sarsglobal.io/insights/",
    siteName: "SARS Global",
    images: [{ url: "https://sarsglobal.io/assets/img/Services-image/Digital-Marketing.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | SARS Global",
    description:
      "Practical thinking on growth, technology, AI, design and digital performance from the SARS Global team.",
    images: ["https://sarsglobal.io/assets/img/Services-image/Digital-Marketing.png"],
  },
};

const insightsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Insights",
  url: "https://sarsglobal.io/insights/",
  isPartOf: {
    "@type": "WebSite",
    name: "SARS Global",
    url: "https://sarsglobal.io/",
  },
};

export default function InsightsPage() {
  return (
    <>
      <StructuredData items={[insightsSchema]} />
      <InsightsListing />
    </>
  );
}

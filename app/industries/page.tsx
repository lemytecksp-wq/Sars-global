import type { Metadata } from "next";
import { INDUSTRIES_DATA } from "@/content/industriesData";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

const industryData = INDUSTRIES_DATA["hub"];

export const metadata: Metadata = {
  title: `${industryData.title}`,
  description: industryData.metaDescription,
  alternates: { canonical: "https://sarsglobal.io/industries/" },
  openGraph: {
    title: industryData.title,
    description: industryData.metaDescription,
    url: "https://sarsglobal.io/industries/",
    siteName: "SARS Global",
    images: [{ url: "https://sarsglobal.io/assets/img/sars-hero-visual.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: industryData.title,
    description: industryData.metaDescription,
    images: ["https://sarsglobal.io/assets/img/sars-hero-visual.png"],
  },
};

export default function Page() {
  return <IndustryPageTemplate data={industryData} />;
}

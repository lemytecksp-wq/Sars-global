import type { Metadata } from "next";
import { LOCATIONS_DATA } from "@/content/locationsData";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";

const locationData = LOCATIONS_DATA["hub"];

export const metadata: Metadata = {
  title: locationData.title,
  description: locationData.metaDescription,
  alternates: { canonical: "https://sarsglobal.io/locations/" },
  openGraph: {
    title: locationData.title,
    description: locationData.metaDescription,
    url: "https://sarsglobal.io/locations/",
    siteName: "SARS Global",
    images: [{ url: "https://sarsglobal.io/assets/img/sars-hero-visual.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: locationData.title,
    description: locationData.metaDescription,
    images: ["https://sarsglobal.io/assets/img/sars-hero-visual.png"],
  },
};

export default function Page() {
  return <LocationPageTemplate data={locationData} />;
}

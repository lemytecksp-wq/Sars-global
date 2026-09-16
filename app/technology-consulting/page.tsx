import type { Metadata } from "next";
import { STANDALONE_SERVICES } from "@/content/services/standaloneServices";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const serviceData = STANDALONE_SERVICES["technology-consulting"];

export const metadata: Metadata = {
  title: `${serviceData.title} | SARS Global`,
  description: serviceData.metaDescription,
  alternates: { canonical: "https://sarsglobal.io/technology-consulting/" },
  openGraph: {
    title: `${serviceData.title} | SARS Global`,
    description: serviceData.metaDescription,
    url: "https://sarsglobal.io/technology-consulting/",
    siteName: "SARS Global",
    images: [{ url: "https://sarsglobal.io/assets/img/Services-image/software-developer.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} | SARS Global`,
    description: serviceData.metaDescription,
    images: ["https://sarsglobal.io/assets/img/Services-image/software-developer.png"],
  },
};

export default function Page() {
  return <ServicePageTemplate data={serviceData} />;
}

import type { Metadata } from "next";
import { DIGITAL_MARKETING_SERVICES } from "@/content/services/digitalMarketing";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const serviceData = DIGITAL_MARKETING_SERVICES["hub"];

export const metadata: Metadata = {
  title: `${serviceData.title} | SARS Global`,
  description: serviceData.metaDescription,
  alternates: { canonical: "https://sarsglobal.io/digital-marketing/" },
  openGraph: {
    title: `${serviceData.title} | SARS Global`,
    description: serviceData.metaDescription,
    url: "https://sarsglobal.io/digital-marketing/",
    siteName: "SARS Global",
    images: [{ url: "https://sarsglobal.io/assets/img/Services-image/Digital-Marketing.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} | SARS Global`,
    description: serviceData.metaDescription,
    images: ["https://sarsglobal.io/assets/img/Services-image/Digital-Marketing.png"],
  },
};

export default function Page() {
  return <ServicePageTemplate data={serviceData} />;
}

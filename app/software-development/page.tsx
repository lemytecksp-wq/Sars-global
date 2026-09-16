import type { Metadata } from "next";
import { SOFTWARE_DEVELOPMENT_SERVICES } from "@/content/services/softwareDevelopment";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const serviceData = SOFTWARE_DEVELOPMENT_SERVICES["hub"];

export const metadata: Metadata = {
  title: `${serviceData.title} | SARS Global`,
  description: serviceData.metaDescription,
  alternates: { canonical: "https://sarsglobal.io/software-development/" },
  openGraph: {
    title: `${serviceData.title} | SARS Global`,
    description: serviceData.metaDescription,
    url: "https://sarsglobal.io/software-development/",
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

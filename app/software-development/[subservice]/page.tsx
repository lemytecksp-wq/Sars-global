import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOFTWARE_DEVELOPMENT_SERVICES } from "@/content/services/softwareDevelopment";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

interface PageProps {
  params: Promise<{ subservice: string }>;
}

export async function generateStaticParams() {
  return [
    { subservice: "web-development" },
    { subservice: "custom-software" },
    { subservice: "wordpress-development" },
    { subservice: "shopify-development" },
    { subservice: "react-development" },
    { subservice: "api-development" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subservice } = await params;
  const service = SOFTWARE_DEVELOPMENT_SERVICES[subservice];
  if (!service) return {};

  const canonical = `https://sarsglobal.io${service.route}/`;
  return {
    title: `${service.title} | SARS Global`,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | SARS Global`,
      description: service.metaDescription,
      url: canonical,
      siteName: "SARS Global",
      images: [{ url: "https://sarsglobal.io/assets/img/Services-image/software-developer.png" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | SARS Global`,
      description: service.metaDescription,
      images: ["https://sarsglobal.io/assets/img/Services-image/software-developer.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { subservice } = await params;
  const service = SOFTWARE_DEVELOPMENT_SERVICES[subservice];
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate data={service} />;
}

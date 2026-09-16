import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AI_AUTOMATION_SERVICES } from "@/content/services/aiAutomation";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

interface PageProps {
  params: Promise<{ subservice: string }>;
}

export async function generateStaticParams() {
  return [
    { subservice: "ai-agent-development" },
    { subservice: "ai-chatbot-development" },
    { subservice: "workflow-automation" },
    { subservice: "marketing-automation" },
    { subservice: "crm-automation" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subservice } = await params;
  const service = AI_AUTOMATION_SERVICES[subservice];
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
      images: [{ url: "https://sarsglobal.io/assets/img/Services-image/ai.png" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | SARS Global`,
      description: service.metaDescription,
      images: ["https://sarsglobal.io/assets/img/Services-image/ai.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { subservice } = await params;
  const service = AI_AUTOMATION_SERVICES[subservice];
  if (!service) {
    notFound();
  }

  return <ServicePageTemplate data={service} />;
}

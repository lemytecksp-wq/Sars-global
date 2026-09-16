"use client";

import Link from "next/link";
import { useState } from "react";
import type { LocationData } from "@/content/locationsData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/ui/StructuredData";

interface LocationPageTemplateProps {
  data: LocationData;
}

export function LocationPageTemplate({ data }: LocationPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const breadcrumbs = data.slug === "locations"
    ? [{ label: "Locations" }]
    : [
        { label: "Locations", href: "/locations" },
        { label: data.city },
      ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `SARS Global - ${data.city}`,
    description: data.metaDescription,
    url: `https://sarsglobal.io${data.route}`,
    logo: "https://sarsglobal.io/assets/img/sars-new-logo.png",
    image: "https://sarsglobal.io/assets/img/sars-hero-visual.png",
    telephone: data.contactDetails.phone,
    email: data.contactDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.state,
      postalCode: data.postalCode || "301001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  const faqSchema = data.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <StructuredData items={[localBusinessSchema, ...(faqSchema ? [faqSchema] : [])]} />

      <main id="main" className="sars-page-main bg-neutral-950 text-neutral-100 min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-neutral-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5532c_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="sars-container relative z-10">
            <Breadcrumbs items={breadcrumbs} className="mb-8" />

            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#e5532c] bg-[#e5532c]/10 rounded-full border border-[#e5532c]/20 mb-6">
                {data.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                {data.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10">
                {data.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact/"
                  className="px-8 py-4 bg-[#e5532c] text-white font-medium rounded-full hover:bg-[#d04520] transition-colors shadow-lg shadow-[#e5532c]/20 inline-flex items-center gap-2"
                >
                  Contact This Office
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                {data.slug !== "locations" && (
                  <Link
                    href="/locations"
                    className="px-7 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-200 font-medium rounded-full transition-colors inline-flex items-center gap-2"
                  >
                    View All Locations
                  </Link>
                )}
              </div>

              {data.badges?.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-wrap gap-3">
                  {data.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-medium text-neutral-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Local Overview & Contact Details Card */}
        <section className="py-20 md:py-24 border-b border-neutral-800 bg-neutral-900/40">
          <div className="sars-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Center Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                  {data.localOverview.title}
                </h2>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                  {data.localOverview.description}
                </p>

                <div className="space-y-3">
                  {data.localOverview.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#e5532c]/10 text-[#e5532c] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-neutral-200 text-sm md:text-base font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Info Card */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
                <h3 className="text-xl font-bold text-white mb-6">
                  Office Details & Dispatch
                </h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Address
                    </div>
                    <div className="text-neutral-200 leading-relaxed font-medium">
                      {data.address}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${data.contactDetails.email}`}
                      className="text-[#e5532c] hover:underline font-medium"
                    >
                      {data.contactDetails.email}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${data.contactDetails.phone.replace(/\s+/g, "")}`}
                      className="text-neutral-200 hover:text-white font-medium"
                    >
                      {data.contactDetails.phone}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Working Hours
                    </div>
                    <div className="text-neutral-300">
                      {data.contactDetails.hours}
                    </div>
                  </div>

                  {data.nearbyAreasServed?.length > 0 && (
                    <div className="pt-4 border-t border-neutral-800">
                      <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Serving Regions
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {data.nearbyAreasServed.map((area, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Center Capabilities */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="max-w-2xl mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Delivery Capabilities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Why Global Brands Choose This Hub
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  Operational advantages engineered to give our clients superior agility and cost predictability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                  >
                    {cap.metric && (
                      <div className="text-2xl font-bold text-[#e5532c] mb-2 font-mono">
                        {cap.metric}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Offered at this Location */}
        {data.servicesOffered && data.servicesOffered.length > 0 && (
          <section className="py-20 md:py-24 border-b border-neutral-800 bg-neutral-900/30">
            <div className="sars-container">
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Services Executed
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Operational Practice Areas
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.servicesOffered.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.route}
                    className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#e5532c]/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                        {srv.desc}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#e5532c] inline-flex items-center gap-1">
                      Learn More &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-900/30">
            <div className="sars-container max-w-4xl">
              <div className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Questions About Our {data.city} Operations
                </h2>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-[#e5532c] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base md:text-lg">{faq.question}</span>
                        <span className="text-[#e5532c] font-bold text-xl shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-neutral-300 text-sm md:text-base leading-relaxed border-t border-neutral-800/60 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 to-black text-center">
          <div className="sars-container max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
              Global Delivery, Local Precision
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Connect with SARS Global?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
              Our leadership and delivery directors are available to discuss project specifications, dedicated team structures, and onboarding timelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact/"
                className="px-8 py-4 bg-[#e5532c] text-white font-semibold rounded-full hover:bg-[#d04520] transition-colors shadow-xl shadow-[#e5532c]/25"
              >
                Schedule Discussion
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

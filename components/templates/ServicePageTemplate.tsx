"use client";

import Link from "next/link";
import { useState } from "react";
import type { ServiceData } from "@/content/services/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/ui/StructuredData";

interface ServicePageTemplateProps {
  data: ServiceData;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const breadcrumbs = data.parentRoute && data.parentLabel
    ? [
        { label: data.parentLabel, href: data.parentRoute },
        { label: data.title },
      ]
    : [{ label: data.title }];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: data.eyebrow,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      name: "SARS Global",
      url: "https://sarsglobal.io",
      logo: "https://sarsglobal.io/assets/img/sars-new-logo.png",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: data.solutions?.length
      ? {
          "@type": "OfferCatalog",
          name: `${data.title} Deliverables`,
          itemListElement: data.solutions.map((sol, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: sol.title,
              description: sol.desc,
            },
            position: idx + 1,
          })),
        }
      : undefined,
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
      <StructuredData items={[serviceSchema, ...(faqSchema ? [faqSchema] : [])]} />

      <main id="main" className="sars-page-main bg-neutral-950 text-neutral-100 min-h-screen">
        {/* Hero Section */}
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
                  Consult Our Specialists
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                {data.parentRoute && (
                  <Link
                    href={data.parentRoute}
                    className="px-7 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-200 font-medium rounded-full transition-colors inline-flex items-center gap-2"
                  >
                    View All {data.parentLabel || "Services"}
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

        {/* Challenge / Context Section */}
        {data.challenge && (
          <section className="py-20 md:py-24 border-b border-neutral-800 bg-neutral-900/40">
            <div className="sars-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                    Strategic Context
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                    {data.challenge.title}
                  </h2>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {data.challenge.description}
                  </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.challenge.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#e5532c]/10 text-[#e5532c] flex items-center justify-center font-bold text-sm mb-4">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-neutral-200 font-medium text-sm md:text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub-Services Navigation (If Hub page) */}
        {data.subServices && data.subServices.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="max-w-2xl mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Specialized Solutions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Focused Practice Areas
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  Explore dedicated service offerings engineered for specific operational objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.subServices.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.route}
                    className="group block p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#e5532c]/50 hover:bg-neutral-900 transition-all duration-300"
                  >
                    <div className="text-xs font-semibold text-[#e5532c] mb-3">
                      Practice {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e5532c] transition-colors mb-3">
                      {sub.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {sub.desc}
                    </p>
                    <div className="space-y-2 mb-6">
                      {sub.deliverables.slice(0, 3).map((item, dIdx) => (
                        <div key={dIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e5532c]" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#e5532c] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore Service &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables & Capabilities */}
        {data.solutions && data.solutions.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-900/30">
            <div className="sars-container">
              <div className="max-w-2xl mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Capabilities & Deliverables
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  What We Deliver
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  Every engagement is backed by documented deliverables, production milestones, and SLA guarantees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                  >
                    <div className="text-xs font-mono text-[#e5532c] mb-2">
                      MODULE {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {sol.title}
                    </h3>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                      {sol.desc}
                    </p>
                    <div className="pt-6 border-t border-neutral-800">
                      <div className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-3">
                        Key Deliverables
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sol.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="text-xs md:text-sm text-neutral-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e5532c] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Steps */}
        {data.process && data.process.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="max-w-2xl mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Execution Methodology
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  How We Work
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  A predictable, phased approach designed to eliminate uncertainty and deliver velocity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 relative"
                  >
                    <div className="text-3xl font-bold text-neutral-700 mb-4 font-mono">
                      {step.step || String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {data.techStack && data.techStack.length > 0 && (
          <section className="py-16 border-b border-neutral-800 bg-neutral-900/20">
            <div className="sars-container">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] block mb-2">
                  Technical Foundation
                </span>
                <h2 className="text-2xl font-bold text-white">
                  Platforms, Frameworks & Tooling
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {data.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200 font-medium hover:border-[#e5532c]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                    Proven Outcomes
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Related Case Studies
                  </h2>
                </div>
                <Link
                  href="/work/"
                  className="text-sm font-medium text-[#e5532c] hover:underline inline-flex items-center gap-1"
                >
                  View All Case Studies &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.caseStudies.map((cs, idx) => (
                  <Link
                    key={idx}
                    href={cs.route}
                    className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#e5532c] block mb-2">
                        {cs.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {cs.name}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {cs.summary}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-neutral-300 inline-flex items-center gap-1">
                      Read Project &rarr;
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
                  Common Inquiries About {data.title}
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

        {/* Bottom CTA Banner */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 to-black text-center">
          <div className="sars-container max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
              Start Your Project
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Accelerate Your Operations with SARS Global?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
              Schedule a technical discovery session with our engineers and strategists to explore your architecture, requirements, and deployment timeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact/"
                className="px-8 py-4 bg-[#e5532c] text-white font-semibold rounded-full hover:bg-[#d04520] transition-colors shadow-xl shadow-[#e5532c]/25"
              >
                Schedule Discovery Call
              </Link>
              <Link
                href="/portfolio/"
                className="px-8 py-4 border border-neutral-700 text-neutral-200 font-semibold rounded-full hover:border-neutral-500 transition-colors"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

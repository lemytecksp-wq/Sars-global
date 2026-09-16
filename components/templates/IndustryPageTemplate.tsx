"use client";

import Link from "next/link";
import { useState } from "react";
import type { IndustryData } from "@/content/industriesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/ui/StructuredData";

interface IndustryPageTemplateProps {
  data: IndustryData;
}

export function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const breadcrumbs = data.slug === "industries"
    ? [{ label: "Industries" }]
    : [
        { label: "Industries", href: "/industries" },
        { label: data.name },
      ];

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.metaDescription,
    publisher: {
      "@type": "Organization",
      name: "SARS Global",
      url: "https://sarsglobal.io",
      logo: "https://sarsglobal.io/assets/img/sars-new-logo.png",
    },
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
      <StructuredData items={[industrySchema, ...(faqSchema ? [faqSchema] : [])]} />

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
                  Discuss Vertical Strategy
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                {data.slug !== "industries" && (
                  <Link
                    href="/industries"
                    className="px-7 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-200 font-medium rounded-full transition-colors inline-flex items-center gap-2"
                  >
                    All Industries
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

        {/* Sector Challenges */}
        {data.challenges && (
          <section className="py-20 md:py-24 border-b border-neutral-800 bg-neutral-900/40">
            <div className="sars-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                    Sector Friction Points
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
                    {data.challenges.title}
                  </h2>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {data.challenges.description}
                  </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.challenges.points.map((point, idx) => (
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

        {/* Solutions Grid */}
        {data.solutions && data.solutions.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="max-w-2xl mb-16">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Custom Engineering & Growth
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Tailored Vertical Solutions
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  Purpose-built architectures and specialized growth playbooks designed for this sector.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                  >
                    <div className="text-xs font-mono text-[#e5532c] mb-2">
                      SOLUTION {String(idx + 1).padStart(2, "0")}
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

        {/* Services Provided Cross-Links */}
        {data.servicesProvided && data.servicesProvided.length > 0 && (
          <section className="py-20 md:py-24 border-b border-neutral-800 bg-neutral-900/30">
            <div className="sars-container">
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                  Integrated Capabilities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Relevant Service Practices
                </h2>
                <p className="text-neutral-400 mt-4 text-base md:text-lg">
                  We deploy specialized cross-disciplinary teams across these core SARS Global practices.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.servicesProvided.map((srv, idx) => (
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

        {/* Case Studies */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section className="py-20 md:py-28 border-b border-neutral-800 bg-neutral-950">
            <div className="sars-container">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e5532c] mb-3 block">
                    Verified Outcomes
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Related Engagements
                  </h2>
                </div>
                <Link
                  href="/work/"
                  className="text-sm font-medium text-[#e5532c] hover:underline inline-flex items-center gap-1"
                >
                  View All Projects &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.caseStudies.map((cs, idx) => (
                  <Link
                    key={idx}
                    href={cs.route}
                    className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#e5532c] block mb-2">
                        {cs.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {cs.name}
                      </h3>
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                        {cs.summary}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-neutral-200 inline-flex items-center gap-1">
                      Explore Case Study &rarr;
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
                  Questions About Our {data.name} Practice
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
              Partner With SARS Global
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Accelerate Growth in Your Sector?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
              Connect with our industry practice leaders to discuss custom software, BPO team allocation, or tailored organic search strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact/"
                className="px-8 py-4 bg-[#e5532c] text-white font-semibold rounded-full hover:bg-[#d04520] transition-colors shadow-xl shadow-[#e5532c]/25"
              >
                Schedule Industry Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

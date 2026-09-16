"use client";

import { useState } from "react";

type FaqItem = readonly [string, string];

interface BpoFaqAccordionProps {
  faqs: readonly FaqItem[];
}

export function BpoFaqAccordion({ faqs }: BpoFaqAccordionProps) {
  // Only one FAQ open at a time. Start with index 0 open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => {
      const nextIndex = prevIndex === index ? null : index;
      if (nextIndex !== null && typeof window !== "undefined") {
        const question = faqs[nextIndex]?.[0] || "";
        const payload = {
          event: "faq_open",
          page: "/bpo-services/",
          service: "Business Process Outsourcing",
          question,
        };
        const w = window as unknown as { dataLayer?: unknown[] };
        if (Array.isArray(w.dataLayer)) {
          w.dataLayer.push(payload);
        }
        window.dispatchEvent(new CustomEvent("sars:bpo-event", { detail: payload }));
      }
      return nextIndex;
    });
  };

  return (
    <div className="sars-bpo-faq__list" role="region" aria-label="Frequently Asked Questions">
      {faqs.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        return (
          <details
            key={question}
            className={`sars-bpo-page__reveal is-visible${isOpen ? " is-open" : ""}`}
            open={isOpen}
            name="bpo-faq"
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                handleToggle(index);
              }}
              aria-expanded={isOpen}
            >
              <span>{question}</span>
            </summary>
            <div className="sars-bpo-faq__content">
              <p>{answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}

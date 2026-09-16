"use client";

import { useId, useState } from "react";

type BpoEngagementSwitcherProps = {
  models: readonly (readonly [string, string])[];
};

export function BpoEngagementSwitcher({ models }: BpoEngagementSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const switcherId = useId();
  const activeModel = models[activeIndex] ?? models[0];

  return (
    <div className="sars-bpo-switcher sars-bpo-page__reveal">
      <div className="sars-bpo-switcher__tabs" role="tablist" aria-label="BPO engagement models">
        {models.map(([title], index) => {
          const active = index === activeIndex;
          return (
            <button
              className={`sars-bpo-switcher__tab${active ? " is-active" : ""}`}
              id={`${switcherId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${switcherId}-panel`}
              key={title}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
            </button>
          );
        })}
      </div>

      <article
        className="sars-bpo-switcher__panel"
        id={`${switcherId}-panel`}
        role="tabpanel"
        aria-labelledby={`${switcherId}-tab-${activeIndex}`}
        key={activeModel[0]}
      >
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <h3>{activeModel[0]}</h3>
        <p>{activeModel[1]}</p>
      </article>
    </div>
  );
}

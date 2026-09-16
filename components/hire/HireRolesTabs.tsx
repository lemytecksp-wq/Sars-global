"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";

type HireRole = {
  key: string;
  title: string;
  description: string;
  selectLabel: string;
  cta: string;
  iconPath: string;
  technologies: readonly {
    name: string;
    icon: string;
  }[];
};

const simpleIconPath = (slug: string, color = "111827") => `/assets/img/external/simpleicons/${slug}-${color}.svg`;

const roles: readonly HireRole[] = [
  {
    key: "frontend",
    title: "Frontend",
    description: "UI/UX engineers who build beautiful, performant interfaces.",
    selectLabel: "Frontend Engineer",
    cta: "Hire a Frontend Engineer",
    iconPath: "M4 5.5h16v10H4zM8 20h8m-5-4.5L10 20m4-4.5 1 4.5",
    technologies: [
      ["React", "react"],
      ["Next.js", "nextdotjs"],
      ["TypeScript", "typescript"],
      ["Vue.js", "vuedotjs"],
      ["Tailwind CSS", "tailwindcss"],
      ["Svelte", "svelte"],
      ["Vite", "vite"],
      ["Figma", "figma"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
  {
    key: "backend",
    title: "Backend",
    description: "Server-side engineers who power your systems at scale.",
    selectLabel: "Backend Engineer",
    cta: "Hire a Backend Engineer",
    iconPath:
      "M6 7h12M6 12h12M6 17h12M5 4h14a1 1 0 0 1 1 1v4H4V5a1 1 0 0 1 1-1Zm-1 5h16v6H4V9Zm0 6h16v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
    technologies: [
      ["Node.js", "nodedotjs"],
      ["PHP", "php"],
      ["Laravel", "laravel"],
      ["Python", "python"],
      ["PostgreSQL", "postgresql"],
      ["MySQL", "mysql"],
      ["MongoDB", "mongodb"],
      ["Redis", "redis"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
  {
    key: "fullstack",
    title: "Full Stack",
    description: "End-to-end engineers who own the entire product lifecycle.",
    selectLabel: "Full Stack Engineer",
    cta: "Hire a Full Stack Engineer",
    iconPath: "M5 5h14v5H5zm0 9h5v5H5zm9 0h5v5h-5z",
    technologies: [
      ["React + Node", "react"],
      ["Next.js", "nextdotjs"],
      ["TypeScript", "typescript"],
      ["MongoDB", "mongodb"],
      ["Prisma", "prisma"],
      ["tRPC", "trpc"],
      ["Docker", "docker"],
      ["Vercel", "vercel"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
  {
    key: "devops",
    title: "DevOps",
    description: "Infrastructure engineers who keep your systems bulletproof.",
    selectLabel: "DevOps Engineer",
    cta: "Hire a DevOps Engineer",
    iconPath:
      "M12 3v4m0 10v4M4.2 7.5l3.5 2m8.6 5 3.5 2m0-9-3.5 2m-8.6 5-3.5 2M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z",
    technologies: [
      ["AWS", "amazonwebservices"],
      ["Docker", "docker"],
      ["Kubernetes", "kubernetes"],
      ["GitHub Actions", "githubactions"],
      ["Terraform", "terraform"],
      ["Linux", "linux"],
      ["Cloudflare", "cloudflare"],
      ["Azure", "microsoftazure"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
  {
    key: "ai",
    title: "AI / ML",
    description: "ML engineers and AI specialists pushing the frontier.",
    selectLabel: "AI / ML Engineer",
    cta: "Hire an AI / ML Engineer",
    iconPath:
      "M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3M7 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm3 4h4v4h-4z",
    technologies: [
      ["Python", "python"],
      ["TensorFlow", "tensorflow"],
      ["PyTorch", "pytorch"],
      ["OpenAI", "openai"],
      ["LangChain", "langchain"],
      ["Hugging Face", "huggingface"],
      ["Pandas", "pandas"],
      ["FastAPI", "fastapi"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
  {
    key: "mobile",
    title: "Mobile",
    description: "iOS and Android engineers building the next-gen mobile experience.",
    selectLabel: "Mobile Engineer",
    cta: "Hire a Mobile Engineer",
    iconPath: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 15h4M10 6h4",
    technologies: [
      ["Flutter", "flutter"],
      ["React Native", "react"],
      ["Swift", "swift"],
      ["Kotlin", "kotlin"],
      ["Firebase", "firebase"],
      ["Android", "android"],
      ["iOS", "apple"],
    ].map(([name, slug]) => ({ name, icon: simpleIconPath(slug) })),
  },
];

function chooseHireRole(selectLabel: string) {
  const select = document.querySelector<HTMLSelectElement>("#hire-required-talent");
  if (!select) return;

  const match = [...select.options].find(
    (option) => option.value === selectLabel || option.textContent === selectLabel
  );
  if (!match) return;

  select.value = match.value || match.textContent || "";
  select.closest(".sars-field")?.classList.remove("is-invalid");
  select.setAttribute("aria-invalid", "false");
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

export function HireRolesTabs() {
  const [activeKey, setActiveKey] = useState(roles[0].key);
  const activeRole = roles.find((role) => role.key === activeKey) ?? roles[0];

  const activateByIndex = (index: number) => {
    const role = roles[(index + roles.length) % roles.length];
    setActiveKey(role.key);
    window.requestAnimationFrame(() => {
      document.getElementById(`role-tab-${role.key}`)?.focus();
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") {
      activateByIndex(0);
      return;
    }

    if (event.key === "End") {
      activateByIndex(roles.length - 1);
      return;
    }

    const direction = event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1;
    activateByIndex(index + direction);
  };

  return (
    <section className="sars-hire-page__section sars-hire-page__roles-section" data-nav-theme="light" aria-labelledby="hire-roles-title">
      <div className="sars-container">
        <div className="sars-hire-page__section-head">
          <div>
            <p className="sars-hire-page__eyebrow sars-hire-page__reveal">ECOSYSTEM</p>
            <h2 id="hire-roles-title" className="sars-hire-page__heading sars-hire-page__reveal">
              Roles &amp; Technologies
            </h2>
          </div>
          <p className="sars-hire-page__copy sars-hire-page__reveal">
            Hover or tap a role on the left. See the exact tech stack we recruit for.
          </p>
        </div>
        <div className="sars-hire-page__roles-layout">
          <div className="sars-hire-page__role-tabs sars-hire-page__reveal" role="tablist" aria-label="Technology role categories">
            {roles.map((role, index) => {
              const active = role.key === activeRole.key;
              return (
                <button
                  className={`sars-hire-page__role-tab${active ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  id={`role-tab-${role.key}`}
                  aria-controls={`role-panel-${role.key}`}
                  aria-selected={active}
                  data-hire-role-tab={role.key}
                  key={role.key}
                  onClick={() => setActiveKey(role.key)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="sars-hire-page__role-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={role.iconPath} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <strong>{role.title}</strong>
                    <small>{role.description.replace(/\.$/, "")}</small>
                  </span>
                  <span className="sars-hire-page__role-arrow">&rarr;</span>
                </button>
              );
            })}
          </div>

          <div className="sars-hire-page__role-panels sars-hire-page__reveal">
            {roles.map((role) => {
              const active = role.key === activeRole.key;
              return (
                <article
                  className={`sars-hire-page__role-panel${active ? " is-active" : ""}`}
                  role="tabpanel"
                  id={`role-panel-${role.key}`}
                  aria-labelledby={`role-tab-${role.key}`}
                  aria-hidden={!active}
                  data-hire-role-panel={role.key}
                  hidden={!active}
                  key={role.key}
                >
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                  </div>
                  <div className="sars-hire-page__tech-grid" aria-label={`${role.title} technologies`}>
                    {role.technologies.map((technology) => (
                      <span className="sars-hire-page__tech-card" key={technology.name}>
                        <img src={technology.icon} alt="" loading="lazy" decoding="async" aria-hidden="true" />
                        {technology.name}
                      </span>
                    ))}
                  </div>
                  <a
                    className="sars-hire-page__role-cta"
                    href="#hire-lead-form"
                    data-hire-select={role.selectLabel}
                    onClick={() => chooseHireRole(role.selectLabel)}
                  >
                    {role.cta} &rarr;
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubService {
  label: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  href: string;
  subservices: SubService[];
  specialized?: Array<{ title: string; href: string; desc: string }>;
}

const serviceGroups: ServiceCategory[] = [
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    subservices: [
      { label: "SEO Services", href: "/digital-marketing/seo-services" },
      { label: "Performance Marketing", href: "/digital-marketing/performance-marketing" },
      { label: "Google Ads", href: "/digital-marketing/google-ads" },
      { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
      { label: "Content Marketing", href: "/digital-marketing/content-marketing" },
    ],
  },
  {
    title: "AI & Automation",
    href: "/ai-automation",
    subservices: [
      { label: "AI Agent Development", href: "/ai-automation/ai-agent-development" },
      { label: "AI Chatbot Development", href: "/ai-automation/ai-chatbot-development" },
      { label: "Workflow Automation", href: "/ai-automation/workflow-automation" },
      { label: "Marketing Automation", href: "/ai-automation/marketing-automation" },
      { label: "CRM Automation", href: "/ai-automation/crm-automation" },
    ],
  },
  {
    title: "Software Development",
    href: "/software-development",
    subservices: [
      { label: "Web Development", href: "/software-development/web-development" },
      { label: "Custom Software", href: "/software-development/custom-software" },
      { label: "WordPress Development", href: "/software-development/wordpress-development" },
      { label: "Shopify Development", href: "/software-development/shopify-development" },
      { label: "React Development", href: "/software-development/react-development" },
      { label: "API Development", href: "/software-development/api-development" },
    ],
  },
  {
    title: "BPO Services",
    href: "/bpo-services",
    subservices: [
      { label: "Customer Support Outsourcing", href: "/bpo-services/customer-support-outsourcing" },
      { label: "Sales Outsourcing", href: "/bpo-services/sales-outsourcing" },
      { label: "Technical Support Outsourcing", href: "/bpo-services/technical-support-outsourcing" },
      { label: "Back Office Outsourcing", href: "/bpo-services/back-office-outsourcing" },
    ],
    specialized: [
      { title: "UI/UX Design", href: "/ui-ux-design", desc: "Product UX, design systems & CRO" },
      { title: "Technology Consulting", href: "/technology-consulting", desc: "Cloud architecture & fractional CTO" },
    ],
  },
];

const mainNavLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Work", href: "/work/" },
  { label: "Hire Talent", href: "/hire-talent/" },
  { label: "Industries", href: "/industries/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLight, setIsLight] = useState(true);

  // Mobile accordion states
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMegaOpen(false);
      }
    };

    const onClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setIsSolid(y > 18);
      setIsHidden(y > lastY && y > 220 && !menuOpen);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    if (!sections.length || !("IntersectionObserver" in window)) {
      setIsLight(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (active) setIsLight(active.target.getAttribute("data-nav-theme") === "light");
      },
      { rootMargin: "-10% 0px -78% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navClassName = [
    "sars-nav",
    isSolid ? "is-solid" : "",
    isHidden ? "is-hidden" : "",
    isLight ? "is-light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const isWhatWeDoActive =
    pathname.startsWith("/digital-marketing") ||
    pathname.startsWith("/ai-automation") ||
    pathname.startsWith("/software-development") ||
    pathname.startsWith("/bpo-services") ||
    pathname.startsWith("/ui-ux-design") ||
    pathname.startsWith("/technology-consulting") ||
    pathname.startsWith("/services");

  return (
    <>
      <header className={navClassName} data-nav>
        <div className="sars-nav__inner">
          <Link className="sars-brand" href="/" aria-label="SARS Global home">
            <Image
              src="/assets/img/sars-new-logo.png"
              alt="SARS Global logo"
              width={68}
              height={68}
              priority
            />
          </Link>

          <nav className="sars-nav__links" aria-label="Primary navigation">
            {/* Desktop What We Do Dropdown */}
            <div
              ref={dropdownRef}
              className={`sars-nav__item--dropdown${megaOpen ? " is-open" : ""}`}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className={`sars-nav__dropdown-trigger${isWhatWeDoActive ? " is-active" : ""}`}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                aria-label="Toggle What We Do services menu"
                onClick={() => setMegaOpen((prev) => !prev)}
              >
                <span>What We Do</span>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Desktop Mega Menu */}
              <div
                className="sars-mega-dropdown"
                role="region"
                aria-label="What We Do services directory"
              >
                <div className="sars-mega-grid">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="sars-mega-col">
                      <Link
                        href={group.href}
                        className="sars-mega-col__title"
                        onClick={() => setMegaOpen(false)}
                      >
                        <span>{group.title}</span>
                        <span className="sars-mega-col__arrow" aria-hidden="true">&rarr;</span>
                      </Link>

                      <ul className="sars-mega-list">
                        {group.subservices.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="sars-mega-link"
                              onClick={() => setMegaOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {group.specialized && (
                        <div className="sars-mega-standalone-section">
                          {group.specialized.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="sars-mega-standalone-card"
                              onClick={() => setMegaOpen(false)}
                            >
                              <div>
                                <strong>{item.title}</strong>
                                <span>{item.desc}</span>
                              </div>
                              <span className="sars-mega-col__arrow" aria-hidden="true">&rarr;</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="sars-mega-bottom">
                  <div className="sars-mega-bottom__text">
                    <span className="sars-mega-bottom__badge">Full Stack</span>
                    <span>Engineering, organic demand generation, AI automation and managed operations.</span>
                  </div>
                  <div className="sars-mega-bottom__links">
                    <Link
                      href="/services/"
                      className="sars-mega-bottom__cta"
                      onClick={() => setMegaOpen(false)}
                    >
                      View All Capabilities &rarr;
                    </Link>
                    <Link
                      href="/work/"
                      className="sars-mega-bottom__cta-secondary"
                      onClick={() => setMegaOpen(false)}
                    >
                      Client Outcomes &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {mainNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="sars-button sars-nav__cta" href="/contact/" data-magnetic>
            Start a Project
          </Link>

          <button
            className="sars-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="sars-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer with Accordion Navigation */}
      <div
        className={`sars-menu${menuOpen ? " is-open" : ""}`}
        id="sars-menu"
        aria-hidden={!menuOpen}
      >
        <div className="sars-menu__inner">
          <nav className="sars-menu__links" aria-label="Full screen navigation">
            {/* Mobile What We Do Accordion Group */}
            <div className={`sars-menu__group${mobileWhatWeDoOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="sars-menu__group-toggle"
                onClick={() => setMobileWhatWeDoOpen((prev) => !prev)}
                aria-expanded={mobileWhatWeDoOpen}
              >
                <span>What We Do</span>
                <span className="text-xl font-mono text-[#e5532c]">
                  {mobileWhatWeDoOpen ? "−" : "+"}
                </span>
              </button>

              <div className="sars-menu__group-content">
                {/* 1. Digital Marketing */}
                <div
                  className={`sars-menu__subgroup${
                    mobileOpenSection === "digital-marketing" ? " is-open" : ""
                  }`}
                >
                  <div className="sars-menu__subgroup-header">
                    <Link
                      href="/digital-marketing"
                      className="sars-menu__subgroup-title"
                      onClick={() => setMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <button
                      type="button"
                      className="sars-menu__subgroup-toggle"
                      aria-label="Toggle Digital Marketing subservices"
                      onClick={() =>
                        setMobileOpenSection((prev) =>
                          prev === "digital-marketing" ? null : "digital-marketing",
                        )
                      }
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sars-menu__nested-links">
                    <Link
                      href="/digital-marketing/seo-services"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      SEO Services
                    </Link>
                    <Link
                      href="/digital-marketing/performance-marketing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Performance Marketing
                    </Link>
                    <Link
                      href="/digital-marketing/google-ads"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Google Ads
                    </Link>
                    <Link
                      href="/digital-marketing/social-media-marketing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Social Media Marketing
                    </Link>
                    <Link
                      href="/digital-marketing/content-marketing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Content Marketing
                    </Link>
                  </div>
                </div>

                {/* 2. AI & Automation */}
                <div
                  className={`sars-menu__subgroup${
                    mobileOpenSection === "ai-automation" ? " is-open" : ""
                  }`}
                >
                  <div className="sars-menu__subgroup-header">
                    <Link
                      href="/ai-automation"
                      className="sars-menu__subgroup-title"
                      onClick={() => setMenuOpen(false)}
                    >
                      AI & Automation
                    </Link>
                    <button
                      type="button"
                      className="sars-menu__subgroup-toggle"
                      aria-label="Toggle AI & Automation subservices"
                      onClick={() =>
                        setMobileOpenSection((prev) =>
                          prev === "ai-automation" ? null : "ai-automation",
                        )
                      }
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sars-menu__nested-links">
                    <Link
                      href="/ai-automation/ai-agent-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      AI Agent Development
                    </Link>
                    <Link
                      href="/ai-automation/ai-chatbot-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      AI Chatbot Development
                    </Link>
                    <Link
                      href="/ai-automation/workflow-automation"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Workflow Automation
                    </Link>
                    <Link
                      href="/ai-automation/marketing-automation"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Marketing Automation
                    </Link>
                    <Link
                      href="/ai-automation/crm-automation"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      CRM Automation
                    </Link>
                  </div>
                </div>

                {/* 3. Software Development */}
                <div
                  className={`sars-menu__subgroup${
                    mobileOpenSection === "software-development" ? " is-open" : ""
                  }`}
                >
                  <div className="sars-menu__subgroup-header">
                    <Link
                      href="/software-development"
                      className="sars-menu__subgroup-title"
                      onClick={() => setMenuOpen(false)}
                    >
                      Software Development
                    </Link>
                    <button
                      type="button"
                      className="sars-menu__subgroup-toggle"
                      aria-label="Toggle Software Development subservices"
                      onClick={() =>
                        setMobileOpenSection((prev) =>
                          prev === "software-development" ? null : "software-development",
                        )
                      }
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sars-menu__nested-links">
                    <Link
                      href="/software-development/web-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/software-development/custom-software"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Custom Software
                    </Link>
                    <Link
                      href="/software-development/wordpress-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      WordPress Development
                    </Link>
                    <Link
                      href="/software-development/shopify-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Shopify Development
                    </Link>
                    <Link
                      href="/software-development/react-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      React Development
                    </Link>
                    <Link
                      href="/software-development/api-development"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      API Development
                    </Link>
                  </div>
                </div>

                {/* 4. UI/UX Design (Parent direct link) */}
                <div className="py-2">
                  <Link
                    href="/ui-ux-design"
                    className="sars-menu__subgroup-title block text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    UI/UX Design
                  </Link>
                </div>

                {/* 5. Technology Consulting (Parent direct link) */}
                <div className="py-2">
                  <Link
                    href="/technology-consulting"
                    className="sars-menu__subgroup-title block text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Technology Consulting
                  </Link>
                </div>

                {/* 6. BPO Services */}
                <div
                  className={`sars-menu__subgroup${
                    mobileOpenSection === "bpo-services" ? " is-open" : ""
                  }`}
                >
                  <div className="sars-menu__subgroup-header">
                    <Link
                      href="/bpo-services"
                      className="sars-menu__subgroup-title"
                      onClick={() => setMenuOpen(false)}
                    >
                      BPO Services
                    </Link>
                    <button
                      type="button"
                      className="sars-menu__subgroup-toggle"
                      aria-label="Toggle BPO Services subservices"
                      onClick={() =>
                        setMobileOpenSection((prev) =>
                          prev === "bpo-services" ? null : "bpo-services",
                        )
                      }
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sars-menu__nested-links">
                    <Link
                      href="/bpo-services/customer-support-outsourcing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Customer Support Outsourcing
                    </Link>
                    <Link
                      href="/bpo-services/sales-outsourcing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sales Outsourcing
                    </Link>
                    <Link
                      href="/bpo-services/technical-support-outsourcing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Technical Support Outsourcing
                    </Link>
                    <Link
                      href="/bpo-services/back-office-outsourcing"
                      className="sars-menu__sublink"
                      onClick={() => setMenuOpen(false)}
                    >
                      Back Office Outsourcing
                    </Link>
                  </div>
                </div>

                {/* All Services Overview link */}
                <div className="pt-3 border-t border-white/10 mt-2">
                  <Link
                    href="/services/"
                    className="text-xs font-semibold text-[#e5532c] hover:underline inline-flex items-center gap-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    View All Services Overview &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {mainNavLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "is-active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <aside className="sars-menu__aside">
            <p>
              <strong>Work with us</strong>
              <a href="mailto:business@sarsglobal.io">business@sarsglobal.io</a>
            </p>
            <p>
              <strong>Capabilities</strong>
              Marketing, custom software development, AI automation, product design,
              BPO operations and technology consulting.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}

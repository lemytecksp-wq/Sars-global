import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Overview", href: "/services/" },
  { label: "About Us", href: "/about/" },
  { label: "Work", href: "/work/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Hire Talent", href: "/hire-talent/" },
  { label: "Insights", href: "/insights/" },
  { label: "Locations", href: "/locations/" },
  { label: "Contact", href: "/contact/" },
];

const whatWeDo = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Software Development", href: "/software-development" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Technology Consulting", href: "/technology-consulting" },
  { label: "BPO Services", href: "/bpo-services/" },
];

const industriesWeServe = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "B2B SaaS", href: "/industries/b2b-saas" },
  { label: "B2B Lead Generation", href: "/industries/b2b-lead-generation" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Education", href: "/industries/education" },
  { label: "Agritech", href: "/industries/agritech" },
  { label: "All Industries", href: "/industries/" },
];

export function SiteFooter() {
  return (
    <footer className="sars-footer">
      <div className="sars-footer__grid">
        <div>
          <Image src="/assets/img/sars-new-logo.png" alt="SARS Global logo" width={84} height={84} />
          <h2>SARS Global</h2>
          <p>
            Creative marketing, product design, software development, AI automation,
            talent solutions and managed operations for ambitious brands.
          </p>
          <p>
            <a href="mailto:business@sarsglobal.io">business@sarsglobal.io</a>
          </p>
        </div>

        <nav aria-label="Footer navigation links">
          <h3>Navigation</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer service links">
          <h3>What We Do</h3>
          <ul>
            {whatWeDo.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer industry links">
          <h3>Industries We Serve</h3>
          <ul>
            {industriesWeServe.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social and legal links">
          <h3>Social</h3>
          <div className="sars-footer__social" aria-label="SARS Global social links">
            <a
              href="https://www.linkedin.com/company/sarsglobal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SARS Global on LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.98H3.69v10.36h3.25V8.98ZM5.31 4.03a1.88 1.88 0 1 0 0 3.76 1.88 1.88 0 0 0 0-3.76Zm13.94 9.35c0-3.13-1.67-4.58-3.9-4.58a3.37 3.37 0 0 0-3.04 1.68h-.04v-1.5H9.15v10.36h3.25v-5.12c0-1.35.26-2.66 1.93-2.66 1.64 0 1.66 1.54 1.66 2.75v5.03h3.26v-5.96Z" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sars_global/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SARS Global on Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.35A4.65 4.65 0 1 1 7.35 12 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 14.65 12 2.65 2.65 0 0 0 12 9.35Zm4.9-2.62a1.08 1.08 0 1 1-1.08 1.08 1.08 1.08 0 0 1 1.08-1.08Z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <ul>
            <li>
              <Link href="/privacy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sars-footer__bottom">
        <span>
          Copyright <span data-current-year>2026</span> SARS Global. All rights reserved.
        </span>
        <span>Designed for performance, accessibility and clean handoff.</span>
      </div>
    </footer>
  );
}

const SELECTOR = {
  reveal: ".sars-reveal",
  magnetic: "[data-magnetic]",
  sectionTheme: "[data-nav-theme]",
  nav: "[data-nav]",
  menu: "[data-menu]",
  menuToggle: "[data-menu-toggle]",
  preloader: "[data-preloader]",
  cursor: "[data-cursor]",
  horizontal: "[data-horizontal]",
  objective: "[data-objective]",
  manifesto: "[data-manifesto]",
  stat: "[data-stat]",
  proof: "[data-proof-slider]",
  clientLogoCloud: "[data-client-logo-cloud]",
  logoTestimonials: "[data-logo-testimonials]",
  form: "[data-contact-form]",
  hireHero: "[data-hire-hero]",
  hireCapabilities: "[data-hire-capabilities]",
  hireCapability: "[data-hire-capability]",
  hireProcess: "[data-hire-process]",
  hireSelect: "[data-hire-select], [data-hire-engagement]",
  workHero: "[data-work-hero]",
  serviceIndex: "[data-service-index]",
  processSection: "[data-process-section]",
  logoPills: "[data-logo-pills]",
  featuredCases: "[data-featured-cases]",
  featuredWorkRail: "[data-featured-work-rail]",
  portfolioRail: "[data-portfolio-rail]",
  portfolioLogoWall: "[data-portfolio-logo-wall]",
  portfolioProcess: "[data-portfolio-process]",
  projectOpen: "[data-project-open]",
  projectPopup: "[data-project-popup]",
  positioning: "[data-positioning]",
  industries: "[data-industries]",
  tiltVisual: "[data-tilt-visual]",
  scrollMarquee: "[data-scroll-marquee]"
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const desktop = () => window.matchMedia("(min-width: 761px)").matches;

const CLIENT_LOGOS = [
  { name: "SBI", src: "/assets/img/clients/01-cavalo-1.png" },
  { name: "Euler Motors", src: "/assets/img/clients/02-euler-motors-1.png" },
  { name: "Eicher", src: "/assets/img/clients/03-eicher.png" },
  { name: "Swaraj", src: "/assets/img/clients/04-client-15.png" },
  { name: "StarAgri", src: "/assets/img/clients/05-staragri.png" },
  { name: "Garg Chemicals", src: "/assets/img/clients/06-client-16.png" },
  { name: "Q Group", src: "/assets/img/clients/07-qgroup.png" },
  { name: "Soumya Vihar by Lalji", src: "/assets/img/clients/08-soumya-vihar-by-lalji.png" },
  { name: "Sri Khelari Builders", src: "/assets/img/clients/09-sri-khelari-builders-logo.png" },
  { name: "Aangan Villa", src: "/assets/img/clients/10-client-18.png" },
  { name: "Vizhve8", src: "/assets/img/clients/11-vizhve8.png" },
  { name: "Lalit Build Infra", src: "/assets/img/clients/12-lalit-build-infra.png" },
  { name: "Tulsi Khakhra Wala", src: "/assets/img/clients/13-client-23.png" },
  { name: "HD Films and Production", src: "/assets/img/clients/14-untitled-design-1-2.png" },
  { name: "Avance Consulting", src: "/assets/img/clients/15-avance-cons.png" },
  { name: "Cavalo", src: "/assets/img/clients/16-cavalo.png" },
  { name: "BenchKart", src: "/assets/img/clients/17-benchkart.png" },
  { name: "Winni Cakes & More", src: "/assets/img/clients/18-winnie-cakes.png" },
  { name: "Cloudnine KnowMoms", src: "/assets/img/clients/19-cloud-nine.png" },
  { name: "Raoni", src: "/assets/img/clients/20-client-22.png" },
  { name: "Detailing Devils", src: "/assets/img/clients/21-client-21.png" },
  { name: "Light Financial Education", src: "/assets/img/clients/22-lfs.png" },
  { name: "Dream Stream Events", src: "/assets/img/clients/23-dream-stream.png" },
  { name: "Shubham Bricks", src: "/assets/img/clients/24-shubham-bricks.png" },
  { name: "Maayakalp", src: "/assets/img/clients/25-maayakalp.png" }
];

const TOOL_STACK = [
  { name: "ChatGPT", mark: "GPT", group: "AI assistants", tone: "#10a37f" },
  { name: "Gemini", mark: "G", group: "AI assistants", tone: "#4285f4" },
  { name: "Claude", mark: "C", group: "AI assistants", tone: "#d97745" },
  { name: "Perplexity", mark: "PX", group: "AI research", tone: "#1fb6b1" },
  { name: "Midjourney", mark: "MJ", group: "Creative AI", tone: "#6f4cff" },
  { name: "Runway", mark: "RW", group: "Video AI", tone: "#111111" },
  { name: "Zapier", mark: "Z", group: "Automation", tone: "#ff4f00" },
  { name: "Make", mark: "Mk", group: "Automation", tone: "#6d3df5" },
  { name: "n8n", mark: "n8n", group: "Automation", tone: "#ea4b71" },
  { name: "HubSpot", mark: "HS", group: "CRM", tone: "#ff5c35" },
  { name: "Salesforce", mark: "SF", group: "CRM", tone: "#00a1e0" },
  { name: "Google Ads", mark: "Ads", group: "Paid media", tone: "#34a853" },
  { name: "Meta Ads", mark: "Meta", group: "Paid media", tone: "#0866ff" },
  { name: "GA4", mark: "GA4", group: "Analytics", tone: "#f9ab00" },
  { name: "Looker Studio", mark: "LS", group: "Reporting", tone: "#4285f4" },
  { name: "WordPress", mark: "WP", group: "Web", tone: "#21759b" },
  { name: "Shopify", mark: "S", group: "Commerce", tone: "#95bf47" },
  { name: "React", mark: "R", group: "Frontend", tone: "#61dafb" },
  { name: "Next.js", mark: "N", group: "Frontend", tone: "#000000" },
  { name: "Figma", mark: "F", group: "Design", tone: "#a259ff" },
  { name: "Notion", mark: "N", group: "Operations", tone: "#000000" },
  { name: "Airtable", mark: "AT", group: "Data systems", tone: "#18bfff" },
  { name: "Slack", mark: "SL", group: "Operations", tone: "#4a154b" },
  { name: "Mailchimp", mark: "MC", group: "Email", tone: "#ffe01b" },
  { name: "Semrush", mark: "SR", group: "SEO", tone: "#ff642d" },
  { name: "Ahrefs", mark: "AH", group: "SEO", tone: "#2464ff" }
];

const PROJECTS = [
  {
    number: "01",
    slug: "cavalo",
    title: "Cavalo",
    cardHeading: "Driving growth for a commercial vehicle marketplace.",
    heading: "Driving growth for India's commercial vehicle marketplace.",
    industry: "Automotive and Commercial Vehicles",
    image: "/wp-content/uploads/2026/08/8.png",
    website: "https://cavalo.in/",
    accent: "#f57e20",
    summary: "An integrated creative and performance marketing engagement covering brochures, social media, reels, vehicle campaigns and paid advertising.",
    services: ["Creative Design", "Brochure Design", "Social Media", "Reels and Video", "Meta Ads", "Google Ads", "YouTube Ads"],
    overview: [
      "Cavalo is a commercial vehicle platform connecting buyers, sellers, fleet owners, transporters, dealers and brokers.",
      "SARS Global supports Cavalo through an integrated combination of creative communication, social media content, brochure design, video production and performance advertising."
    ],
    challenge: [
      "Commercial vehicle customers require clear information about vehicle models, condition, registration, finance, documentation and pricing.",
      "Cavalo also communicates with several different audiences, each with separate priorities and enquiry journeys.",
      "The brand needed a consistent system for promoting vehicles, generating enquiries and communicating buyer, seller, dealer and finance-related services."
    ],
    approachIntro: "We created a flexible campaign and communication system that could be adapted for individual vehicles, customer segments and marketing channels.",
    approach: ["Vehicle promotion creatives", "Buyer campaigns", "Seller campaigns", "Fleet-owner communication", "Dealer and broker campaigns", "Finance and insurance creatives", "Vehicle delivery posts", "Social media content", "Promotional reels", "Video advertising"],
    executionTitle: "Performance marketing",
    execution: ["Meta Ads", "Google Ads", "YouTube Ads", "Lead-generation campaigns", "WhatsApp enquiry campaigns", "Vehicle-specific messaging", "Creative performance reviews", "Campaign monitoring and reporting"],
    outcome: [
      "Cavalo received a connected marketing ecosystem across digital advertising, social media, brochures, video and vehicle communication.",
      "This created a more consistent brand presence across multiple customer segments and campaign formats."
    ]
  },
  {
    number: "02",
    slug: "avance-consulting",
    title: "Avance Consulting",
    cardHeading: "Supporting a global talent solutions platform.",
    heading: "Supporting a global talent solutions website.",
    industry: "Recruitment and Global Talent Solutions",
    image: "/wp-content/uploads/2026/08/avance.png",
    website: "https://avanceservices.com/",
    accent: "#2e65b8",
    summary: "Structured and responsive website development for an international recruitment and workforce solutions organisation.",
    services: ["Website Development", "Front-End Development", "WordPress", "Responsive Development", "Corporate Pages", "Careers Experience"],
    overview: [
      "Avance Consulting provides recruitment, staffing and talent solutions to organisations operating across international markets.",
      "SARS Global supported the website development by creating structured and responsive page experiences for employers, candidates, consultants and corporate audiences."
    ],
    challenge: [
      "The website needed to organise a broad range of talent services, industry practices, candidate resources, corporate information and enquiry journeys.",
      "Each section had to serve a specific audience while remaining visually and functionally connected."
    ],
    approachIntro: "We used reusable page structures and consistent design patterns to support:",
    approach: ["Talent solution pages", "Industry pages", "Candidate resources", "Careers content", "Corporate information", "Insight layouts", "Contact and consultation forms", "Responsive navigation"],
    executionTitle: "Execution details",
    execution: ["Structured page templates", "Responsive corporate layouts", "Reusable section patterns", "Consultation-focused enquiry paths"],
    outcome: ["The completed development created a more structured platform capable of communicating global talent services across desktop, tablet and mobile devices."]
  },
  {
    number: "03",
    slug: "benchkart",
    title: "BenchKart",
    cardHeading: "Developing a scalable B2B digital platform.",
    heading: "Developing a scalable B2B services platform.",
    industry: "B2B Technology and Professional Services",
    image: "/wp-content/uploads/2026/08/benchkart.png",
    website: "https://benchkart.com/",
    accent: "#1d6c63",
    summary: "Responsive development, reusable components and service-page experiences for an international B2B marketplace.",
    services: ["Website Development", "WordPress", "Front-End Development", "Responsive Components", "Landing Pages", "Form Integration"],
    overview: [
      "BenchKart is an international B2B platform connecting businesses with agencies, technology specialists and professional service providers.",
      "SARS Global contributed to its large-scale website development through responsive pages, reusable components and conversion-focused sections."
    ],
    challenge: [
      "The platform contains many services, industries, talent solutions, forms and customer journeys.",
      "The development system needed to remain consistent while supporting ongoing expansion and large volumes of content."
    ],
    approachIntro: "Reusable elements were created for:",
    approach: ["Hero sections", "Service pages", "Industry pages", "Landing pages", "Forms", "Calls to action", "Talent solutions", "Blog layouts", "Resource sections", "Responsive navigation"],
    executionTitle: "Execution details",
    execution: ["Component-based page production", "Conversion-focused forms", "Landing page structures", "Responsive navigation and content systems"],
    outcome: ["BenchKart received a scalable digital foundation that supports a broad B2B service ecosystem while maintaining consistent design and responsive behaviour."]
  },
  {
    number: "04",
    slug: "cloudnine",
    title: "Cloudnine KnowMoms",
    cardHeading: "Creating thoughtful healthcare communication.",
    heading: "Creating warm and responsible healthcare communication.",
    industry: "Healthcare, Maternity and Childcare",
    image: "/wp-content/uploads/2026/08/cloudnine.png",
    website: "https://www.cloudninecare.com/",
    accent: "#c8505d",
    summary: "Social media creatives, brochures and campaign communication designed for maternity, newborn care and family audiences.",
    services: ["Social Media Creatives", "Brochure Design", "Campaign Design", "Healthcare Communication", "Maternity Content", "Digital Creative Support"],
    overview: [
      "Cloudnine supports families across maternity, pregnancy, newborn care, paediatrics and women's health.",
      "SARS Global creates social media posts, brochures and campaign creatives designed to communicate healthcare information with warmth and clarity."
    ],
    challenge: [
      "Healthcare content needs to remain accurate, responsible and easy to understand.",
      "The communication also needed to feel supportive and sensitive for expecting parents, mothers and families."
    ],
    approachIntro: "Creative work included:",
    approach: ["Maternity content", "Pregnancy-awareness posts", "Newborn-care communication", "Baby and parenting creatives", "Doctor and service promotions", "Event designs", "Brochures", "Campaign graphics", "Insurance and finance creatives", "Patient-education communication"],
    executionTitle: "Execution details",
    execution: ["Social media creative systems", "Healthcare brochures", "Campaign graphics", "Patient education communication"],
    outcome: ["Cloudnine received consistent, brand-aligned communication across social media, brochures and campaign materials."]
  },
  {
    number: "05",
    slug: "dream-stream-events",
    title: "Dream Stream Events",
    cardHeading: "A digital experience for unforgettable celebrations.",
    heading: "Designing a digital experience for unforgettable celebrations.",
    industry: "Weddings and Events",
    image: "/wp-content/uploads/2026/08/DSE.png",
    website: "https://dreamstreamevents.com/",
    accent: "#d95f85",
    summary: "Complete website design and development built around wedding stories, visual galleries, premium services and customer enquiries.",
    services: ["UI/UX Design", "Website Development", "WordPress", "Responsive Design", "Gallery Experience", "Enquiry Integration"],
    overview: [
      "Dream Stream Events creates personalised weddings and celebrations shaped around each couple, culture and story.",
      "SARS Global designed and developed the complete website to showcase services, event galleries and wedding stories."
    ],
    challenge: ["The website needed to balance large visual galleries, premium presentation, storytelling and practical enquiry journeys."],
    approachIntro: "The experience included:",
    approach: ["Website strategy", "Information architecture", "UI/UX design", "Homepage development", "Service presentation", "Wedding story pages", "Event galleries", "Testimonials", "Contact experience", "Enquiry form", "Responsive WordPress development"],
    executionTitle: "Execution details",
    execution: ["Premium visual galleries", "Service and story pages", "Responsive WordPress development", "Enquiry-led contact experience"],
    outcome: ["Dream Stream Events received a polished digital platform that helps potential clients explore services, view real celebrations and submit enquiries through one connected experience."]
  },
  {
    number: "06",
    slug: "sri-khelari-builders",
    title: "Sri Khelari Builders",
    cardHeading: "Reimagining a real estate digital experience.",
    heading: "Reimagining a real estate brand for the modern buyer.",
    industry: "Real Estate and Construction",
    image: "/wp-content/uploads/2026/08/KBC.png",
    accent: "#92673f",
    summary: "A complete website revamp focused on modern UI/UX, project presentation, property discovery and lead enquiries.",
    services: ["Website Revamp", "UI/UX Design", "WordPress Development", "Responsive Design", "Property Pages", "Lead Forms"],
    overview: [
      "Sri Khelari Builders is a real estate and construction company delivering residential development projects.",
      "SARS Global redesigned and redeveloped the website to create a more modern, credible and property-focused digital experience."
    ],
    challenge: [
      "Potential property buyers needed clearer access to projects, locations, property details, amenities, galleries, company information, enquiry options and site-visit requests."
    ],
    approachIntro: "The website revamp included:",
    approach: ["Information architecture", "UI/UX design", "Homepage redesign", "Project listing", "Individual project pages", "Amenities presentation", "Property galleries", "Lead enquiry forms", "Responsive WordPress implementation"],
    executionTitle: "Execution details",
    execution: ["Project listing and property pages", "Amenities presentation", "Property galleries", "Lead enquiry forms"],
    outcome: ["The redesigned website gave the company a stronger professional identity and a clearer property-discovery journey for prospective buyers."]
  },
  {
    number: "07",
    slug: "light-financial-education",
    title: "Light Financial Education",
    cardHeading: "Making financial education engaging and accessible.",
    heading: "Making financial education engaging and accessible.",
    industry: "Education and Financial Literacy",
    image: "/wp-content/uploads/2026/08/LFE.png",
    website: "https://lightfinancialeducation.com/",
    accent: "#f1a323",
    summary: "A connected brand ecosystem covering identity, website, landing pages, brochures, UI/UX and creative communication.",
    services: ["Brand Identity", "Logo Design", "UI/UX", "Website Development", "Landing Pages", "Brochure Design", "Social Media Creatives"],
    overview: [
      "Light Financial Education helps children build practical money-management skills and responsible financial habits.",
      "SARS Global created a complete visual and digital ecosystem for the brand."
    ],
    challenge: ["The identity needed to feel engaging for children while maintaining credibility with parents, educators and programme partners."],
    approachIntro: "The project included:",
    approach: ["Logo design", "Brand identity", "Colour and typography system", "UI/UX design", "Website development", "Landing pages", "Programme presentation", "Brochure design", "Social media posts", "Educational creatives"],
    executionTitle: "Execution details",
    execution: ["Brand identity", "Website development", "Landing pages", "Brochure design", "Social media creative support"],
    outcome: ["Light Financial Education received a connected identity across its website, campaign landing pages, brochures and social media communication."]
  },
  {
    number: "08",
    slug: "staragri",
    title: "StarAgri",
    cardHeading: "Simplifying a complex agritech ecosystem.",
    heading: "Simplifying a complex agritech ecosystem.",
    industry: "Agritech and Agricultural Services",
    image: "/wp-content/uploads/2026/08/Staragri.png",
    website: "https://www.staragri.com/",
    accent: "#5f8f2d",
    summary: "UI/UX and website development bringing multiple agricultural, financial and technology services into one structured digital platform.",
    services: ["UX Strategy", "UI Design", "Information Architecture", "Website Development", "Responsive Development", "Corporate Content"],
    overview: [
      "StarAgri operates across agricultural warehousing, collateral management, finance, procurement, testing, trade facilitation and marketplace services.",
      "SARS Global worked on the UI/UX and development of its corporate website."
    ],
    challenge: ["The digital platform needed to communicate multiple connected business verticals to farmers, agribusinesses, financial institutions, partners and corporate stakeholders."],
    approachIntro: "The work included:",
    approach: ["Information architecture", "UX planning", "UI design", "Homepage experience", "Business vertical pages", "Service pages", "Technology content", "Leadership presentation", "Corporate governance pages", "News and insight layouts", "Responsive development"],
    executionTitle: "Execution details",
    execution: ["Business vertical pages", "Corporate governance pages", "News and insight layouts", "Responsive development"],
    outcome: ["The website brought StarAgri's different business verticals together within one structured and consistent digital platform."]
  }
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easeOut(value) {
  return 1 - Math.pow(1 - value, 3);
}

function progressWithin(element) {
  const rect = element.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  if (total <= 0) return 0;
  return clamp((rect.top * -1) / total, 0, 1);
}

function createLogoCard(client) {
  const figure = document.createElement("figure");
  figure.className = "sars-client-logo-card";
  const img = document.createElement("img");
  img.src = client.src;
  img.alt = client.name;
  img.loading = "lazy";
  img.decoding = "async";
  figure.append(img);
  return figure;
}

function createLogoPill(client, index) {
  const pill = document.createElement("figure");
  const isTool = Boolean(client.mark);
  const palette = ["#070707", "#f57e20", "#fffdf8"];
  const widths = [184, 214, 168, 238, 196, 226, 178, 254];
  const heights = [70, 78, 66, 82];
  pill.className = isTool ? "sars-logo-pill sars-logo-pill--tool" : "sars-logo-pill";
  pill.tabIndex = 0;
  pill.setAttribute("aria-label", `${isTool ? "Tool" : "Client"}: ${client.name}`);
  pill.dataset.clientName = client.name;
  pill.dataset.logoName = client.name;
  pill.style.setProperty("--pill-bg", palette[index % palette.length]);
  pill.style.setProperty("--pill-w", `${widths[index % widths.length]}px`);
  pill.style.setProperty("--pill-h", `${heights[index % heights.length]}px`);
  pill.style.setProperty("--pill-delay", `${index * 70}ms`);
  if (isTool) pill.style.setProperty("--tool-tone", client.tone || "#f57e20");

  const mark = document.createElement("span");
  mark.className = "sars-logo-pill__mark";
  if (isTool) {
    const icon = document.createElement("span");
    icon.className = "sars-tool-mark";
    icon.textContent = client.mark;
    const copy = document.createElement("span");
    copy.className = "sars-tool-copy";
    const name = document.createElement("strong");
    name.textContent = client.name;
    const group = document.createElement("small");
    group.textContent = client.group;
    copy.append(name, group);
    mark.append(icon, copy);
  } else {
    const img = document.createElement("img");
    img.src = client.src;
    img.alt = client.name;
    img.loading = "lazy";
    img.decoding = "async";
    mark.append(img);
  }
  pill.append(mark);
  return pill;
}

function chunkItems(items, count) {
  return Array.from({ length: count }, (_, columnIndex) => items.filter((_, itemIndex) => itemIndex % count === columnIndex));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function initPreloader() {
  const preloader = document.querySelector(SELECTOR.preloader);
  if (!preloader) return;

  const bar = preloader.querySelector("[data-preloader-bar]");
  const count = preloader.querySelector("[data-preloader-count]");

  const alreadyLoaded = typeof sessionStorage !== "undefined" && sessionStorage.getItem("sars_preloaded");

  if (reducedMotion || alreadyLoaded) {
    preloader.classList.add("is-done");
    document.body.classList.remove("is-loading");
    return;
  }

  document.body.classList.add("is-loading");
  let start = null;
  const duration = 580;

  function tick(time) {
    if (!start) start = time;
    const raw = clamp((time - start) / duration, 0, 1);
    const progress = easeOut(raw);
    const percent = Math.round(progress * 100);
    if (bar) bar.style.width = `${percent}%`;
    if (count) count.textContent = `${percent}%`;
    if (raw < 1) {
      requestAnimationFrame(tick);
      return;
    }
    window.setTimeout(() => {
      preloader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      try {
        sessionStorage.setItem("sars_preloaded", "1");
      } catch (_) {}
    }, 80);
  }

  requestAnimationFrame(tick);
}

function initNavigation() {
  const nav = document.querySelector(SELECTOR.nav);
  const menu = document.querySelector(SELECTOR.menu);
  const toggle = document.querySelector(SELECTOR.menuToggle);
  if (!nav || !menu || !toggle) return;

  let lastY = window.scrollY;
  let trapCleanup = null;

  const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const focusable = [...menu.querySelectorAll(focusableSelector)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (trapCleanup) trapCleanup();
    trapCleanup = null;
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    const first = menu.querySelector(focusableSelector);
    if (first) first.focus();
    document.addEventListener("keydown", trapFocus);
    trapCleanup = () => document.removeEventListener("keydown", trapFocus);
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("is-solid", y > 18);
    nav.classList.toggle("is-hidden", y > lastY && y > 220 && !document.body.classList.contains("menu-open"));
    lastY = y;
  }, { passive: true });

  const themeObserver = new IntersectionObserver((entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    nav.classList.toggle("is-light", active.target.dataset.navTheme === "light");
  }, { rootMargin: "-10% 0px -78% 0px", threshold: [0, 0.2, 0.6, 1] });

  document.querySelectorAll(SELECTOR.sectionTheme).forEach((section) => themeObserver.observe(section));
}

function initReveals() {
  const items = document.querySelectorAll(SELECTOR.reveal);
  if (!items.length) return;
  if (reducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((item) => observer.observe(item));
}

function initMagneticButtons() {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(SELECTOR.magnetic).forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

function initHeroParallax() {
  const hero = document.querySelector(".sars-hero");
  if (!hero || !finePointer || reducedMotion) return;
  if (hero.dataset.heroParallaxInitialized === "true") return;
  hero.dataset.heroParallaxInitialized = "true";
  const cards = hero.querySelectorAll(".sars-floating-card");
  if (!cards.length) return;
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cards.forEach((card, index) => {
      const depth = 18 + index * 10;
      card.style.setProperty("--mx", `${x * depth}px`);
      card.style.setProperty("--my", `${y * depth}px`);
    });
  });
  hero.addEventListener("pointerleave", () => {
    cards.forEach((card) => {
      card.style.setProperty("--mx", "0px");
      card.style.setProperty("--my", "0px");
    });
  });
}

function initWorkHeroMotion() {
  const hero = document.querySelector(SELECTOR.workHero);
  const board = hero?.querySelector("[data-work-hero-board]");
  const rail = hero?.querySelector("[data-work-hero-rail]");
  const cards = [...(hero?.querySelectorAll(".sars-work-hero-card") || [])];
  if (!hero || !board || !rail || !cards.length || reducedMotion) return;
  if (hero.dataset.workHeroInitialized === "true") return;
  hero.dataset.workHeroInitialized = "true";

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const maxScrollShift = () => desktop() ? 170 : 72;

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      card.style.setProperty("--work-card-x", `${Math.round(x * 100)}%`);
      card.style.setProperty("--work-card-y", `${Math.round(y * 100)}%`);
    }, { passive: true });
  });

  if (gsap) {
    const context = gsap.context(() => {
      gsap.fromTo(cards,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.9, stagger: 0.045, ease: "power3.out" }
      );

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(rail, {
          "--work-rail-y": () => `${-maxScrollShift()}px`,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      }
    }, hero);

    if (finePointer) {
      hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(board, {
          "--work-board-x": `${x * 22}px`,
          "--work-board-y": `${y * 18}px`,
          "--work-board-rx": `${y * -4}deg`,
          "--work-board-ry": `${x * 6}deg`,
          duration: 0.85,
          ease: "power3.out",
          overwrite: true
        });
        if (!ScrollTrigger) {
          gsap.to(rail, {
            "--work-rail-y": `${-progressWithin(hero) * maxScrollShift()}px`,
            duration: 0.6,
            ease: "power3.out",
            overwrite: true
          });
        }
      }, { passive: true });

      hero.addEventListener("pointerleave", () => {
        gsap.to(board, {
          "--work-board-x": "0px",
          "--work-board-y": "0px",
          "--work-board-rx": "0deg",
          "--work-board-ry": "0deg",
          duration: 0.85,
          ease: "power3.out",
          overwrite: true
        });
      });
    }

    window.addEventListener("pagehide", () => context.revert(), { once: true });
    return;
  }

  let targetScroll = 0;
  let currentScroll = 0;
  let pointerX = 0;
  let pointerY = 0;
  let renderedX = 0;
  let renderedY = 0;
  let raf = 0;
  let visible = true;

  function render() {
    currentScroll += (targetScroll - currentScroll) * 0.1;
    renderedX += (pointerX - renderedX) * 0.12;
    renderedY += (pointerY - renderedY) * 0.12;
    rail.style.setProperty("--work-rail-y", `${(-currentScroll * maxScrollShift()).toFixed(2)}px`);
    board.style.setProperty("--work-board-x", `${(renderedX * 22).toFixed(2)}px`);
    board.style.setProperty("--work-board-y", `${(renderedY * 18).toFixed(2)}px`);
    board.style.setProperty("--work-board-rx", `${(renderedY * -4).toFixed(2)}deg`);
    board.style.setProperty("--work-board-ry", `${(renderedX * 6).toFixed(2)}deg`);
    raf = visible ? requestAnimationFrame(render) : 0;
  }

  const ensureRender = () => {
    if (!raf && visible) raf = requestAnimationFrame(render);
  };

  const updateScroll = () => {
    targetScroll = progressWithin(hero);
    ensureRender();
  };

  if (finePointer) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      ensureRender();
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      pointerX = 0;
      pointerY = 0;
      ensureRender();
    });
  }

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) ensureRender();
    else if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }, { rootMargin: "18% 0px 18% 0px" });

  observer.observe(hero);
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

  window.addEventListener("pagehide", () => {
    observer.disconnect();
    window.removeEventListener("scroll", updateScroll);
    window.removeEventListener("resize", updateScroll);
    if (raf) cancelAnimationFrame(raf);
  }, { once: true });
}

function initHeroZoomMotion() {
  const section = document.querySelector("[data-hero-zoom]");
  const shell = section?.querySelector("[data-hero-video]");
  if (!section || !shell || reducedMotion) return;
  if (section.dataset.heroZoomInitialized === "true") return;
  section.dataset.heroZoomInitialized = "true";

  let target = 0;
  let current = 0;
  let raf = 0;

  function baseSize() {
    const vw = window.innerWidth;
    return {
      width: clamp(vw * 0.52, 520, 980),
      height: clamp(vw * 0.42, 330, 560)
    };
  }

  function render() {
    current += (target - current) * 0.095;
    if (Math.abs(target - current) < 0.0006) current = target;

    const pulse = Math.sin(clamp(current, 0, 1) * Math.PI);
    const zoom = easeOut(pulse);
    const safeZoom = clamp(zoom, 0, 1);
    section.style.setProperty("--hero-zoom", safeZoom.toFixed(3));
    section.style.setProperty("--hero-progress", current.toFixed(3));

    if (desktop()) {
      const start = baseSize();
      const width = start.width + (window.innerWidth - start.width) * safeZoom;
      const height = start.height + (window.innerHeight - start.height) * safeZoom;
      const top = 50 - 50 * safeZoom;
      const y = -50 + 50 * safeZoom;
      const radius = 48 + 951 * (1 - safeZoom);
      shell.style.setProperty("--hero-video-width", `${width}px`);
      shell.style.setProperty("--hero-video-height", `${height}px`);
      shell.style.setProperty("--hero-video-top", `${top}%`);
      shell.style.setProperty("--hero-video-y", `${y}%`);
      shell.style.setProperty("--hero-video-radius", `${radius}px`);
    } else {
      shell.style.removeProperty("--hero-video-width");
      shell.style.removeProperty("--hero-video-height");
      shell.style.removeProperty("--hero-video-top");
      shell.style.removeProperty("--hero-video-y");
      shell.style.removeProperty("--hero-video-radius");
    }

    if (current !== target) {
      raf = requestAnimationFrame(render);
    } else {
      raf = 0;
    }
  }

  function update() {
    target = progressWithin(section);
    if (!raf) raf = requestAnimationFrame(render);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initManifesto() {
  const section = document.querySelector(SELECTOR.manifesto);
  if (!section || reducedMotion) return;
  if (section.dataset.manifestoInitialized === "true") return;
  section.dataset.manifestoInitialized = "true";
  const sticky = section.querySelector(".sars-manifesto__sticky");
  const lines = [...section.querySelectorAll(".sars-manifesto__line")];
  if (!sticky || !lines.length) return;

  function update() {
    const progress = progressWithin(section);
    const activeIndex = clamp(Math.floor(progress * lines.length), 0, lines.length - 1);
    lines.forEach((line, index) => line.classList.toggle("is-active", index === activeIndex));
    section.style.setProperty("--manifest-grid", `${progress * -170}px`);
    const isOrange = progress > 0.34 && progress <= 0.66;
    section.classList.toggle("is-orange-bg", isOrange);
    sticky.classList.toggle("is-orange-bg", isOrange);
    section.setAttribute("data-bg-state", isOrange ? "orange" : "light");
    if (progress > 0.66) {
      sticky.style.background = "var(--sars-cream)";
      sticky.style.color = "var(--sars-ink)";
    } else if (progress > 0.34) {
      sticky.style.background = "var(--sars-orange)";
      sticky.style.color = "var(--sars-black)";
    } else {
      sticky.style.background = "var(--sars-white)";
      sticky.style.color = "var(--sars-ink)";
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initObjective() {
  const section = document.querySelector(SELECTOR.objective);
  if (!section || reducedMotion) return;
  if (section.dataset.objectiveInitialized === "true") return;
  section.dataset.objectiveInitialized = "true";
  const words = [...section.querySelectorAll(".sars-objective__word")];
  const progress = section.querySelector(".sars-objective__progress span");

  function update() {
    const amount = progressWithin(section);
    const shift = (1 - amount) * 22;
    words.forEach((word, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      word.style.setProperty("--shift", `${direction * shift}vw`);
    });
    if (progress) progress.style.setProperty("--progress", `${Math.round(amount * 100)}%`);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initHorizontalServices() {
  const section = document.querySelector(SELECTOR.horizontal) || document.querySelector(".sars-services--scroll-showcase");
  if (!section) return;
  if (section.dataset.horizontalInitialized === "true") return;
  section.dataset.horizontalInitialized = "true";
  const track = section.querySelector(".sars-services__track");
  if (!track) return;

  // Restore smooth natural section flow (no scroll-lock / no 360svh sticky pinning)
  section.classList.remove("is-scroll-driven");
  section.classList.add("is-native-scroll");
  track.style.transform = "";

  // Smooth drag-to-scroll interaction on desktop
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener("mousedown", (e) => {
    if (e.target.closest("a, button")) return;
    isDown = true;
    track.classList.add("is-dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("is-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.4;
    track.scrollLeft = scrollLeft - walk;
  });
}

function initStats() {
  const stats = document.querySelectorAll(SELECTOR.stat);
  if (!stats.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.value || 0);
      const startValue = Number(el.dataset.start || 0);
      const suffix = el.dataset.suffix || "";
      if (reducedMotion) {
        el.textContent = `${target}${suffix}`;
        observer.unobserve(el);
        return;
      }
      let start = null;
      function tick(time) {
        if (!start) start = time;
        const progress = clamp((time - start) / 1100, 0, 1);
        const value = startValue + (target - startValue) * easeOut(progress);
        el.textContent = `${Math.round(value)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.35 });
  stats.forEach((stat) => {
    if (stat.dataset.statInitialized === "true") return;
    stat.dataset.statInitialized = "true";
    observer.observe(stat);
  });
}

function initProjectCursor() {
  const cursor = document.querySelector(SELECTOR.cursor);
  const targets = document.querySelectorAll("[data-cursor-label]");
  if (!cursor || !targets.length || !finePointer || reducedMotion) return;

  let visible = false;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;
  cursor.classList.add("is-ready");

  function render() {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${visible ? 1 : 0.45})`;
    cursor.style.opacity = visible ? "1" : "0";
    requestAnimationFrame(render);
  }

  window.addEventListener("pointermove", (event) => {
    tx = event.clientX;
    ty = event.clientY;
  }, { passive: true });

  targets.forEach((target) => {
    target.addEventListener("pointerenter", () => {
      visible = true;
      cursor.textContent = target.dataset.cursorLabel || "View";
    });
    target.addEventListener("pointerleave", () => {
      visible = false;
    });
  });

  render();
}

function initProjectReveal() {
  const cards = document.querySelectorAll(".sars-project-card, .sars-featured-project-card");
  if (!cards.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
  }, { threshold: 0.36 });
  cards.forEach((card) => {
    if (card.dataset.projectRevealInitialized === "true") return;
    card.dataset.projectRevealInitialized = "true";
    observer.observe(card);
  });
}

function initFeaturedCases() {
  document.querySelectorAll(SELECTOR.featuredCases).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const cards = [...section.querySelectorAll("[data-case-card]")];
    const filters = [...section.querySelectorAll("[data-case-filter]")];
    const status = section.querySelector("[data-case-status]");
    const empty = section.querySelector("[data-case-empty]");
    if (!cards.length) return;

    let activeFilter = "all";
    let stackCleanup = null;

    const categoriesFor = (card) => (card.dataset.categories || "").split(/\s+/).filter(Boolean);
    const visibleCards = () => cards.filter((card) => activeFilter === "all" || categoriesFor(card).includes(activeFilter));
    const stickyTop = () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim();
      const parsed = Number.parseFloat(value);
      return (Number.isFinite(parsed) ? parsed : 76) + 24;
    };

    const resetCard = (card) => {
      card.style.setProperty("--stack-scale", "1");
      card.style.setProperty("--stack-y", "0px");
      card.style.setProperty("--stack-opacity", "1");
      card.style.setProperty("--stack-brightness", "1");
      card.style.setProperty("--stack-blur", "0px");
    };

    const updateFilters = () => {
      filters.forEach((button) => {
        const isActive = button.dataset.caseFilter === activeFilter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const createGsapStack = (visible) => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger || !desktop() || reducedMotion) return null;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        visible.forEach(resetCard);
        visible.forEach((card, index) => {
          const nextCard = visible[index + 1];
          if (!nextCard) return;
          gsap.to(card, {
            "--stack-scale": 0.955,
            "--stack-y": "-18px",
            "--stack-opacity": 0.74,
            "--stack-brightness": 0.96,
            "--stack-blur": "1px",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom-=22%",
              end: () => `top top+=${Math.round(stickyTop() + 44)}`,
              scrub: true,
              invalidateOnRefresh: true
            }
          });
        });
        ScrollTrigger.refresh();
      }, section);

      return () => context.revert();
    };

    const createNativeStack = (visible) => {
      if (!desktop() || reducedMotion) {
        visible.forEach(resetCard);
        return null;
      }

      let ticking = false;
      let sectionVisible = true;
      const update = () => {
        ticking = false;
        if (!sectionVisible) return;
        const offset = stickyTop();
        const travel = Math.max(220, window.innerHeight * 0.34);

        visible.forEach((card, index) => {
          const nextCard = visible[index + 1];
          if (!nextCard) {
            resetCard(card);
            return;
          }
          const nextTop = nextCard.getBoundingClientRect().top;
          const progress = clamp((offset + travel - nextTop) / travel, 0, 1);
          card.style.setProperty("--stack-scale", (1 - progress * 0.045).toFixed(3));
          card.style.setProperty("--stack-y", `${Math.round(progress * -18)}px`);
          card.style.setProperty("--stack-opacity", (1 - progress * 0.26).toFixed(3));
          card.style.setProperty("--stack-brightness", (1 - progress * 0.04).toFixed(3));
          card.style.setProperty("--stack-blur", `${(progress * 1.2).toFixed(2)}px`);
        });
      };

      const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      };

      const observer = new IntersectionObserver(([entry]) => {
        sectionVisible = entry.isIntersecting;
        requestUpdate();
      }, { rootMargin: "18% 0px 18% 0px" });

      observer.observe(section);
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
      requestUpdate();

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
        visible.forEach(resetCard);
      };
    };

    const setupStack = (visible) => {
      stackCleanup?.();
      stackCleanup = createGsapStack(visible) || createNativeStack(visible);
    };

    const applyFilter = () => {
      const visible = visibleCards();
      cards.forEach((card) => {
        const isVisible = visible.includes(card);
        card.hidden = !isVisible;
        card.classList.toggle("is-filtered-out", !isVisible);
        card.setAttribute("aria-hidden", String(!isVisible));
        resetCard(card);
      });

      visible.forEach((card, index) => {
        card.style.setProperty("--stack-index", String(index));
        card.style.zIndex = String(index + 1);
      });

      if (empty) empty.hidden = visible.length > 0;
      if (status) {
        const label = visible.length === 1 ? "project" : "projects";
        status.textContent = visible.length
          ? `Showing ${activeFilter === "all" ? "all " : ""}${visible.length} selected ${label}`
          : "No case studies match this filter";
      }

      setupStack(visible);
    };

    if (finePointer && !reducedMotion) {
      section.querySelectorAll(".sars-case-card__visual").forEach((visual) => {
        visual.addEventListener("pointermove", (event) => {
          const rect = visual.getBoundingClientRect();
          const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
          const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
          visual.style.setProperty("--lens-x", `${Math.round(x * 100)}%`);
          visual.style.setProperty("--lens-y", `${Math.round(y * 100)}%`);
          visual.style.setProperty("--lens-shift-x", ((x - 0.5) * 10).toFixed(2));
          visual.style.setProperty("--lens-shift-y", ((y - 0.5) * 10).toFixed(2));
        }, { passive: true });
        visual.addEventListener("pointerleave", () => {
          visual.style.setProperty("--lens-x", "50%");
          visual.style.setProperty("--lens-y", "50%");
          visual.style.setProperty("--lens-shift-x", "0");
          visual.style.setProperty("--lens-shift-y", "0");
        });
      });
    }

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.caseFilter || "all";
        updateFilters();
        applyFilter();
      });
    });

    window.addEventListener("pagehide", () => stackCleanup?.(), { once: true });
    updateFilters();
    applyFilter();
  });
}

function initFeaturedWorkRail() {
  document.querySelectorAll(SELECTOR.featuredWorkRail).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const stack = section.querySelector(".sars-fw__stack");
    const rail = section.querySelector(".sars-fw__rail");
    const track = section.querySelector(".sars-fw__track");
    const items = [...section.querySelectorAll("[data-fw-item]")];
    const filters = [...section.querySelectorAll("[data-fw-filter]")];
    const mediaItems = [...section.querySelectorAll(".sars-fw__media")];
    const status = section.querySelector("[data-fw-status]");
    const empty = section.querySelector("[data-fw-empty]");
    if (!stack || !rail || !track || !items.length) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let sectionVisible = false;
    let frame = 0;
    let travel = 0;
    let activeFilter = "all";

    const visibleItems = () => items.filter((item) => !item.hidden);

    const resetCards = () => {
      items.forEach((item) => {
        const card = item.querySelector(".sars-fw__card");
        if (!card) return;
        card.style.transform = "";
        card.style.opacity = "";
        card.classList.remove("is-centered");
      });
    };

    const updateStatus = () => {
      const visible = visibleItems().length;
      if (empty) empty.hidden = visible > 0;
      if (!status) return;
      if (!visible) {
        status.textContent = "No case studies match this filter";
        return;
      }
      const label = visible === 1 ? "project" : "projects";
      status.textContent = activeFilter === "all"
        ? `Showing all ${visible} selected ${label}`
        : `Showing ${visible} selected ${label}`;
    };

    const updateHorizontal = () => {
      frame = 0;
      if (!sectionVisible || mobileQuery.matches || reducedQuery.matches) return;

      const rect = stack.getBoundingClientRect();
      const maxScroll = Math.max(1, stack.offsetHeight - rail.clientHeight);
      const progress = clamp(-rect.top / maxScroll, 0, 1);
      const x = -travel * progress;
      track.style.transform = `translate3d(${x}px, 0, 0)`;

      const viewportCenter = window.innerWidth / 2;
      visibleItems().forEach((item) => {
        const card = item.querySelector(".sars-fw__card");
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        const normalized = clamp(distance / (window.innerWidth * 0.62), 0, 1);
        const scale = 1 - normalized * 0.075;
        const opacity = 1 - normalized * 0.3;
        const y = normalized * 10;

        card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        card.style.opacity = opacity.toFixed(3);
        card.classList.toggle("is-centered", normalized < 0.18);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateHorizontal);
    };

    const setDimensions = () => {
      if (mobileQuery.matches || reducedQuery.matches) {
        stack.style.minHeight = "";
        track.style.transform = "";
        resetCards();
        return;
      }

      travel = Math.max(0, track.scrollWidth - rail.clientWidth);
      stack.style.minHeight = `${rail.clientHeight + travel + 120}px`;
      requestUpdate();
    };

    const applyFilter = (value, selectedButton) => {
      activeFilter = value || "all";
      filters.forEach((button) => {
        const active = button === selectedButton || button.dataset.fwFilter === activeFilter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      items.forEach((item) => {
        const categories = (item.dataset.categories || "").split(/\s+/).filter(Boolean);
        item.hidden = activeFilter !== "all" && !categories.includes(activeFilter);
      });

      resetCards();
      updateStatus();
      requestAnimationFrame(() => {
        setDimensions();
        if (mobileQuery.matches || reducedQuery.matches) {
          track.scrollTo({ left: 0, behavior: reducedQuery.matches ? "auto" : "smooth" });
        }
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting;
      section.classList.toggle("is-visible", entry.isIntersecting);
      requestUpdate();
    }, { threshold: 0.05 });
    observer.observe(section);

    filters.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.fwFilter || "all", button));
    });

    if (finePointer && !reducedMotion) {
      mediaItems.forEach((media) => {
        const image = media.querySelector("img");
        if (!image) return;

        media.addEventListener("pointermove", (event) => {
          const rect = media.getBoundingClientRect();
          const x = clamp(event.clientX - rect.left, 0, rect.width);
          const y = clamp(event.clientY - rect.top, 0, rect.height);
          const nx = x / rect.width - 0.5;
          const ny = y / rect.height - 0.5;

          media.style.setProperty("--gx", `${x}px`);
          media.style.setProperty("--gy", `${y}px`);
          media.style.setProperty("--bx", `${x}px`);
          media.style.setProperty("--by", `${y}px`);
          image.style.setProperty("--ix", `${nx * 7}px`);
          image.style.setProperty("--iy", `${ny * 7}px`);
          image.style.setProperty("--irx", `${-ny * 2.5}deg`);
          image.style.setProperty("--iry", `${nx * 2.5}deg`);
        }, { passive: true });

        media.addEventListener("pointerleave", () => {
          ["--gx", "--gy", "--bx", "--by"].forEach((name) => media.style.removeProperty(name));
          ["--ix", "--iy", "--irx", "--iry"].forEach((name) => image.style.removeProperty(name));
        });
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", setDimensions);
    document.addEventListener("visibilitychange", requestUpdate);
    mobileQuery.addEventListener?.("change", () => {
      resetCards();
      setDimensions();
    });
    reducedQuery.addEventListener?.("change", () => {
      resetCards();
      setDimensions();
    });

    updateStatus();
    requestAnimationFrame(setDimensions);
  });
}

function initPortfolioRail() {
  document.querySelectorAll(SELECTOR.portfolioRail).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const track = section.querySelector(".sars-portfolio-projects__track");
    const cards = [...section.querySelectorAll(".sars-portfolio-project-card")];
    if (!track || !cards.length) return;

    let raf = 0;

    const setActiveCard = () => {
      const viewportCenter = window.innerWidth / 2;
      let active = cards[0];
      let bestDistance = Infinity;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          active = card;
        }
      });
      cards.forEach((card) => card.classList.toggle("is-active", card === active));
    };

    const update = () => {
      raf = 0;
      if (!desktop() || reducedMotion) {
        track.style.transform = "";
        cards.forEach((card) => card.classList.add("is-active"));
        return;
      }

      const progress = progressWithin(section);
      const maxX = Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.08);
      track.style.transform = `translate3d(${-maxX * progress}px, 0, 0)`;
      setActiveCard();
    };

    const requestUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    track.addEventListener("scroll", setActiveCard, { passive: true });
    requestUpdate();
  });
}

function initPortfolioLogoWall() {
  document.querySelectorAll(SELECTOR.portfolioLogoWall).forEach((wall) => {
    if (wall.dataset.initialized === "true") return;
    wall.dataset.initialized = "true";

    const items = [...wall.querySelectorAll("figure")];
    if (!items.length) return;

    const assignDelays = () => {
      const columns = window.innerWidth <= 760 ? 2 : window.innerWidth <= 1180 ? 4 : 8;
      items.forEach((item, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;
        item.style.setProperty("--logo-delay", `${row * 38 + column * 10}ms`);
      });
    };

    assignDelays();
    window.addEventListener("resize", assignDelays);

    if (reducedMotion) {
      wall.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      wall.classList.add("is-visible");
      observer.disconnect();
    }, { threshold: 0.12 });

    observer.observe(wall);
  });
}

function initPortfolioProcess() {
  document.querySelectorAll(SELECTOR.portfolioProcess).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const steps = [...section.querySelectorAll("[data-portfolio-process-step]")];
    if (!steps.length) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.4;
      const progress = clamp((window.innerHeight * 0.62 - rect.top) / total, 0, 1);
      section.style.setProperty("--portfolio-process-progress", progress.toFixed(3));
      const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      steps.forEach((step, index) => step.classList.toggle("is-active", index <= activeIndex));
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initProjectPopups() {
  const popup = document.querySelector(SELECTOR.projectPopup);
  if (!popup || popup.dataset.initialized === "true") return;
  popup.dataset.initialized = "true";

  const content = popup.querySelector("[data-project-popup-content]");
  const closeControls = popup.querySelectorAll("[data-project-close]");
  const transitionLayer = popup.querySelector(".sars-project-popup__transition");
  const projectMap = new Map(PROJECTS.map((project) => [project.slug, project]));
  let activeProject = null;
  let lastTrigger = null;

  const baseUrl = () => `${window.location.pathname}${window.location.search}`;
  const projectIndex = (slug) => PROJECTS.findIndex((project) => project.slug === slug);
  const linkedSlug = (trigger) => {
    if (trigger.dataset.projectOpen) return trigger.dataset.projectOpen;
    try {
      return new URL(trigger.href, window.location.href).hash.replace("#", "");
    } catch {
      return "";
    }
  };
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  const renderList = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const renderParagraphs = (items) => items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");

  const renderProject = (project) => {
    const index = projectIndex(project.slug);
    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    const website = project.website
      ? `<a class="sars-button sars-button--orange" href="${escapeHtml(project.website)}" target="_blank" rel="noopener noreferrer">Visit Website</a>`
      : "";

    content.innerHTML = `
      <article class="sars-project-popup__article" style="--project-accent:${escapeHtml(project.accent)}">
        <section class="sars-project-popup__hero">
          <div class="sars-project-popup__copy">
            <p class="sars-kicker">Project ${escapeHtml(project.number)} / ${escapeHtml(PROJECTS.length)}</p>
            <h2 id="project-popup-title">${escapeHtml(project.title)}</h2>
            <p class="sars-project-popup__heading">${escapeHtml(project.heading)}</p>
            <div class="sars-project-popup__meta">
              <span>${escapeHtml(project.industry)}</span>
              <span>${escapeHtml(project.services.slice(0, 3).join(" / "))}</span>
            </div>
            <div class="sars-project-popup__actions">
              ${website}
              <a class="sars-button sars-button--ghost-dark" href="/contact/">Start a Similar Project</a>
            </div>
          </div>
          <figure class="sars-project-popup__image">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project showcase" loading="eager" decoding="async">
          </figure>
        </section>

        <section class="sars-project-popup__section sars-project-popup__overview">
          <div>
            <p class="sars-kicker">Overview</p>
            <h3>${escapeHtml(project.cardHeading)}</h3>
          </div>
          <div>${renderParagraphs(project.overview)}</div>
        </section>

        <section class="sars-project-popup__section">
          <div>
            <p class="sars-kicker">Challenge</p>
            <h3>The business context</h3>
          </div>
          <div>${renderParagraphs(project.challenge)}</div>
        </section>

        <section class="sars-project-popup__section">
          <div>
            <p class="sars-kicker">Approach</p>
            <h3>SARS Global's role</h3>
          </div>
          <div>
            <p>${escapeHtml(project.approachIntro)}</p>
            <ul>${renderList(project.approach)}</ul>
          </div>
        </section>

        <section class="sars-project-popup__section sars-project-popup__services">
          <div>
            <p class="sars-kicker">Services Delivered</p>
            <h3>Connected capabilities</h3>
          </div>
          <ul>${renderList(project.services)}</ul>
        </section>

        <section class="sars-project-popup__section">
          <div>
            <p class="sars-kicker">${escapeHtml(project.executionTitle)}</p>
            <h3>Execution details</h3>
          </div>
          <div><ul>${renderList(project.execution)}</ul></div>
        </section>

        <section class="sars-project-popup__section">
          <div>
            <p class="sars-kicker">Outcome</p>
            <h3>Qualitative result</h3>
          </div>
          <div>${renderParagraphs(project.outcome)}</div>
        </section>

        <section class="sars-project-popup__media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} visual detail" loading="lazy" decoding="async">
        </section>

        <section class="sars-project-popup__cta">
          <div>
            <p class="sars-kicker">Start a Project</p>
            <h3>Have a project with similar challenges?</h3>
            <p>SARS Global brings strategy, creativity, design and technology together to create connected digital outcomes.</p>
          </div>
          <div class="sars-project-popup__actions">
            <a class="sars-button sars-button--orange" href="/contact/">Start a Project</a>
            <button class="sars-button sars-button--ghost-dark" type="button" data-project-close>Explore More Work</button>
          </div>
        </section>

        <nav class="sars-project-popup__nav" aria-label="Project navigation">
          <button type="button" data-project-go="${escapeHtml(prev.slug)}">
            <span>Previous</span>
            <strong>${escapeHtml(prev.title)}</strong>
          </button>
          <span>${escapeHtml(project.number)} / ${escapeHtml(String(PROJECTS.length).padStart(2, "0"))}</span>
          <button type="button" data-project-go="${escapeHtml(next.slug)}">
            <span>Next</span>
            <strong>${escapeHtml(next.title)}</strong>
          </button>
        </nav>
      </article>
    `;

    const preload = new Image();
    preload.src = next.image;
  };

  const openProject = (slug, options = {}) => {
    const project = projectMap.get(slug);
    if (!project) return false;
    if (options.trigger) lastTrigger = options.trigger;
    activeProject = project;
    renderProject(project);
    popup.hidden = false;
    requestAnimationFrame(() => {
      popup.classList.add("is-open");
      if (!reducedMotion) transitionLayer?.animate([
        { transform: "translateY(100%)" },
        { transform: "translateY(0)" },
        { transform: "translateY(-100%)" }
      ], { duration: 820, easing: "cubic-bezier(0.19, 1, 0.22, 1)" });
    });
    document.body.classList.add("sars-project-popup-open");
    popup.setAttribute("aria-label", `${project.title} project details`);
    window.setTimeout(() => popup.querySelector("[data-project-close]")?.focus(), reducedMotion ? 0 : 160);
    if (options.push !== false && window.location.hash !== `#${slug}`) {
      window.history.pushState({ sarsProject: slug }, "", `${baseUrl()}#${slug}`);
    }
    return true;
  };

  const closeProject = (options = {}) => {
    if (!activeProject) return;
    activeProject = null;
    popup.classList.remove("is-open");
    document.body.classList.remove("sars-project-popup-open");
    if (options.updateUrl !== false && projectMap.has(window.location.hash.replace("#", ""))) {
      window.history.replaceState({}, "", baseUrl());
    }
    window.setTimeout(() => {
      popup.hidden = true;
      content.innerHTML = "";
      lastTrigger?.focus?.({ preventScroll: true });
    }, reducedMotion ? 0 : 260);
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(SELECTOR.projectOpen);
    if (trigger) {
      const slug = linkedSlug(trigger);
      if (projectMap.has(slug)) {
        event.preventDefault();
        openProject(slug, { trigger });
      }
      return;
    }

    const nextTrigger = event.target.closest("[data-project-go]");
    if (nextTrigger && activeProject) {
      event.preventDefault();
      openProject(nextTrigger.dataset.projectGo, { push: true });
      return;
    }

    if (event.target.closest("[data-project-close]")) {
      event.preventDefault();
      closeProject();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!activeProject) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeProject();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...popup.querySelectorAll(focusableSelector)].filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("popstate", () => {
    const slug = window.location.hash.replace("#", "");
    if (projectMap.has(slug)) openProject(slug, { push: false });
    else closeProject({ updateUrl: false });
  });

  const initialSlug = window.location.hash.replace("#", "");
  if (projectMap.has(initialSlug)) openProject(initialSlug, { push: false });
}

function initProofSlider() {
  document.querySelectorAll(SELECTOR.proof).forEach((slider) => {
    if (slider.dataset.proofInitialized === "true") return;
    slider.dataset.proofInitialized = "true";

    const slides = [...slider.querySelectorAll(".sars-proof__slide")];
    const section = slider.closest(".sars-proof") || slider;
    const next = section.querySelector("[data-proof-next]");
    const prev = section.querySelector("[data-proof-prev]");
    const dots = section.querySelector("[data-proof-dots]");
    if (!slides.length || !dots) return;
    let index = 0;

    dots.replaceChildren();
    slides.forEach((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show testimonial ${dotIndex + 1}`);
      dot.addEventListener("click", () => setSlide(dotIndex));
      dots.append(dot);
    });

    function setSlide(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      [...dots.children].forEach((dot, dotIndex) => {
        dot.setAttribute("aria-current", String(dotIndex === index));
      });
    }

    next?.addEventListener("click", () => setSlide(index + 1));
    prev?.addEventListener("click", () => setSlide(index - 1));
    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") setSlide(index + 1);
      if (event.key === "ArrowLeft") setSlide(index - 1);
    });
    setSlide(0);
  });
}

function initClientLogoCloud() {
  document.querySelectorAll(SELECTOR.clientLogoCloud).forEach((cloud) => {
    if (cloud.dataset.initialized === "true") return;
    cloud.dataset.initialized = "true";

    if (!cloud.querySelector(".sars-client-logo-track") && cloud.dataset.clientLogoSource === "shared") {
      chunkItems(CLIENT_LOGOS, 3).forEach((groupItems, index) => {
        const column = document.createElement("div");
        column.className = "sars-client-logo-column";
        const track = document.createElement("div");
        track.className = "sars-client-logo-track";
        track.style.setProperty("--duration", `${34 + index * 4}s`);
        track.style.setProperty("--delay", `${-8 - index * 4}s`);
        const group = document.createElement("div");
        group.className = "sars-client-logo-group";
        groupItems.forEach((client) => group.append(createLogoCard(client)));
        track.append(group);
        column.append(track);
        cloud.append(column);
      });
    }

    const tracks = [...cloud.querySelectorAll(".sars-client-logo-track")];
    let cloudVisible = true;
    let pointerPaused = false;

    tracks.forEach((track) => {
      if (track.querySelector('.sars-client-logo-group[aria-hidden="true"]')) return;
      const group = track.querySelector(".sars-client-logo-group");
      if (!group) return;
      const clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
      track.append(clone);
    });

    const updateState = () => {
      const shouldPause = reducedMotion || document.hidden || !cloudVisible || pointerPaused;
      cloud.classList.toggle("is-paused", shouldPause);
    };

    cloud.addEventListener("pointerenter", () => {
      pointerPaused = true;
      updateState();
    });
    cloud.addEventListener("pointerleave", () => {
      pointerPaused = false;
      updateState();
    });
    document.addEventListener("visibilitychange", updateState);

    const observer = new IntersectionObserver(([entry]) => {
      cloudVisible = entry.isIntersecting;
      updateState();
    }, { threshold: 0.05 });
    observer.observe(cloud);

    window.addEventListener("pagehide", () => observer.disconnect(), { once: true });
    updateState();
  });
}

function initLogoTestimonials() {
  document.querySelectorAll(SELECTOR.logoTestimonials).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const tracks = [...section.querySelectorAll(".sars-testimonials__track")];
    const cursor = section.querySelector(".sars-testimonials-cursor");
    const cursorDot = cursor?.querySelector(".sars-testimonials-cursor__dot");
    const cursorLogo = cursorDot?.querySelector("img");
    const cursorName = cursor?.querySelector(".sars-testimonials-cursor__name");
    const cursorCompany = cursor?.querySelector(".sars-testimonials-cursor__company");
    const mobile = window.matchMedia("(max-width: 720px)");
    let sectionVisible = true;
    let pointerPaused = false;
    let cursorX = 0;
    let cursorY = 0;
    let renderedX = 0;
    let renderedY = 0;
    let cursorFrame = 0;

    tracks.forEach((track) => {
      if (track.querySelector('.sars-testimonials__group[aria-hidden="true"]')) return;
      const group = track.querySelector(".sars-testimonials__group");
      if (!group) return;
      const clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
      track.append(clone);
    });

    const cards = [...section.querySelectorAll(".sars-testimonial-card, .sars-testimonial-logo-card")];

    const updateState = () => {
      const shouldPause = reducedMotion || mobile.matches || document.hidden || !sectionVisible || pointerPaused;
      section.classList.toggle("is-paused", shouldPause);
    };

    const renderCursor = () => {
      renderedX += (cursorX - renderedX) * 0.18;
      renderedY += (cursorY - renderedY) * 0.18;
      if (cursor) {
        cursor.style.left = `${renderedX + 18}px`;
        cursor.style.top = `${renderedY + 18}px`;
      }
      cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const showCursor = (card) => {
      if (!cursor || !finePointer || reducedMotion) return;
      const name = card.dataset.clientName || "Client";
      const company = card.dataset.clientCompany || "Trusted Client";
      const logo = card.dataset.clientLogo || card.querySelector("img")?.src || "";
      const avatar = card.dataset.clientAvatar || name.charAt(0).toUpperCase();
      if (cursorName) cursorName.textContent = name;
      if (cursorCompany) cursorCompany.textContent = company;
      if (cursorLogo && logo) {
        cursorLogo.src = logo;
        cursorLogo.alt = "";
        cursorLogo.hidden = false;
      } else if (cursorDot && !cursorLogo) {
        cursorDot.textContent = avatar;
      } else if (cursorLogo) {
        cursorLogo.hidden = true;
      }
      cursor.classList.add("is-visible");
    };

    const hideCursor = () => {
      cursor?.classList.remove("is-visible");
    };

    cards.forEach((card) => {
      card.addEventListener("pointerenter", () => {
        pointerPaused = true;
        showCursor(card);
        updateState();
      });
      card.addEventListener("pointerleave", () => {
        pointerPaused = false;
        hideCursor();
        updateState();
      });
    });

    section.addEventListener("pointermove", (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
    }, { passive: true });
    section.addEventListener("pointerleave", hideCursor);
    document.addEventListener("visibilitychange", updateState);
    mobile.addEventListener?.("change", updateState);

    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting;
      if (!sectionVisible) hideCursor();
      updateState();
    }, { threshold: 0.05 });
    observer.observe(section);

    if (cursor && finePointer && !reducedMotion) {
      cursorFrame = window.requestAnimationFrame(renderCursor);
    }

    window.addEventListener("pagehide", () => {
      observer.disconnect();
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
    }, { once: true });

    updateState();
  });
}

function trackAnalyticsEvent(eventName, detail = {}) {
  if (!eventName) return;

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...detail });
  }

  window.dispatchEvent(new CustomEvent("sars:analytics", {
    detail: { event: eventName, ...detail }
  }));
}

function initForms() {
  document.querySelectorAll(SELECTOR.form).forEach((form) => {
    if (form.dataset.formInitialized === "true") return;
    form.dataset.formInitialized = "true";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const honeypot = form.querySelector(".sars-hire-honeypot input, .sars-bpo-page__honeypot input");
      const status = form.querySelector("[data-form-status]");
      if (honeypot?.value.trim()) {
        if (status) {
          status.textContent = "Your request could not be submitted. Please try again.";
          status.style.color = "#5b1009";
        }
        return;
      }
      const fields = [...form.querySelectorAll("[required]")];
      let valid = true;
      let firstInvalid = null;
      fields.forEach((field) => {
        const wrapper = field.closest(".sars-field") || field.closest(".sars-checkbox");
        const isCheckbox = field.type === "checkbox";
        const okay = isCheckbox ? field.checked : field.checkValidity() && field.value.trim().length > 0;
        wrapper?.classList.toggle("is-invalid", !okay);
        field.setAttribute("aria-invalid", String(!okay));
        if (!okay && !firstInvalid) firstInvalid = field;
        if (!okay) valid = false;
      });
      if (!status) return;
      if (!valid) {
        status.textContent = "Please complete the highlighted fields.";
        status.style.color = "#5b1009";
        firstInvalid?.focus();
        return;
      }
      status.textContent = form.hasAttribute("data-hire-form")
        ? "Thanks. Your hiring requirement is ready to send to business@sarsglobal.io."
        : "Thanks. Your project details are ready to send to business@sarsglobal.io.";
      status.style.color = "var(--sars-black)";
      form.reset();
    });
  });
}

function initTalentReportForms() {
  document.querySelectorAll("[data-talent-report-form]").forEach((form) => {
    if (form.dataset.talentReportInitialized === "true") return;
    form.dataset.talentReportInitialized = "true";

    const email = form.querySelector('input[type="email"]');
    const status = form.querySelector("[data-talent-report-status]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!email || !status) return;

      const value = email.value.trim();
      if (!email.checkValidity() || !value) {
        status.textContent = "Enter a valid work email.";
        status.style.color = "#5b1009";
        email.focus();
        return;
      }

      const domain = value.includes("@") ? value.split("@").pop().toLowerCase() : "";
      trackAnalyticsEvent("talent_report_subscribe", { email_domain: domain });
      status.textContent = "Newsletter signup is ready to connect. Please email business@sarsglobal.io to join for now.";
      status.style.color = "var(--sars-black)";
      form.reset();
    });
  });
}

function initHirePage() {
  const hero = document.querySelector(SELECTOR.hireHero);
  const finalCta = document.querySelector(".sars-hire-final-cta");
  const hirePage = document.querySelector(".sars-hire-page");
  if (hirePage?.dataset.hirePageInitialized === "true") return;
  if (hirePage) hirePage.dataset.hirePageInitialized = "true";

  function updateParallax() {
    if (reducedMotion || !desktop()) {
      hero?.style.setProperty("--hire-parallax", "0");
      finalCta?.style.setProperty("--hire-parallax", "0");
      return;
    }
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const amount = clamp((rect.top * -1) / Math.max(window.innerHeight, 1), 0, 1);
      hero.style.setProperty("--hire-parallax", amount.toFixed(3));
    }
    if (finalCta) {
      const rect = finalCta.getBoundingClientRect();
      const amount = clamp((window.innerHeight - rect.top) / Math.max(window.innerHeight + rect.height, 1), 0, 1);
      finalCta.style.setProperty("--hire-parallax", amount.toFixed(3));
    }
  }

  if (hero || finalCta) {
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();
  }

  const talent = document.querySelector("#hire-required-talent");
  const engagement = document.querySelector("#hire-engagement");
  const form = document.querySelector("[data-hire-form]");

  document.querySelectorAll(SELECTOR.hireSelect).forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (trigger.hash === "#hire-enquiry") event.preventDefault();
      const talentValue = trigger.getAttribute("data-hire-select");
      const engagementValue = trigger.getAttribute("data-hire-engagement");
      if (talent && talentValue) {
        talent.value = talentValue;
        talent.closest(".sars-field")?.classList.remove("is-invalid");
        talent.setAttribute("aria-invalid", "false");
      }
      if (engagement && engagementValue) {
        engagement.value = engagementValue;
        engagement.closest(".sars-field")?.classList.remove("is-invalid");
        engagement.setAttribute("aria-invalid", "false");
      }
      form?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => (talentValue ? talent : engagement)?.focus(), reducedMotion ? 0 : 420);
    });
  });

  const capabilitySection = document.querySelector(SELECTOR.hireCapabilities);
  if (capabilitySection) {
    const panels = [...capabilitySection.querySelectorAll(SELECTOR.hireCapability)];
    const visuals = [...capabilitySection.querySelectorAll("[data-hire-visual]")];
    const setActive = (index) => {
      panels.forEach((panel, panelIndex) => panel.classList.toggle("is-active", panelIndex === index));
      visuals.forEach((visual, visualIndex) => visual.classList.toggle("is-active", visualIndex === index));
    };
    if (panels.length) {
      const observer = new IntersectionObserver((entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!active) return;
        setActive(panels.indexOf(active.target));
      }, { threshold: [0.28, 0.5, 0.72], rootMargin: "-20% 0px -32% 0px" });
      panels.forEach((panel) => observer.observe(panel));
      setActive(0);
    }
  }

  const process = document.querySelector(SELECTOR.hireProcess);
  if (process) {
    const steps = [...process.querySelectorAll(".sars-hire-process__steps article")];
    const updateProcess = () => {
      const amount = progressWithin(process);
      process.style.setProperty("--hire-process-progress", `${Math.round(amount * 100)}%`);
      if (!steps.length) return;
      const activeIndex = clamp(Math.floor(amount * steps.length), 0, steps.length - 1);
      steps.forEach((step, index) => step.classList.toggle("is-active", index === activeIndex));
    };
    window.addEventListener("scroll", updateProcess, { passive: true });
    window.addEventListener("resize", updateProcess);
    updateProcess();
  }

  document.querySelectorAll(".sars-hire-faq-list summary").forEach((summary) => {
    summary.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const details = summary.closest("details");
      if (details) details.open = !details.open;
    });
  });
}

function initServiceIndex() {
  document.querySelectorAll(SELECTOR.serviceIndex).forEach((section) => {
    if (section.dataset.serviceIndexInitialized === "true") return;
    section.dataset.serviceIndexInitialized = "true";

    const items = [...section.querySelectorAll("[data-service-item]")];
    const media = section.querySelector("[data-service-media]");
    const caption = section.querySelector("[data-service-caption]");
    if (!items.length) return;

    const setActive = (item) => {
      const title = item.querySelector("strong")?.textContent?.trim() || "Service";
      items.forEach((candidate) => {
        const active = candidate === item;
        candidate.classList.toggle("is-active", active);
        candidate.querySelector(".sars-service-index__trigger")?.setAttribute("aria-expanded", String(active));
      });
      if (!media) return;
      const nextImage = item.dataset.serviceImage;
      if (!nextImage || media.src.endsWith(nextImage)) return;
      const holder = media.closest(".sars-service-index__media");
      holder?.classList.add("is-switching");
      window.setTimeout(() => {
        media.src = nextImage;
        media.alt = `${title} service visual`;
        if (caption) caption.textContent = title;
        holder?.classList.remove("is-switching");
      }, reducedMotion ? 0 : 160);
    };

    items.forEach((item) => {
      const trigger = item.querySelector(".sars-service-index__trigger");
      trigger?.addEventListener("click", () => setActive(item));
      trigger?.addEventListener("focus", () => setActive(item));
      item.addEventListener("pointerenter", () => {
        if (finePointer) setActive(item);
      });
    });

    setActive(items.find((item) => item.classList.contains("is-active")) || items[0]);
  });
}

function initProcessSections() {
  document.querySelectorAll(SELECTOR.processSection).forEach((section) => {
    if (section.dataset.processInitialized === "true") return;
    section.dataset.processInitialized = "true";

    const steps = [...section.querySelectorAll(".sars-process__steps article")];
    if (!steps.length) return;

    function update() {
      const amount = progressWithin(section);
      section.style.setProperty("--process-progress", `${Math.round(amount * 100)}%`);
      const activeIndex = clamp(Math.floor(amount * steps.length), 0, steps.length - 1);
      steps.forEach((step, index) => step.classList.toggle("is-active", index === activeIndex));
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initLogoPills() {
  document.querySelectorAll(SELECTOR.logoPills).forEach((section) => {
    if (section.dataset.initialized === "true") return;
    section.dataset.initialized = "true";

    const stage = section.querySelector("[data-logo-pills-stage]");
    const mobile = section.querySelector("[data-logo-pills-mobile]");
    const tooltip = section.querySelector("[data-logo-tooltip]");
    const isToolSection = section.dataset.logoPillsSource === "tools";
    const logoItems = isToolSection ? TOOL_STACK : CLIENT_LOGOS;
    const tooltipFallback = isToolSection ? "Tool" : "Client";
    const positions = [
      [1, 0, -4], [11, 9, 3], [24, 0, -1], [37, 11, 5], [52, 1, -3],
      [67, 10, 4], [80, 0, -5], [6, 23, 5], [20, 32, -2], [34, 23, 4],
      [49, 34, -4], [63, 24, 2], [76, 34, -3], [13, 48, -5], [29, 54, 3],
      [44, 49, -2], [59, 56, 5], [73, 50, -4], [4, 66, 2], [18, 75, -3],
      [32, 66, 5], [48, 76, -4], [64, 67, 2], [78, 78, -2], [41, 89, 4]
    ];

    const attachTooltip = (pill) => {
      const show = () => tooltip?.classList.add("is-visible");
      const hide = () => tooltip?.classList.remove("is-visible");
      pill.addEventListener("pointerenter", () => {
        if (!tooltip || !finePointer) return;
        tooltip.textContent = pill.dataset.logoName || tooltipFallback;
        show();
      });
      pill.addEventListener("pointerleave", hide);
      pill.addEventListener("focus", () => {
        if (!tooltip || !finePointer) return;
        tooltip.textContent = pill.dataset.logoName || tooltipFallback;
        show();
      });
      pill.addEventListener("blur", hide);
    };

    logoItems.forEach((client, index) => {
      const pill = createLogoPill(client, index);
      const [x, y, rotate] = positions[index % positions.length];
      pill.style.setProperty("--pill-x", `${x}%`);
      pill.style.setProperty("--pill-y", `${y}%`);
      pill.style.setProperty("--pill-r", `${rotate}deg`);
      attachTooltip(pill);
      stage?.append(pill);
    });

    if (mobile) {
      [logoItems.filter((_, index) => index % 2 === 0), logoItems.filter((_, index) => index % 2 === 1)].forEach((items, rowIndex) => {
        const row = document.createElement("div");
        row.className = "sars-logo-pills__row";
        row.style.setProperty("--row-direction", rowIndex === 0 ? "normal" : "reverse");
        items.forEach((client, index) => row.append(createLogoPill(client, index + rowIndex)));
        mobile.append(row);
      });
    }

    section.addEventListener("pointermove", (event) => {
      if (!tooltip || !finePointer) return;
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY}px`;
    }, { passive: true });

    let sectionVisible = false;
    const updateMotionState = () => {
      section.classList.toggle("is-paused", reducedMotion || document.hidden || !sectionVisible);
    };

    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting;
      if (sectionVisible) section.classList.add("is-visible");
      updateMotionState();
    }, { threshold: 0.25 });
    observer.observe(section);
    document.addEventListener("visibilitychange", updateMotionState);
    window.addEventListener("pagehide", () => observer.disconnect(), { once: true });
    updateMotionState();
  });
}

function initPositioning() {
  document.querySelectorAll(SELECTOR.positioning).forEach((section) => {
    if (section.dataset.positioningInitialized === "true") return;
    section.dataset.positioningInitialized = "true";

    const lines = [...section.querySelectorAll(".sars-positioning__lines p")];
    if (!lines.length || reducedMotion) return;

    function update() {
      const amount = progressWithin(section);
      const activeIndex = clamp(Math.floor(amount * lines.length), 0, lines.length - 1);
      lines.forEach((line, index) => line.classList.toggle("is-active", index === activeIndex));
      const orange = Math.sin(amount * Math.PI);
      section.style.background = `color-mix(in srgb, var(--sars-black) ${Math.round(100 - orange * 12)}%, var(--sars-orange))`;
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initIndustries() {
  document.querySelectorAll(SELECTOR.industries).forEach((section) => {
    if (section.dataset.industriesInitialized === "true") return;
    section.dataset.industriesInitialized = "true";

    const buttons = [...section.querySelectorAll(".sars-industries__list button")];
    const media = section.querySelector("[data-industry-media]");
    if (!buttons.length || !media) return;

    buttons.forEach((button) => {
      const image = button.dataset.image;
      if (!image || button.querySelector("img")) return;
      const logo = document.createElement("img");
      logo.src = image;
      logo.alt = "";
      logo.loading = "lazy";
      logo.decoding = "async";
      button.prepend(logo);
    });

    const setActive = (button) => {
      buttons.forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      const next = button.dataset.image;
      if (!next || media.src.endsWith(next)) return;
      const holder = media.closest(".sars-industries__media");
      holder?.classList.add("is-switching");
      window.setTimeout(() => {
        media.src = next;
        media.alt = `${button.textContent.trim()} related project logo`;
        holder?.classList.remove("is-switching");
      }, reducedMotion ? 0 : 140);
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => setActive(button));
      button.addEventListener("focus", () => setActive(button));
      button.addEventListener("pointerenter", () => {
        if (finePointer) setActive(button);
      });
    });

    setActive(buttons.find((button) => button.classList.contains("is-active")) || buttons[0]);
  });
}

function initTiltVisuals() {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(SELECTOR.tiltVisual).forEach((visual) => {
    visual.addEventListener("pointermove", (event) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty("--tilt-x", `${x * 18}px`);
      visual.style.setProperty("--tilt-y", `${y * 14}px`);
    }, { passive: true });
    visual.addEventListener("pointerleave", () => {
      visual.style.setProperty("--tilt-x", "0px");
      visual.style.setProperty("--tilt-y", "0px");
    });
  });
}

function initScrollMarquees() {
  document.querySelectorAll(SELECTOR.scrollMarquee).forEach((section) => {
    if (section.dataset.scrollMarqueeInitialized === "true") return;
    section.dataset.scrollMarqueeInitialized = "true";

    if (reducedMotion) return;
    let sectionVisible = true;
    const updateMotionState = () => {
      section.classList.toggle("is-paused", document.hidden || !sectionVisible);
    };
    function update() {
      const amount = progressWithin(section);
      const speed = 1.2 - Math.sin(amount * Math.PI) * 0.28;
      section.style.setProperty("--marquee-speed", speed.toFixed(2));
    }
    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting;
      updateMotionState();
    }, { threshold: 0.05 });
    observer.observe(section);
    document.addEventListener("visibilitychange", updateMotionState);
    window.addEventListener("pagehide", () => observer.disconnect(), { once: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    updateMotionState();
  });
}

function initTransitions() {
  const layer = document.querySelector(".sars-transition");
  if (!layer || reducedMotion) return;
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented) return;
    const url = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    if (url.origin !== current.origin || link.hash || link.target || link.hasAttribute("download")) return;
    event.preventDefault();
    layer.animate([
      { transform: "translateY(100%)" },
      { transform: "translateY(0)" }
    ], { duration: 360, easing: "cubic-bezier(0.19, 1, 0.22, 1)", fill: "forwards" }).finished
      .then(() => { window.location.href = link.href; });
  });
}

function initBackToTop() {
  document.querySelectorAll("[data-back-top]").forEach((button) => {
    if (button.dataset.backTopInitialized === "true") return;
    button.dataset.backTopInitialized = "true";

    const update = () => {
      button.classList.toggle("is-visible", window.scrollY > 520);
    };

    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initYears() {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initOrbitPlacement() {
  document.querySelectorAll(".sars-logo-node").forEach((node) => {
    const angle = Number(node.dataset.angle || 0);
    const radius = node.dataset.radius || "42%";
    node.style.setProperty("--angle", String(angle));
    node.style.setProperty("--radius", radius);
  });
}

function refreshPageSections() {
  initReveals();
  initHeroParallax();
  initWorkHeroMotion();
  initHeroZoomMotion();
  initManifesto();
  initObjective();
  initHorizontalServices();
  initStats();
  initProjectReveal();
  initFeaturedWorkRail();
  initPortfolioRail();
  initPortfolioLogoWall();
  initPortfolioProcess();
  initFeaturedCases();
  initProjectPopups();
  initProofSlider();
  initClientLogoCloud();
  initLogoTestimonials();
  initForms();
  initTalentReportForms();
  initHirePage();
  initServiceIndex();
  initProcessSections();
  initLogoPills();
  initPositioning();
  initIndustries();
  initScrollMarquees();
  initBackToTop();
  initYears();
  initOrbitPlacement();
}

function boot() {
  document.documentElement.classList.toggle("reduced-motion", reducedMotion);
  initPreloader();
  initNavigation();
  initMagneticButtons();
  initHeroParallax();
  initWorkHeroMotion();
  initHeroZoomMotion();
  initManifesto();
  initObjective();
  initProjectCursor();
  initProofSlider();
  initTiltVisuals();
  initTransitions();
  refreshPageSections();
}

window.SARSRefresh = refreshPageSections;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

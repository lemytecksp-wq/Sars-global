import { ServiceData } from "./types";

export const STANDALONE_SERVICES: Record<string, ServiceData> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    route: "/ui-ux-design",
    title: "UI/UX Design Services | Product Design, Wireframes & Design Systems | SARS Global",
    eyebrow: "Product & Experience Design",
    metaDescription: "Elevate your digital brand with SARS Global's UI/UX design services: user research, high-fidelity Figma prototypes, design systems, and conversion-focused interfaces.",
    heroHeadline: "Product Design That Bridges User Empathy and Commercial Results",
    heroSubheadline: "We design clean, intuitive, and visually arresting digital products. From user research and journey mapping to design systems and production Figma prototypes, we make complex software simple.",
    badges: ["Figma Design Systems", "User Research & Journey Mapping", "Interactive Prototyping", "Mobile & Web App UX", "Micro-Interactions & Motion", "WCAG 2.1 AA Accessibility"],
    challenge: {
      title: "Why Bad UX Destroys Good Technology",
      description: "Even the most powerful backend software will fail if users cannot effortlessly navigate it. Cluttered screens, confusing workflows, and inconsistent visual cues frustrate prospects and drive customers straight to your competitors.",
      points: [
        "Complex onboarding flows leading to immediate drop-off and user churn",
        "Visual design inconsistency across web, mobile, and marketing collateral",
        "Lack of user testing leading to features being built that nobody actually wants",
        "Design assets handed off to engineering without responsive specs or design tokens",
      ],
    },
    solutions: [
      {
        title: "User Research & Interaction Architecture",
        desc: "In-depth user interviews, persona creation, and user flow mapping to ensure every screen serves a direct, friction-free purpose.",
        deliverables: ["User persona & scenario documentation", "Interactive user journey maps", "Low-fidelity structural wireframes", "Information architecture diagrams"],
      },
      {
        title: "High-Fidelity UI & Visual Craft",
        desc: "Bespoke digital interface aesthetics crafted in Figma, emphasizing typography hierarchy, balanced negative space, and refined color palettes.",
        deliverables: ["Desktop, tablet & mobile screen layouts", "Pixel-perfect visual design assets", "Custom vector iconography & illustrations", "Interactive clickable Figma prototypes"],
      },
      {
        title: "Scalable Design Systems & Tokens",
        desc: "Modular design systems with standardized components, variants, auto-layouts, and design tokens that synchronize effortlessly with code.",
        deliverables: ["Comprehensive Figma component library", "Color, typography & spacing tokens", "Component state definitions (hover, active, focus, disabled)", "Engineering handoff documentation"],
      },
      {
        title: "Usability Testing & Conversion Optimization",
        desc: "Rigorous testing with real users to identify cognitive friction points and optimize key conversion flows before development.",
        deliverables: ["Moderated user testing sessions", "Friction point & heat-mapping analysis", "A/B test concept variations", "Design recommendation reports"],
      },
    ],
    process: [
      { step: "01", title: "Discovery & User Empathy", desc: "We study your target users, audit existing UX bottlenecks, and define the core problem statements." },
      { step: "02", title: "Wireframing & Information Flow", desc: "We map user journeys into structural wireframes to validate layout logic before aesthetic decisions." },
      { step: "03", title: "Visual Design & Interactive Prototyping", desc: "We apply typography, color, and visual hierarchy in Figma, building clickable prototypes for stakeholder review." },
      { step: "04", title: "Developer Handoff & QA Review", desc: "We prepare precise component tokens, inspect CSS properties, and conduct design reviews during frontend development." },
    ],
    techStack: ["Figma", "FigJam", "Adobe Creative Cloud", "Storybook", "Miro", "Lottie / After Effects"],
    caseStudies: [
      { name: "Cavalo", category: "Automotive UI", summary: "Designed modern, high-contrast vehicle showcase interfaces and mobile inquiry workflows.", route: "/work/#cavalo" },
      { name: "BenchKart", category: "B2B SaaS Portal", summary: "Redesigned enterprise RFP procurement interface, simplifying vendor evaluation workflows.", route: "/work/#benchkart" },
      { name: "Cloudnine KnowMoms", category: "Healthcare Community", summary: "Designed accessible, warm, and trustworthy mobile community experience for maternal healthcare.", route: "/work/#cloudnine" },
    ],
    faqs: [
      { question: "What deliverables do we receive at the end of a design project?", answer: "You receive organized Figma files containing high-fidelity screen designs across all breakpoints, clickable interactive prototypes, exported vector assets, a comprehensive design system library, and complete developer handoff specs." },
      { question: "How do you ensure developers build the design accurately?", answer: "We build using auto-layout, standard 8px grid spacing, and design tokens mapped directly to CSS variables and Tailwind classes. Our designers conduct visual QA sessions during development to ensure pixel-perfect fidelity." },
      { question: "Can you redesign our existing application without rebuilding the backend?", answer: "Yes. We frequently conduct UI/UX redesigns that preserve your existing backend databases and APIs while completely transforming the frontend user experience." },
    ],
  },
  "technology-consulting": {
    slug: "technology-consulting",
    route: "/technology-consulting",
    title: "Technology Consulting Services | Architecture, Cloud & Digital Strategy | SARS Global",
    eyebrow: "Strategic Advisory & Technical Leadership",
    metaDescription: "Make high-confidence technology decisions with SARS Global's technology consulting: IT architecture audits, cloud migration, cybersecurity, and fractional CTO advisory.",
    heroHeadline: "Strategic Technology Consulting for Modern Enterprise Growth",
    heroSubheadline: "We advise executives, founders, and IT leaders on software architecture, cloud infrastructure, AI adoption, and digital transformation to eliminate technical debt and accelerate delivery.",
    badges: ["Fractional CTO Advisory", "Cloud Infrastructure & Migration", "Software Architecture Audits", "AI Readiness & Governance", "Cybersecurity & Compliance", "Vendor & Tool Evaluation"],
    challenge: {
      title: "The Danger of Misguided Technology Decisions",
      description: "Choosing the wrong tech stack, migrating to the wrong cloud provider, or accumulating uncontrolled technical debt costs companies millions in re-writes and lost momentum. Strategic technology leadership ensures your tech investments actively generate commercial returns.",
      points: [
        "Ballooning cloud infrastructure bills without corresponding business expansion",
        "Legacy software systems blocking new feature releases and integrations",
        "Unclear AI adoption roadmap leading to expensive failed experiments",
        "Lack of senior technical leadership to evaluate engineering teams and vendor proposals",
      ],
    },
    solutions: [
      {
        title: "Enterprise Architecture & Tech Audits",
        desc: "Comprehensive evaluation of your codebase, database topology, cloud architecture, and security posture with an actionable remediation roadmap.",
        deliverables: ["Full-stack code and dependency audit", "Database scalability & latency review", "Security vulnerability & compliance scan", "Prioritized technical debt remediation plan"],
      },
      {
        title: "Fractional CTO & Strategic Advisory",
        desc: "Executive-level technical leadership for growth-stage companies needing high-level architecture decisions, vendor evaluation, and team guidance.",
        deliverables: ["Bi-weekly executive technical strategy sessions", "Vendor & third-party RFP evaluation", "Engineering hiring & team structure guidance", "Technology roadmap & budget allocation"],
      },
      {
        title: "Cloud Migration & Cost Optimization (FinOps)",
        desc: "Migrate legacy infrastructure to modern AWS, GCP, or Azure cloud environments while slashing wasteful cloud compute and storage costs.",
        deliverables: ["Zero-downtime cloud migration strategy", "Serverless & containerized cost modeling", "Cloud spend optimization & right-sizing", "Disaster recovery & backup protocols"],
      },
      {
        title: "AI Strategy & Implementation Governance",
        desc: "Develop a realistic, high-ROI artificial intelligence roadmap tailored to your proprietary data assets and compliance requirements.",
        deliverables: ["Data readiness & pipeline assessment", "Use-case ROI prioritization matrix", "Data privacy & IP security framework", "Vendor model selection (OpenAI vs. Open Source)"],
      },
    ],
    process: [
      { step: "01", title: "Discovery & Infrastructure Review", desc: "We review your existing systems, repositories, cloud bills, team processes, and business goals." },
      { step: "02", title: "Diagnostic Audit & Gap Analysis", desc: "We identify critical architectural vulnerabilities, scalability bottlenecks, and cost inefficiencies." },
      { step: "03", title: "Strategic Roadmap Formulation", desc: "We deliver an executive presentation and technical specification detailing immediate and long-term milestones." },
      { step: "04", title: "Execution Oversight & Mentorship", desc: "We guide your internal engineering team or trusted vendors through implementation to guarantee flawless delivery." },
    ],
    techStack: ["AWS", "Google Cloud Platform (GCP)", "Microsoft Azure", "Kubernetes", "Terraform", "Docker", "PostgreSQL", "Datadog"],
    caseStudies: [
      { name: "StarAgri", category: "Enterprise Supply Chain", summary: "Advised on enterprise cloud architecture modernization and real-time field data synchronization.", route: "/work/#staragri" },
      { name: "BenchKart", category: "Digital Marketplace", summary: "Provided technical architecture oversight and escrow payment workflow consulting.", route: "/work/#benchkart" },
    ],
    faqs: [
      { question: "How does fractional CTO consulting work?", answer: "A fractional CTO provides senior technology executive leadership on a part-time or retainer basis. You get the strategic guidance, architectural oversight, and vendor negotiation power of an experienced CTO without the full-time executive salary overhead." },
      { question: "How quickly can you audit our current technology infrastructure?", answer: "A standard comprehensive architectural and security audit typically takes 2 to 3 weeks, concluding with an executive findings presentation and prioritized remediation roadmap." },
      { question: "Can you help our business adopt AI practically without wasting money?", answer: "Yes. We focus strictly on high-ROI AI use cases with measurable payback windows—such as automating repetitive document workflows or deploying customer support assistants—while safeguarding your intellectual property." },
    ],
  },
};

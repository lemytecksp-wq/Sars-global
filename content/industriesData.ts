export interface IndustryData {
  slug: string;
  route: string;
  name: string;
  eyebrow: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badges: string[];
  challenges: {
    title: string;
    description: string;
    points: string[];
  };
  solutions: Array<{
    title: string;
    desc: string;
    deliverables: string[];
  }>;
  caseStudies: Array<{
    name: string;
    category: string;
    summary: string;
    route: string;
  }>;
  servicesProvided: Array<{
    title: string;
    route: string;
    desc: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const INDUSTRIES_DATA: Record<string, IndustryData> = {
  "hub": {
    slug: "industries",
    route: "/industries",
    name: "Industries We Serve",
    eyebrow: "Sector-Specific Engineering & Growth",
    title: "Industries We Serve | Enterprise Tech, BPO & Growth | SARS Global",
    metaDescription: "Explore SARS Global's specialized solutions for automotive, healthcare, real estate, B2B SaaS, education, and agritech sectors with verified case studies.",
    heroHeadline: "Specialized Digital Solutions Tailored to Your Industry Dynamics",
    heroSubheadline: "We combine deep vertical domain expertise with modern software engineering, AI automation, full-funnel digital marketing, and dedicated BPO operations to solve industry-specific hurdles.",
    badges: [
      "Automotive & Commercial Vehicles",
      "Healthcare & Wellness",
      "Real Estate & Construction",
      "B2B SaaS & Cloud Platforms",
      "B2B Lead Generation & Pipeline",
      "Education & EdTech",
      "Agritech & Warehousing",
    ],
    challenges: {
      title: "Why Generic Agency Playbooks Fail Across Verticals",
      description: "A digital strategy that works for a consumer fashion brand will fail catastrophically in commercial automotive sales or healthcare compliance. Deep regulatory knowledge, long buying cycles, and sector nuances require tailored execution.",
      points: [
        "Complex procurement journeys involving multiple corporate decision-makers",
        "Strict regulatory frameworks and data privacy standards (HIPAA, ISO, GDPR)",
        "Disconnected field operations and regional dealer/broker networks",
        "Difficulty translating high-ticket offline sales dynamics into digital funnels",
      ],
    },
    solutions: [
      {
        title: "Commercial Automotive & Mobility",
        desc: "End-to-end dealer network acceleration, vehicle specification configurators, digital inquiry qualification, and lead generation.",
        deliverables: ["Fleet buyer acquisition campaigns", "Interactive vehicle catalog interfaces", "Automated WhatsApp dealer routing", "Commercial brand video production"],
      },
      {
        title: "Healthcare & Patient Wellness",
        desc: "Empathetic, HIPAA-compliant patient engagement, maternal wellness platforms, appointment booking bots, and medical content marketing.",
        deliverables: ["Verified medical editorial content", "Patient appointment automation", "Support community moderation", "Healthcare local SEO & reputation"],
      },
      {
        title: "Real Estate & Construction",
        desc: "High-ticket buyer acquisition, 3D project showcases, virtual site walk-throughs, and automated lead nurturing for luxury builders.",
        deliverables: ["Hyper-local property search ads", "Lead qualification call centers", "Interactive project landing pages", "Automated broker lead distribution"],
      },
      {
        title: "B2B SaaS & Tech Marketplaces",
        desc: "Demand generation, product UI/UX design, custom multi-tenant platform architecture, and outsourced SDR pipeline development.",
        deliverables: ["Enterprise RFP matching engines", "Product UI/UX design systems", "Outbound B2B appointment setting", "Technical documentation & APIs"],
      },
      {
        title: "Education & EdTech",
        desc: "Student enrollment funnels, interactive curriculum portals, educational video content, and multi-channel admissions nurture workflows.",
        deliverables: ["Interactive learning dashboards", "Student lead generation campaigns", "Admissions qualification support", "Educational content marketing"],
      },
      {
        title: "Agritech & Warehousing Supply Chain",
        desc: "Mobile field data collection, warehouse collateral inspection software, real-time inventory dashboards, and rural lead outreach.",
        deliverables: ["Warehouse intake data platforms", "Offline-first mobile field tools", "Supply chain data synchronization", "Agricultural buyer outreach"],
      },
    ],
    caseStudies: [
      { name: "Cavalo", category: "Commercial Automotive", summary: "Scaled digital inquiry acquisition and built an interactive vehicle showcase portal.", route: "/work/#cavalo" },
      { name: "Cloudnine KnowMoms", category: "Healthcare", summary: "Built and moderated a maternal wellness content community reaching thousands of families.", route: "/work/#cloudnine" },
      { name: "BenchKart", category: "B2B Tech Marketplace", summary: "Architected multi-sided marketplace platform matching corporate buyers with verified vendors.", route: "/work/#benchkart" },
      { name: "StarAgri", category: "Agritech Logistics", summary: "Engineered real-time warehouse data inspection and collateral management platforms.", route: "/work/#staragri" },
      { name: "Sri Khelari Builders", category: "Real Estate", summary: "Generated high-net-worth investor inquiries through hyper-local targeted search and social campaigns.", route: "/work/#sri-khelari-builders" },
      { name: "Light Financial Education", category: "Education", summary: "Developed accessible, friendly financial literacy curriculum guides and digital learning portals.", route: "/work/#light-financial-education" },
    ],
    servicesProvided: [
      { title: "Digital Marketing", route: "/digital-marketing", desc: "Full-funnel SEO, Google Ads, and performance media tailored to vertical buyer journeys." },
      { title: "AI & Automation", route: "/ai-automation", desc: "Autonomous AI agents and workflow automations streamlining vertical operations." },
      { title: "Software Development", route: "/software-development", desc: "Scalable web applications and custom software platforms engineered for industry data models." },
      { title: "BPO Services", route: "/bpo-services", desc: "Dedicated omnichannel customer support and sales development teams." },
    ],
    faqs: [
      { question: "How does SARS Global adapt its solutions to different industries?", answer: "We assign dedicated industry practice squads who understand your sector's regulatory standards, typical sales cycle length, buyer personas, and technology ecosystem. We tailor every software feature, ad hook, and support script to your specific market." },
      { question: "Do you have verified client references in these sectors?", answer: "Yes. Our portfolio features real enterprise case studies across commercial automotive (Cavalo), healthcare (Cloudnine KnowMoms), B2B marketplaces (BenchKart), agritech logistics (StarAgri), real estate (Sri Khelari Builders), and education (Light Financial Education)." },
      { question: "Can you help our company enter new regional or international markets?", answer: "Yes. We support companies expanding domestically across India as well as scaling into the US, UK, Middle East, and APAC with localized digital marketing, multi-language websites, and follow-the-sun BPO support." },
    ],
  },
  "automotive": {
    slug: "automotive",
    route: "/industries/automotive",
    name: "Automotive & Commercial Vehicles",
    eyebrow: "Automotive Growth & Engineering",
    title: "Automotive Industry Digital Solutions | Fleet Sales & Dealership Tech | SARS Global",
    metaDescription: "Accelerate vehicle sales and dealer network efficiency with SARS Global: custom automotive web portals, fleet buyer lead gen, and 24/7 inquiry qualification.",
    heroHeadline: "Digital Solutions Engineered for Automotive & Commercial Mobility",
    heroSubheadline: "From commercial fleet buyer acquisition to interactive vehicle showcases and automated dealership lead routing, we help automotive manufacturers and dealers accelerate sales.",
    badges: ["Commercial Fleet Lead Generation", "Interactive Vehicle Showcases", "Dealer Network Lead Routing", "WhatsApp Test-Drive Booking", "High-Impact Video Production", "24/7 Automotive BPO Inquiries"],
    challenges: {
      title: "Unique Bottlenecks in Modern Automotive Sales",
      description: "Commercial vehicle and automotive buying journeys have shifted online. Fleet managers and private buyers research specifications, financing options, and total cost of ownership (TCO) digitally before ever setting foot in a physical dealership.",
      points: [
        "Dealership sales reps taking too long to respond to high-intent web inquiries",
        "Disjointed lead tracking between central manufacturer marketing and local dealers",
        "Static PDF brochures failing to engage mobile vehicle buyers",
        "Rising cost-per-lead across standard Google Ads and Facebook automotive campaigns",
      ],
    },
    solutions: [
      {
        title: "Fleet Buyer Acquisition & Search Intent",
        desc: "Surgical Google Search, YouTube, and Meta campaigns targeting commercial logistics operators, business owners, and fleet procurement managers.",
        deliverables: ["Exact commercial vehicle keyword targeting", "Total Cost of Ownership (TCO) calculator funnels", "High-contrast vehicle showcase video ads", "Territory-based geo-fenced ad campaigns"],
      },
      {
        title: "Interactive Web Showcases & Spec Portals",
        desc: "Modern, sub-second web platforms showcasing vehicle specifications, payload capacities, 360-degree exterior views, and comparison tools.",
        deliverables: ["Mobile-first vehicle catalog architectures", "Payload and dimension comparison tables", "Downloadable spec sheet lead captures", "Sub-second image and video loading"],
      },
      {
        title: "Automated Dealer Lead Routing & Speed-to-Lead",
        desc: "Instantly route buyer inquiries to the nearest regional dealer via WhatsApp and SMS with automated follow-up scheduling.",
        deliverables: ["WhatsApp Cloud API test-drive scheduler", "CRM integration with dealership management systems (DMS)", "Sub-3-minute call-back notification alerts", "Lost lead re-engagement cadences"],
      },
      {
        title: "Dedicated Automotive Inbound BPO",
        desc: "Trained automotive customer care specialists handling inbound calls, test-drive coordination, and service appointment triage 24/7.",
        deliverables: ["24/7 inbound phone and chat coverage", "Pre-qualification of commercial credit readiness", "Direct appointment insertion into dealer calendars", "Post-service satisfaction survey calls"],
      },
    ],
    caseStudies: [
      { name: "Cavalo", category: "Commercial Vehicles", summary: "Scaled national inquiry volume and built an interactive vehicle showcase portal with automated WhatsApp dealer dispatch.", route: "/work/#cavalo" },
      { name: "Swaraj", category: "Tractor & Agriculture Mobility", summary: "Developed targeted regional digital campaigns connecting farmers and commercial operators with local dealerships.", route: "/work" },
      { name: "Euler Motors", category: "Commercial Electric Vehicles", summary: "Executed high-impact commercial EV fleet lead generation and TCO comparison messaging.", route: "/work" },
    ],
    servicesProvided: [
      { title: "Performance Marketing", route: "/digital-marketing/performance-marketing", desc: "Targeted paid campaigns generating qualified commercial vehicle buyers." },
      { title: "Web Development", route: "/software-development/web-development", desc: "Interactive, fast-loading vehicle showcase websites and configurators." },
      { title: "CRM Automation", route: "/ai-automation/crm-automation", desc: "Automated lead distribution between OEM headquarters and local dealers." },
      { title: "Customer Support Outsourcing", route: "/bpo-services/customer-support-outsourcing", desc: "24/7 inquiry qualification and test-drive booking teams." },
    ],
    faqs: [
      { question: "How do you ensure leads reach the correct local dealership?", answer: "We build automated geo-routing logic based on the buyer's PIN code or GPS location, instantly sending the lead's contact information and vehicle interest to the designated regional dealer manager via WhatsApp, SMS, and CRM." },
      { question: "Do you have experience with commercial fleet marketing?", answer: "Yes. We have worked extensively with commercial vehicle brands like Cavalo and Euler Motors, creating messaging centered around payload efficiency, financing options, and lower operating costs." },
      { question: "Can you create video content of our vehicles in action?", answer: "Yes. Our creative team produces high-definition promotional videos, feature walkthroughs, and customer testimonial reels designed specifically for social media and YouTube action ads." },
    ],
  },
  "healthcare": {
    slug: "healthcare",
    route: "/industries/healthcare",
    name: "Healthcare & Patient Wellness",
    eyebrow: "Healthcare Technology & Patient Care",
    metaDescription: "Build patient trust and streamline healthcare operations with SARS Global: medical content marketing, HIPAA-compliant patient booking, and compassionate support teams.",
    title: "Healthcare Digital Marketing & Technology Solutions | SARS Global",
    heroHeadline: "Empathetic Healthcare Marketing and Compliant Digital Systems",
    heroSubheadline: "We help hospitals, medical clinics, and digital health platforms build patient trust, educate communities, and automate appointment scheduling with strict compliance.",
    badges: ["Patient Education & Editorial", "HIPAA/Data Privacy Compliant", "24/7 Inbound Patient Care BPO", "Medical SEO & Local Map Pack", "Appointment Scheduling Automation", "Community Moderation"],
    challenges: {
      title: "The Sensitivity of Healthcare Digital Engagement",
      description: "Healthcare is built entirely on trust and medical authority. Inaccurate information, aggressive sales tactics, or careless data handling destroy provider reputation and violate strict healthcare compliance regulations.",
      points: [
        "Google's strict 'Your Money or Your Life' (YMYL) search guidelines demanding verified medical authority",
        "Patients feeling overwhelmed by clinical jargon and seeking empathetic, clear guidance",
        "High rates of missed appointments and phone tag during clinic scheduling hours",
        "Managing sensitive patient inquiries with strict privacy and confidentiality protocols",
      ],
    },
    solutions: [
      {
        title: "Authoritative Medical Content Marketing",
        desc: "Medically reviewed articles, patient guides, and wellness carousels authored to satisfy Google's EEAT and YMYL guidelines.",
        deliverables: ["Physician-reviewed editorial articles", "Preventative care guides & checklists", "Maternal wellness and pediatric educational series", "Schema.org MedicalWebPage markup"],
      },
      {
        title: "Automated Appointment Scheduling & Reminders",
        desc: "Intelligent web and WhatsApp appointment booking integrations that reduce clinic front-desk call load and eliminate no-shows.",
        deliverables: ["Electronic Health Record (EHR) calendar sync", "Automated SMS/WhatsApp appointment confirmations", "24-hour reminder and reschedule flows", "Pre-appointment digital intake forms"],
      },
      {
        title: "Healthcare Local SEO & Reputation Management",
        desc: "Dominate local hospital and clinic search queries while managing patient reviews across Google and healthcare directories.",
        deliverables: ["Google Business Profile optimization for multi-specialty centers", "Verified patient review generation workflows", "Local directory citation governance", "Doctor profile schema markup"],
      },
      {
        title: "Compassionate 24/7 Patient Support BPO",
        desc: "Professionally trained patient care coordinators handling inbound inquiries, appointment rescheduling, and empathetic triage.",
        deliverables: ["24/7 voice and live chat patient assistance", "Strict privacy & confidentiality compliance", "Warm transfers for emergency medical situations", "Multilingual patient communication"],
      },
    ],
    caseStudies: [
      { name: "Cloudnine KnowMoms", category: "Healthcare & Maternity", summary: "Built an authoritative, empathetic maternal wellness content platform and moderated supportive community forums.", route: "/work/#cloudnine" },
    ],
    servicesProvided: [
      { title: "Content Marketing", route: "/digital-marketing/content-marketing", desc: "Medically verified healthcare articles and educational patient resources." },
      { title: "SEO Services", route: "/digital-marketing/seo-services", desc: "Local clinic map pack optimization and healthcare authority building." },
      { title: "AI Chatbots", route: "/ai-automation/ai-chatbot-development", desc: "24/7 triage and appointment booking assistants for healthcare portals." },
      { title: "Customer Support Outsourcing", route: "/bpo-services/customer-support-outsourcing", desc: "Empathetic, trained patient care coordinators." },
    ],
    faqs: [
      { question: "How do you ensure medical content is accurate?", answer: "All healthcare content produced by our team follows strict clinical review workflows. We collaborate with licensed medical practitioners to fact-check terminology, citations, and guidance before publication." },
      { question: "How do you handle patient data privacy?", answer: "We design all digital touchpoints with strict healthcare compliance: zero storage of unencrypted protected health information (PHI), secure SSL/TLS data transmission, and compliance with national health data privacy laws." },
      { question: "Can your appointment booking integrate with our existing clinic EHR?", answer: "Yes. We build custom API connectors to synchronize booking requests with standard Electronic Health Record (EHR) and clinic management platforms." },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    route: "/industries/real-estate",
    name: "Real Estate & Construction",
    eyebrow: "Real Estate Growth & Lead Generation",
    title: "Real Estate Digital Marketing & Lead Generation | Builders & Developers | SARS Global",
    metaDescription: "Generate qualified property buyers and investors with SARS Global: targeted real estate paid search, 3D project showcases, and dedicated tele-calling teams.",
    heroHeadline: "High-Velocity Lead Generation and Digital Sales for Real Estate",
    heroSubheadline: "We help property builders, developers, and brokers connect with qualified home buyers and commercial investors through hyper-local advertising, immersive landing pages, and rapid tele-qualification.",
    badges: ["High-Net-Worth Investor Targeting", "Hyper-Local Geo Search Ads", "Project Showcase Microsites", "Dedicated Real Estate Tele-Calling", "Virtual Site Tour Walkthroughs", "Broker Network Management"],
    challenges: {
      title: "Why Real Estate Marketing Suffers from Low-Quality Leads",
      description: "Real estate portals like MagicBricks and 99acres sell the exact same leads to dozens of competing brokers simultaneously. Builders waste sales team bandwidth calling un-contactable numbers and tire-kickers who lack purchasing power.",
      points: [
        "Brokers wasting 70%+ of their time dialing non-responsive or unqualified leads",
        "Shared real estate portal leads creating aggressive, brand-damaging price wars",
        "Project landing pages lacking high-resolution floor plans, video walk-throughs, and pricing clarity",
        "High cost-per-site-visit caused by slow sales rep follow-up times",
      ],
    },
    solutions: [
      {
        title: "Exclusive Buyer & Investor Acquisition",
        desc: "Targeted Google Search, YouTube, and Meta campaigns generating 100% exclusive buyer inquiries directly for your development.",
        deliverables: ["Affluent demographic & location targeting", "Search intent targeting ('3 BHK in Gurugram')", "High-impact drone and site progress video ads", "Dynamic pricing & floor plan lead magnets"],
      },
      {
        title: "High-Converting Project Showcase Microsites",
        desc: "Sub-second project microsites featuring interactive master plans, floor layouts, amenity highlights, and location connectivity maps.",
        deliverables: ["Interactive unit selector & floor plan downloads", "Virtual 360-degree tour integration", "Embedded site location distance calculators", "Mobile-optimized enquiry capture forms"],
      },
      {
        title: "Dedicated Real Estate Tele-Calling Squads",
        desc: "Trained inside sales representatives who contact inbound leads within 5 minutes, qualify budgets, and book in-person site visits.",
        deliverables: ["Sub-5-minute lead response SLA", "Budget and purchasing timeline qualification", "Direct site visit calendar booking for project sales managers", "No-show re-engagement and reminder SMS cadences"],
      },
      {
        title: "CRM & Broker Pipeline Automation",
        desc: "Automate lead assignment, broker commission tracking, and follow-up reminders across Salesforce, LeadSquared, or HubSpot.",
        deliverables: ["LeadSquared and Salesforce customization", "Automated broker lead registration workflows", "Site visit status tracking dashboards", "WhatsApp brochure & pricing auto-delivery"],
      },
    ],
    caseStudies: [
      { name: "Sri Khelari Builders", category: "Real Estate Development", summary: "Generated qualified property investor leads with hyper-local geo-targeted paid social and search ads.", route: "/work/#sri-khelari-builders" },
      { name: "Aangan Villa", category: "Luxury Residential", summary: "Designed luxury villa project showcase landing pages driving high-ticket site visit appointments.", route: "/work" },
    ],
    servicesProvided: [
      { title: "Performance Marketing", route: "/digital-marketing/performance-marketing", desc: "Hyper-targeted real estate paid search and social campaigns." },
      { title: "Sales Outsourcing", route: "/bpo-services/sales-outsourcing", desc: "Dedicated tele-calling reps qualifying budgets and booking site visits." },
      { title: "Web Development", route: "/software-development/web-development", desc: "High-converting project showcase microsites and master plans." },
      { title: "CRM Automation", route: "/ai-automation/crm-automation", desc: "Automate site visit tracking and sales rep follow-ups." },
    ],
    faqs: [
      { question: "Are the real estate leads exclusive to our project?", answer: "Yes, 100%. Unlike third-party property aggregator portals that sell the same inquiry to 10 different brokers, every lead generated through our campaigns belongs exclusively to your development." },
      { question: "How quickly does your tele-calling team contact incoming leads?", answer: "Our real estate sales development reps contact new inquiries within 3 to 5 minutes during operating hours, dramatically increasing contact rates and site visit confirmations." },
      { question: "Can you market both residential and commercial properties?", answer: "Yes. We run distinct campaign playbooks for luxury residential villas, affordable housing, commercial retail shops, and corporate office spaces." },
    ],
  },
  "b2b": {
    slug: "b2b",
    route: "/industries/b2b",
    name: "B2B SaaS, Marketplaces & Lead Gen",
    eyebrow: "B2B Demand Generation & Tech Systems",
    title: "B2B Tech & SaaS Digital Solutions | Pipeline & Platform Engineering | SARS Global",
    metaDescription: "Accelerate B2B enterprise pipeline with SARS Global: account-based marketing (ABM), custom SaaS platform engineering, and dedicated outbound SDR squads.",
    heroHeadline: "High-Impact Demand Generation and Engineering for B2B Tech",
    heroSubheadline: "We help B2B software companies, tech marketplaces, and corporate service firms scale pipeline, shorten sales cycles, and build resilient cloud software platforms.",
    badges: ["Account-Based Marketing (ABM)", "Outbound SDR Squads", "Enterprise Marketplace Engineering", "LinkedIn Thought Leadership", "Multi-Tenant SaaS Development", "Closed-Loop Revenue Attribution"],
    challenges: {
      title: "The Complexity of Modern B2B Procurement",
      description: "B2B buying committees now average 6 to 10 stakeholders, each conducting independent digital research before engaging sales. Impersonal cold blasts and vanity website traffic fail to move complex multi-thousand-dollar deals forward.",
      points: [
        "Long sales cycles (3 to 9 months) where deals stall due to lack of buyer consensus",
        "Disconnection between marketing lead volume and sales qualified pipeline",
        "High cost-per-opportunity on LinkedIn Ads without proper audience exclusions",
        "Cluttered product interfaces that create customer friction during software trials",
      ],
    },
    solutions: [
      {
        title: "Account-Based Marketing & Demand Generation",
        desc: "Surgically target high-value enterprise accounts across LinkedIn, Google Search, and industry media with personalized messaging.",
        deliverables: ["Target Account List (TAL) mapping", "Role-specific value proposition framing", "LinkedIn B2B matched audience campaigns", "Intent data monitoring (Bombora / G2)"],
      },
      {
        title: "Dedicated Outbound SDR Teams",
        desc: "Trained B2B sales development reps who conduct personalized multi-touch outreach to book qualified discovery calls for your Account Executives.",
        deliverables: ["Direct-dial phone and email outreach", "Personalized LinkedIn social selling", "BANT qualification benchmarks", "Guaranteed meeting quotas with decision-makers"],
      },
      {
        title: "Custom Marketplace & SaaS Platform Engineering",
        desc: "Architect scalable, multi-tenant digital platforms with automated matching algorithms, billing systems, and enterprise permissions.",
        deliverables: ["Multi-sided marketplace matching algorithms", "Role-Based Access Control (RBAC)", "Stripe billing and escrow workflows", "OpenAPI developer documentation"],
      },
      {
        title: "B2B Content & Sales Enablement",
        desc: "Produce technical whitepapers, ROI calculators, and customer case studies that empower internal champions to sell your solution upward.",
        deliverables: ["Interactive ROI & cost-savings calculators", "In-depth customer implementation case studies", "Competitive comparison one-pagers", "Product demo landing page architectures"],
      },
    ],
    caseStudies: [
      { name: "BenchKart", category: "B2B Tech Marketplace", summary: "Built enterprise services procurement engine and generated inbound corporate requirement leads.", route: "/work/#benchkart" },
      { name: "Avance Consulting", category: "Global Workforce Solutions", summary: "Modernized corporate digital footprint and automated enterprise recruitment talent matching.", route: "/work/#avance-consulting" },
    ],
    servicesProvided: [
      { title: "Performance Marketing", route: "/digital-marketing/performance-marketing", desc: "LinkedIn and Google Search ABM campaigns targeting corporate decision-makers." },
      { title: "Custom Software", route: "/software-development/custom-software", desc: "Scalable B2B SaaS platforms and multi-sided marketplace architectures." },
      { title: "Sales Outsourcing", route: "/bpo-services/sales-outsourcing", desc: "Dedicated outbound SDR squads booking qualified sales meetings." },
      { title: "Content Marketing", route: "/digital-marketing/content-marketing", desc: "Technical whitepapers, case studies, and sales enablement assets." },
    ],
    faqs: [
      { question: "How do you align marketing campaigns with our direct sales team?", answer: "We implement closed-loop CRM attribution connecting every lead and meeting back to specific ad campaigns, keyword clusters, and SDR cadences. Sales and marketing work from the exact same revenue scorecard." },
      { question: "What sizes of B2B deals do your campaigns support?", answer: "Our playbooks are designed for mid-market and enterprise B2B deal sizes ranging from $10,000 to $250,000+ Annual Contract Value (ACV)." },
      { question: "Can you build custom platforms like BenchKart?", answer: "Yes. We specialize in engineering multi-sided marketplaces, customer portals, and internal enterprise workflow tools from scratch using modern cloud stacks." },
    ],
  },
  "education": {
    slug: "education",
    route: "/industries/education",
    name: "Education & EdTech",
    eyebrow: "EdTech & Learning Platforms",
    metaDescription: "Accelerate student enrollment and build intuitive learning platforms with SARS Global: EdTech software, student lead gen, and admissions counseling teams.",
    title: "Education & EdTech Digital Solutions | Enrollment & Learning Tech | SARS Global",
    heroHeadline: "Digital Growth and Scalable Technology for Education",
    heroSubheadline: "We partner with educational institutions, EdTech startups, and training academies to boost student enrollment, build engaging learning portals, and streamline admissions.",
    badges: ["Student Enrollment Lead Generation", "Interactive Learning Portals", "Admissions Counseling BPO", "Curriculum Content Marketing", "Virtual Classroom Integration", "Course Checkout & LMS Sync"],
    challenges: {
      title: "Why Educational Institutions Struggle with Student Acquisition",
      description: "With hundreds of online courses and institutions competing for attention, prospective students and parents are overwhelmed with options. High drop-off rates on inquiry forms and delayed admissions follow-ups lead to unfilled batches.",
      points: [
        "Inquiries going cold because admissions counselors take days to contact applicants",
        "High cost-per-enrolled-student on broad search and social ad channels",
        "Clunky legacy Learning Management Systems (LMS) frustrating modern learners",
        "Lack of interactive curriculum previews to demonstrate educational value",
      ],
    },
    solutions: [
      {
        title: "Student Enrollment Marketing & Ad Funnels",
        desc: "Targeted campaigns across Google Search, YouTube, and Meta that attract prospective students actively researching career and academic programs.",
        deliverables: ["Program-specific search intent campaigns", "Webinar & masterclass registration funnels", "Student testimonial video production", "Multi-touch email admissions drip sequences"],
      },
      {
        title: "Interactive Learning Portals & EdTech Software",
        desc: "Custom web-based learning platforms featuring video modules, interactive quizzes, progress tracking, and certificate generation.",
        deliverables: ["Modern React-based student dashboard UI", "LMS backend integration (Moodle, Canvas, custom)", "Video streaming and DRM protection", "Automated quiz grading and badges"],
      },
      {
        title: "Dedicated Admissions Counseling BPO",
        desc: "Professional education counselors who contact student applicants immediately, answer syllabus questions, and guide them through enrollment.",
        deliverables: ["Sub-5-minute applicant outreach", "Course eligibility & interest assessment", "Payment plan & financing guidance", "Batch orientation coordination"],
      },
      {
        title: "Educational Content & Curriculum Marketing",
        desc: "Authoritative study guides, career roadmaps, and educational blogs that position your faculty as subject matter leaders.",
        deliverables: ["Career transition pillar guides", "Curriculum breakdown one-pagers", "Parent & student FAQ hubs", "Educational YouTube video optimization"],
      },
    ],
    caseStudies: [
      { name: "Light Financial Education", category: "FinTech Education", summary: "Developed accessible financial literacy digital curriculum guides and interactive learning tools.", route: "/work/#light-financial-education" },
    ],
    servicesProvided: [
      { title: "Web Development", route: "/software-development/web-development", desc: "Interactive student portals, course catalogs, and learning dashboards." },
      { title: "Performance Marketing", route: "/digital-marketing/performance-marketing", desc: "Student enrollment funnels across Google and Meta." },
      { title: "Sales Outsourcing", route: "/bpo-services/sales-outsourcing", desc: "Dedicated admissions counseling teams managing applicant enrollment." },
      { title: "Content Marketing", route: "/digital-marketing/content-marketing", desc: "Authoritative educational resources, curriculum guides, and blogs." },
    ],
    faqs: [
      { question: "How do your admissions teams handle student counseling?", answer: "Our counselors are thoroughly trained on your specific curriculum, career outcomes, pricing, and prerequisites. They act as helpful academic advisors rather than high-pressure salespeople, building trust with students and parents." },
      { question: "Can you integrate with our existing LMS?", answer: "Yes. We can connect your frontend marketing site and checkout funnels directly to Moodle, Teachable, Canvas, or custom internal learning databases." },
      { question: "Do you support both K-12 and higher-education/executive training?", answer: "Yes. We customize student acquisition funnels based on whether the primary decision-maker is a parent (K-12/tutoring) or a working professional (executive certifications)." },
    ],
  },
  "agritech": {
    slug: "agritech",
    route: "/industries/agritech",
    name: "Agritech & Warehousing Logistics",
    eyebrow: "Agritech Systems & Field Operations",
    metaDescription: "Streamline agricultural supply chains and warehouse operations with SARS Global: offline-first mobile apps, commodity inspection systems, and real-time inventory portals.",
    title: "Agritech & Agricultural Warehousing Digital Solutions | SARS Global",
    heroHeadline: "Technology and Operations Built for Agriculture & Supply Chains",
    heroSubheadline: "We build resilient, field-tested digital platforms, real-time collateral management systems, and back-office data processing pipelines for agritech leaders and agricultural warehousing networks.",
    badges: ["Agricultural Collateral Management", "Offline-First Mobile Inspection Apps", "Real-Time Warehouse Inventory Portals", "High-Volume Receipt Reconciliation", "Supply Chain ERP Synchronization", "Rural Outreach & Marketing"],
    challenges: {
      title: "The Reality of Rural & Agricultural Operations",
      description: "Agricultural supply chains operate in remote environments with intermittent cellular connectivity, complex paper-based documentation, and perishable commodities. Standard cloud software fails when rural warehouses lose internet access.",
      points: [
        "Spotty internet connectivity in remote warehouse locations causing system lockouts",
        "Discrepancies in manual paper warehouse receipts leading to banking collateral disputes",
        "Delayed reporting of commodity moisture, grade, and quality inspection metrics",
        "Administrative backlogs processing thousands of daily grain intake records",
      ],
    },
    solutions: [
      {
        title: "Offline-First Mobile Field & Inspection Apps",
        desc: "Rugged mobile applications that allow warehouse managers and agronomists to log inspections, scan barcodes, and capture photos with zero internet.",
        deliverables: ["Local SQLite / IndexedDB offline data persistence", "Automatic background cloud sync on network recovery", "Barcode and QR code bag scanning", "Geotagged timestamp and photo capture"],
      },
      {
        title: "Real-Time Warehouse & Collateral Portals",
        desc: "Centralized cloud dashboards giving banks, commodity traders, and agribusiness leaders real-time visibility into warehouse stock levels.",
        deliverables: ["Live warehouse capacity utilization maps", "Commodity quality grade analytics", "Automated digital warehouse receipt (e-NWR) generation", "Audit trail & tamper-proof logging"],
      },
      {
        title: "Back-Office Receipt & Intake Processing BPO",
        desc: "Dedicated data entry teams who reconcile thousands of daily warehouse receipts, weight bridge slips, and lab assay reports with 99.9% accuracy.",
        deliverables: ["Three-way weight and quality slip matching", "Discrepancy flag and escalation alerts", "ERP inventory ledger entry", "Daily reconciliation reports for banking partners"],
      },
      {
        title: "Farmer & Agribusiness Inbound Support",
        desc: "Multilingual voice and WhatsApp support teams assisting farmers, warehouse supervisors, and logistics drivers with operational queries.",
        deliverables: ["Regional language voice support (Hindi, regional dialects)", "WhatsApp warehouse slot booking", "Crop price and arrival informational lines", "Grievance logging and resolution"],
      },
    ],
    caseStudies: [
      { name: "StarAgri", category: "Agri-Warehousing & Collateral Management", summary: "Engineered real-time warehouse data inspection portals and processed daily warehouse intake slips with 99.9% accuracy.", route: "/work/#staragri" },
    ],
    servicesProvided: [
      { title: "Custom Software", route: "/software-development/custom-software", desc: "Offline-first mobile apps and enterprise agricultural logistics portals." },
      { title: "Back Office Outsourcing", route: "/bpo-services/back-office-outsourcing", desc: "High-volume agricultural warehouse receipt and assay reconciliation." },
      { title: "Customer Support Outsourcing", route: "/bpo-services/customer-support-outsourcing", desc: "Multilingual regional voice and WhatsApp support for field personnel." },
      { title: "Technology Consulting", route: "/technology-consulting", desc: "Architecture consulting for resilient, distributed supply chain platforms." },
    ],
    faqs: [
      { question: "How do your mobile apps function without an internet connection?", answer: "We build using offline-first database architectures (such as SQLite or WatermelonDB). Field officers can record warehouse inspections, scan bags, and log weights without internet. The moment the device reconnects to Wi-Fi or cellular data, all changes sync automatically without data loss." },
      { question: "How do you maintain data accuracy for banking collateral?", answer: "We implement dual-verification workflows combining automated OCR document extraction with human senior QA review teams, guaranteeing 99.9% data fidelity required by financial institutions." },
      { question: "Can your systems integrate with government and commodity exchanges?", answer: "Yes. We build custom API connectors compliant with repository protocols, WDRA standards, and electronic warehouse receipt systems." },
    ],
  },
  "b2b-saas": {
    slug: "b2b-saas",
    route: "/industries/b2b-saas",
    name: "B2B SaaS & Cloud Platforms",
    eyebrow: "SaaS Product Engineering & Pipeline",
    metaDescription: "Accelerate B2B SaaS growth with SARS Global: high-converting marketing sites, product UI/UX design systems, high-intent SEO, API engineering, and outsourced SDR teams.",
    title: "B2B SaaS Growth & Engineering Solutions | SARS Global",
    heroHeadline: "Full-Lifecycle Engineering, Product Design & Demand Generation for B2B SaaS",
    heroSubheadline: "We partner with ambitious software founders and venture-backed SaaS teams to engineer resilient cloud platforms, design intuitive product workflows, and drive predictable pipeline through high-intent SEO, performance ads, and dedicated SDRs.",
    badges: [
      "Product UI/UX & Design Systems",
      "High-Intent SaaS SEO & Alternative Pages",
      "Next.js & React Web App Engineering",
      "API & Microservices Architecture",
      "CRM & Product Analytics Automation",
      "Dedicated Outbound SDR Pipelines",
    ],
    challenges: {
      title: "The Compounding Complexities of Scaling B2B SaaS",
      description: "Modern SaaS businesses face mounting customer acquisition costs (CAC), prolonged multi-stakeholder enterprise sales cycles, complex self-serve activation hurdles, and feature creep that slows engineering velocity.",
      points: [
        "Skyrocketing paid advertising CAC driven by competitive keyword bidding",
        "High churn and low trial-to-paid conversion rates due to fragmented onboarding UX",
        "Technical debt and architectural bottlenecks when scaling from MVP to enterprise grade",
        "Engineering teams bogged down in marketing web updates rather than core product features",
      ],
    },
    solutions: [
      {
        title: "SaaS Product UI/UX & Design Systems",
        desc: "Transform complex enterprise functionality into intuitive, elegant workflows that accelerate user activation, minimize time-to-value, and prevent churn.",
        deliverables: [
          "Figma tokenized design systems and UI component kits",
          "Frictionless self-serve onboarding and activation flows",
          "Interactive dashboard analytics and data visualization",
          "User testing, heuristic audits, and conversion funnel CRO",
        ],
      },
      {
        title: "High-Intent SaaS SEO & Demand Generation",
        desc: "Capture high-purchase-intent software buyers searching for alternatives, comparisons, and solutions to their specific operational bottlenecks.",
        deliverables: [
          "Programmatic 'Vs' and 'Alternative to' comparison pages",
          "Technical bottom-of-funnel (BOFU) feature landing pages",
          "Authoritative industry benchmark reports and pillar guides",
          "Google Ads & LinkedIn account-based marketing (ABM) funnels",
        ],
      },
      {
        title: "Scalable Web Platforms & API Engineering",
        desc: "Engineer lightning-fast marketing portals, headless CMS setups, and secure REST/GraphQL API layers built for enterprise performance.",
        deliverables: [
          "Next.js App Router marketing platforms with sub-second loads",
          "Third-party integration hubs (Salesforce, Stripe, Slack, Zapier)",
          "Multi-tenant database architectures and role-based permissions",
          "CI/CD deployment pipelines on AWS, Google Cloud, and Vercel",
        ],
      },
      {
        title: "Outsourced SDR Pipeline & 24/7 Technical Support",
        desc: "Scale your revenue operations with dedicated sales development reps booking enterprise demos and 24/7 technical customer support specialists.",
        deliverables: [
          "Dedicated outbound SDR teams executing cold outreach & social selling",
          "Under-5-minute inbound demo request qualification & scheduling",
          "Tier-1 and Tier-2 technical support across Intercom, Zendesk, and email",
          "CRM hygiene, pipeline reporting, and customer retention workflows",
        ],
      },
    ],
    caseStudies: [
      {
        name: "BenchKart",
        category: "B2B Tech Marketplace & SaaS",
        summary: "Architected multi-sided enterprise technology procurement marketplace connecting Fortune 500 enterprises with verified IT agencies.",
        route: "/work/#benchkart",
      },
      {
        name: "Avance Consulting",
        category: "Enterprise Workforce SaaS",
        summary: "Designed high-velocity recruitment pipeline portals and automated applicant management workflows across UK and US markets.",
        route: "/work/#avance-cons",
      },
    ],
    servicesProvided: [
      { title: "Custom Software", route: "/software-development/custom-software", desc: "Enterprise cloud software architectures and robust backend APIs." },
      { title: "UI/UX & Product Design", route: "/ui-ux-design", desc: "SaaS onboarding design systems, dashboards, and self-serve workflows." },
      { title: "SEO Services", route: "/digital-marketing/seo-services", desc: "High-intent bottom-of-funnel SaaS search and comparison playbooks." },
      { title: "CRM Automation", route: "/ai-automation/crm-automation", desc: "Automated user lifecycle tracking, HubSpot/Salesforce sync, and lead scoring." },
      { title: "Sales Outsourcing", route: "/bpo-services/sales-outsourcing", desc: "Dedicated outbound SDR teams delivering qualified enterprise demo pipeline." },
      { title: "Customer Support Outsourcing", route: "/bpo-services/customer-support-outsourcing", desc: "24/7 tier-1 and tier-2 technical help desk across chat and email." },
    ],
    faqs: [
      {
        question: "How do you help SaaS companies lower Customer Acquisition Cost (CAC)?",
        answer: "We replace reliance on expensive pay-per-click bidding with an evergreen organic demand generation engine: high-intent bottom-of-funnel comparison pages ('Competitor A vs Competitor B'), keyword clusters around specific business pain points, and conversion-optimized landing pages that turn casual visitors into active trial users.",
      },
      {
        question: "Can your developers work alongside our internal engineering team?",
        answer: "Yes. We frequently augment internal SaaS engineering squads, taking full ownership of public-facing web portals, marketing infrastructure, third-party API connectors, and onboarding micro-services, freeing your core product engineers to focus exclusively on product features.",
      },
      {
        question: "How quickly can your outsourced SDR team ramp up for outbound demos?",
        answer: "Our typical SDR onboarding takes 2 weeks. During this period, we master your product value proposition, configure dedicated cold outreach domains and email sequencing tools, build targeted ICP lead lists, and test email/LinkedIn cadences before launching active pipeline outreach.",
      },
      {
        question: "Do you support enterprise SOC 2 and GDPR compliance standards?",
        answer: "Yes. All software architecture, data processing workflows, and BPO operations follow stringent data isolation, encryption at rest and in transit, and role-based access controls in alignment with SOC 2, ISO 27001, and GDPR guidelines.",
      },
    ],
  },
  "b2b-lead-generation": {
    slug: "b2b-lead-generation",
    route: "/industries/b2b-lead-generation",
    name: "B2B Lead Generation & Revenue Pipeline",
    eyebrow: "Qualified Pipeline & Demand Generation",
    metaDescription: "Drive predictable B2B sales pipeline with SARS Global: high-intent search SEO, precision Google & LinkedIn Ads, conversion landing pages, and dedicated SDR teams.",
    title: "B2B Lead Generation & Qualified Pipeline Services | SARS Global",
    heroHeadline: "Predictable, High-Value B2B Pipeline Built on Real Buyer Intent",
    heroSubheadline: "Stop burning budget on vanity clicks and cold lists that never convert. SARS Global combines high-intent SEO, hyper-targeted search ads, rapid CRO landing pages, and outsourced sales development reps to fill your calendar with sales-ready decision-makers.",
    badges: [
      "High-Intent Organic SEO Pipeline",
      "Precision B2B Google & LinkedIn Ads",
      "Sub-Second High-Conversion Landing Pages",
      "Multi-Touch Lead Scoring & CRM Routing",
      "5-Minute Inbound Lead Response SLAs",
      "Dedicated Outbound Appointment Setting",
    ],
    challenges: {
      title: "Why Most B2B Lead Generation Campaigns Fail",
      description: "Generating volume is easy; generating qualified pipeline that actually closes into contract revenue is where 90% of agency campaigns fall apart. Siloed marketing teams pass cold contacts that internal sales reps immediately reject.",
      points: [
        "Inbound leads arriving cold and taking hours or days for internal reps to follow up",
        "High cost per qualified opportunity despite hundreds of irrelevant form submissions",
        "Mismatched messaging between search intent, ad copy, and landing page value proposition",
        "Lack of CRM integration causing untracked attribution and dropped leads between teams",
      ],
    },
    solutions: [
      {
        title: "High-Intent Inbound Demand Generation (SEO & PPC)",
        desc: "Position your brand directly in front of procurement directors, CTOs, and business executives actively searching for commercial solutions right now.",
        deliverables: [
          "Commercial-intent keyword targeting and keyword clustering",
          "High-ROI Google Search Ads targeting high-margin contract keywords",
          "Targeted LinkedIn Ads focused on job title, industry, and company size",
          "Continuous bid management, negative keyword pruning, and CAC optimization",
        ],
      },
      {
        title: "Conversion-Engineered B2B Landing Pages & CRO",
        desc: "Replace bloated corporate websites with focused, high-speed landing pages engineered with interactive ROI calculators, clear proof points, and friction-free forms.",
        deliverables: [
          "Sub-second loading Next.js landing pages with zero layout shift",
          "Interactive pricing estimators and ROI evaluation tools",
          "Multi-step lead qualification forms that filter out tire-kickers",
          "A/B split testing across headlines, copy, and call-to-actions",
        ],
      },
      {
        title: "Marketing Automation & Immediate CRM Routing",
        desc: "Eliminate manual lead handoffs with automated CRM workflows that score, route, and alert sales representatives within seconds of a submission.",
        deliverables: [
          "HubSpot, Salesforce, Zoho, and Pipedrive bidirectional sync",
          "Automated lead scoring based on firmographic and behavioral data",
          "Instant Slack and WhatsApp lead notification triggers for reps",
          "Multi-stage email and WhatsApp nurture cadences for cold inquiries",
        ],
      },
      {
        title: "Outsourced SDRs & Appointment Setting BPO",
        desc: "Deploy a dedicated squad of trained sales development representatives who contact inbound leads within 5 minutes and prospect targeted outbound accounts.",
        deliverables: [
          "Under-5-minute SLA on all new inbound form and chat inquiries",
          "Rigorous lead qualification adhering to BANT and MEDDIC criteria",
          "Direct calendar booking into your Account Executives' schedules",
          "Daily pipeline reporting, call recordings, and conversion metrics",
        ],
      },
    ],
    caseStudies: [
      {
        name: "Cavalo",
        category: "Commercial Fleet Pipeline",
        summary: "Generated hundreds of verified commercial fleet buyer inquiries with targeted digital funnels and dedicated phone qualification.",
        route: "/work/#cavalo",
      },
      {
        name: "Sri Khelari Builders",
        category: "High-Ticket Real Estate Leads",
        summary: "Captured high-intent luxury property investors with hyper-local geo-targeted search campaigns and rapid CRM lead routing.",
        route: "/work/#sri-khelari-builders",
      },
    ],
    servicesProvided: [
      { title: "SEO Services", route: "/digital-marketing/seo-services", desc: "High-intent organic search ranking for commercial and B2B keywords." },
      { title: "Google Ads", route: "/digital-marketing/google-ads", desc: "Precision search and remarketing campaigns capturing active buyer searches." },
      { title: "Sales Outsourcing", route: "/bpo-services/sales-outsourcing", desc: "Dedicated SDRs qualifying leads and scheduling meetings on your calendar." },
      { title: "Marketing Automation", route: "/ai-automation/marketing-automation", desc: "Lead scoring, automated email drip workflows, and instant notifications." },
      { title: "CRM Automation", route: "/ai-automation/crm-automation", desc: "Seamless pipeline data flow across Salesforce, HubSpot, and WhatsApp." },
      { title: "Performance Marketing", route: "/digital-marketing/performance-marketing", desc: "Multi-channel paid media driving predictable cost per qualified opportunity." },
    ],
    faqs: [
      {
        question: "How do you define a 'qualified' B2B lead?",
        answer: "Before launching any campaign, we establish an explicit Qualified Lead Definition with your sales leadership using BANT (Budget, Authority, Need, Timeline) or MEDDIC frameworks. Leads that do not meet your required company size, decision-maker title, or purchasing timeline are filtered out before reaching your Account Executives.",
      },
      {
        question: "Why is rapid lead response time so critical in B2B?",
        answer: "Industry data shows that responding to an inbound lead within 5 minutes increases conversion rates by over 300% compared to waiting even 30 minutes. Our dedicated BPO response squads monitor incoming form submissions and live chats 24/7 to connect while purchase intent is at its peak.",
      },
      {
        question: "Can you manage both inbound advertising and outbound SDR prospecting?",
        answer: "Yes. Our most successful clients use our hybrid pipeline model: inbound Google Ads and SEO capture active in-market demand, while our dedicated outbound SDRs prospect target account lists on LinkedIn and via verified phone/email cadences.",
      },
      {
        question: "How do we track lead attribution and ROI?",
        answer: "We configure end-to-end tracking connecting Google Analytics 4, Google Tag Manager, ad platforms, and your CRM. You will have full visibility into which exact keyword, ad creative, and landing page generated each qualified pipeline opportunity and closed-won deal.",
      },
    ],
  },
};

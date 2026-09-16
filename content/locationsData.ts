export interface LocationData {
  slug: string;
  route: string;
  city: string;
  state: string;
  country: string;
  address: string;
  landmark?: string;
  postalCode?: string;
  eyebrow: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badges: string[];
  localOverview: {
    title: string;
    description: string;
    highlights: string[];
  };
  servicesOffered: Array<{
    title: string;
    route: string;
    desc: string;
  }>;
  capabilities: Array<{
    title: string;
    desc: string;
    metric?: string;
  }>;
  nearbyAreasServed: string[];
  contactDetails: {
    phone: string;
    email: string;
    hours: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const LOCATIONS_DATA: Record<string, LocationData> = {
  "hub": {
    slug: "locations",
    route: "/locations",
    city: "Global Delivery & Offices",
    state: "International & Regional",
    country: "India & Worldwide",
    address: "Bhagat Singh Circle, Alwar, Rajasthan 301001 / Gurugram, Haryana",
    eyebrow: "Global Presence & Regional Hubs",
    title: "Locations & Global Delivery Hubs | SARS Global",
    metaDescription: "Connect with SARS Global's strategic delivery centers and offices in Alwar, Rajasthan and Gurugram, Haryana serving clients worldwide.",
    heroHeadline: "Strategic Delivery Centers Powering Global Enterprise Execution",
    heroSubheadline: "With our primary operations and engineering hub in Alwar, Rajasthan and strategic proximity to the National Capital Region (NCR), SARS Global delivers world-class software development, digital marketing, and BPO operations.",
    badges: ["Alwar Head Office (Rajasthan)", "National Capital Region Access", "Global Client Delivery (US, UK, Middle East)", "24/7 Follow-the-Sun Operations", "Enterprise Infrastructure"],
    localOverview: {
      title: "Engineered for Global Excellence from Tier-2 Tech Centers",
      description: "SARS Global leverages state-of-the-art technological infrastructure and top engineering talent from our headquarters in Alwar and strategic NCR presence. By combining elite technology capabilities with optimized operational cost structures, we deliver significant commercial advantages to high-growth businesses and enterprise clients worldwide.",
      highlights: [
        "Headquartered at Bhagat Singh Circle, Alwar, Rajasthan with comprehensive modern facility infrastructure",
        "Strategic proximity to Gurugram, Delhi NCR, and Jaipur industrial corridors",
        "Direct client delivery across North America, the United Kingdom, the Middle East, and India",
        "Full-suite in-house capabilities: Software Engineering, AI Automation, Performance Marketing, and 24/7 BPO",
      ],
    },
    servicesOffered: [
      { title: "Digital Marketing", route: "/digital-marketing", desc: "Intent-driven SEO, Google Ads, and full-funnel performance marketing for global brands." },
      { title: "AI & Automation", route: "/ai-automation", desc: "Autonomous AI agents, intelligent chatbots, and enterprise workflow integrations." },
      { title: "Software Development", route: "/software-development", desc: "Next.js, React, custom software platforms, WordPress, and Shopify engineering." },
      { title: "BPO Services", route: "/bpo-services", desc: "Dedicated omnichannel 24/7 customer care, sales development, and back-office processing." },
    ],
    capabilities: [
      { title: "Tier-1 Engineering Quality", desc: "Modern tech stacks (Next.js, TypeScript, Python, Cloud APIs) adhering to strict enterprise standards.", metric: "100%" },
      { title: "Cost Advantage", desc: "Optimized operational economics passed directly to client ROI without compromising technical talent.", metric: "40-60%" },
      { title: "24/7 Operational Uptime", desc: "Follow-the-sun support, multi-shift BPO coverage, and dedicated client success management.", metric: "24/7" },
    ],
    nearbyAreasServed: ["Alwar", "Jaipur", "Gurugram", "Delhi NCR", "Neemrana", "Bhiwadi", "Global Remote (US, UK, UAE)"],
    contactDetails: {
      phone: "+91 80007 88880",
      email: "info@sarsglobal.io",
      hours: "Monday - Saturday: 9:30 AM - 7:00 PM IST (24/7 Support Operations)",
    },
    faqs: [
      { question: "Where is SARS Global located?", answer: "SARS Global's main corporate office and delivery center is located at Bhagat Singh Circle, Alwar, Rajasthan 301001, with strategic presence and client operations in Gurugram, Haryana and serving clients globally." },
      { question: "Do you work with international clients outside of India?", answer: "Yes. Over 50% of our software and digital marketing clients are based in North America, the United Kingdom, Europe, and the Middle East. We provide dedicated project managers aligned with your local working time zones." },
      { question: "Can clients visit your office for on-site meetings?", answer: "Yes, absolutely. We welcome clients and partners to visit our Alwar and NCR facilities for architectural workshops, project kickoffs, and quarterly reviews. Please contact us in advance to coordinate your visit." },
    ],
  },
  "alwar": {
    slug: "alwar",
    route: "/locations/alwar",
    city: "Alwar",
    state: "Rajasthan",
    country: "India",
    address: "Bhagat Singh Circle, Alwar, Rajasthan 301001",
    landmark: "Near Bhagat Singh Circle, Central Commercial Hub",
    postalCode: "301001",
    eyebrow: "Alwar Headquarters & Delivery Center",
    title: "Digital Marketing, Software & BPO Services in Alwar, Rajasthan | SARS Global",
    metaDescription: "SARS Global is the premier digital agency and software development company headquartered in Alwar, Rajasthan. Providing web development, SEO, AI automation, and BPO.",
    heroHeadline: "Leading Software Development, Digital Marketing & BPO in Alwar",
    heroSubheadline: "Headquartered at Bhagat Singh Circle, Alwar, SARS Global delivers world-class software engineering, AI automation, Google Ads, SEO, and dedicated customer support to regional businesses and global enterprises.",
    badges: ["Alwar Corporate Headquarters", "Bhagat Singh Circle Office", "Top IT & Digital Agency in Rajasthan", "Serving Alwar, Bhiwadi, Neemrana & Jaipur", "Global Delivery Standards"],
    localOverview: {
      title: "Empowering Regional Industries and Global Brands from Alwar",
      description: "Alwar is rapidly growing as a key industrial, manufacturing, and technology corridor between Delhi NCR and Jaipur. Situated in the heart of the city at Bhagat Singh Circle, SARS Global provides local enterprises, industrial manufacturers, real estate developers, and healthcare institutions with world-class digital capabilities previously accessible only in metro cities.",
      highlights: [
        "Headquartered at prime central location: Bhagat Singh Circle, Alwar, Rajasthan",
        "Serving manufacturing hubs across Bhiwadi, Neemrana, Matsya Industrial Area (MIA), and Alwar city",
        "Full-time in-house team of software engineers, digital marketing specialists, and BPO operations staff",
        "Trusted partner for prominent regional leaders including Cavalo commercial vehicles and Sri Khelari Builders",
      ],
    },
    servicesOffered: [
      { title: "Website & Software Development", route: "/software-development", desc: "Fast, modern websites, eCommerce stores, and custom software for Alwar and NCR businesses." },
      { title: "Digital Marketing & Local SEO", route: "/digital-marketing/seo-services", desc: "Dominate Google search results and generate qualified local and national buyer inquiries." },
      { title: "Google & Meta Ads", route: "/digital-marketing/google-ads", desc: "Targeted advertising that drives verified customer inquiries and sales appointments." },
      { title: "BPO & Customer Care", route: "/bpo-services", desc: "Omnichannel customer care, sales calling, and back-office data processing from our Alwar center." },
    ],
    capabilities: [
      { title: "Local Presence & On-Site Support", desc: "Face-to-face consultations, local workshops, and dedicated account managers right here in Alwar.", metric: "Local" },
      { title: "Enterprise Quality", desc: "We bring modern Silicon Valley-grade tech stacks and strategies to Rajasthan's growing businesses.", metric: "99.9%" },
      { title: "Cost-Effective Pricing", desc: "Get high-end metropolitan agency quality without the inflated Delhi or Mumbai overhead costs.", metric: "Optimal" },
    ],
    nearbyAreasServed: [
      "Matsya Industrial Area (MIA), Alwar",
      "Bhiwadi Industrial Zone",
      "Neemrana Japanese Zone",
      "Khairthal & Behror",
      "Tijara & Rewari",
      "Jaipur & Delhi NCR Corridors",
    ],
    contactDetails: {
      phone: "+91 80007 88880",
      email: "info@sarsglobal.io",
      hours: "Monday - Saturday: 9:30 AM - 7:00 PM IST",
    },
    faqs: [
      { question: "Where in Alwar is SARS Global's office located?", answer: "Our office is centrally located at Bhagat Singh Circle, Alwar, Rajasthan 301001. You can schedule an in-person meeting by calling our team or submitting our website contact form." },
      { question: "Do you offer web design and digital marketing services to local Alwar businesses?", answer: "Yes. We work extensively with regional businesses in Alwar, Bhiwadi, and Neemrana—including manufacturing units, educational institutions, real estate builders, hospitals, and retail showrooms—helping them establish market leadership online." },
      { question: "How does an Alwar business benefit from working with SARS Global?", answer: "You get the best of both worlds: local accessibility, in-person strategy meetings, and direct phone contact, paired with world-class engineering and marketing standards that compete with top global agencies." },
    ],
  },
};

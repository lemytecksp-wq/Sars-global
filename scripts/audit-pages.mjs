const origin = process.env.SARS_AUDIT_ORIGIN || "http://127.0.0.1:4307";
const oldLogoPath = `/assets/img/${"sars"}-${"logo"}-${"512"}.png`;
const oldRemoteLogoPath = `wp-content/uploads/2025/05/${"sars"}${"logo"}-1.png`;

const routes = [
  "/",
  "/about/",
  "/services/",
  "/work/",
  "/portfolio/",
  "/hire-talent/",
  "/bpo-services/",
  "/contact/",
  "/insights/",
  "/insights/ai-visibility-measure-brand-chatgpt-gemini-google-ai-search-2026/",
  "/insights/social-search-seo-instagram-linkedin-youtube-2026/",
  "/insights/agentic-ai-business-operations-2026/",
  "/insights/b2b-websites-traffic-fail-convert-leads/",
  "/insights/b2b-buyer-journey-demand-generation-2026/",
  "/insights/why-cost-per-lead-keeps-rising/",
  "/insights/signs-tech-stack-costing-you-growth/",
  "/insights/what-makes-a-website-successful/",
  "/insights/ai-automation-small-businesses-2026/",
  "/privacy/",
  "/terms/",
];

const expected = {
  "/": ["Scale Globally", "Featured Work", "State-of-the-art digital"],
  "/about/": ["About SARS Global", "creative", "technology"],
  "/services/": ["Ideas built to", "Digital Marketing", "Technology Consulting"],
  "/work/": ["Our Projects", "Systems built", "Cavalo"],
  "/portfolio/": ["Portfolio", "Cavalo", "Technology"],
  "/hire-talent/": ["Hire Elite", "SARS Engine v2.4", "Permanent Placement"],
  "/bpo-services/": ["Business Process Outsourcing", "Technology-enabled", "Submit BPO Requirement"],
  "/contact/": ["Have an ambitious idea", "Main Office", "Gurugram Office"],
  "/insights/": ["Ideas, Insights", "Latest Insights", "Read Article"],
  "/insights/ai-visibility-measure-brand-chatgpt-gemini-google-ai-search-2026/": ["AI Visibility", "AI Search"],
  "/insights/social-search-seo-instagram-linkedin-youtube-2026/": ["Social Search SEO", "Instagram"],
  "/insights/agentic-ai-business-operations-2026/": ["Agentic AI", "Business Operations"],
  "/insights/b2b-websites-traffic-fail-convert-leads/": ["B2B Websites", "Website Development"],
  "/insights/b2b-buyer-journey-demand-generation-2026/": ["B2B Buyer Journey", "Digital Marketing"],
  "/insights/why-cost-per-lead-keeps-rising/": ["Why Your Cost Per Lead", "Digital Marketing"],
  "/insights/signs-tech-stack-costing-you-growth/": ["Signs Your Tech Stack", "Technology Consulting"],
  "/insights/what-makes-a-website-successful/": ["What Makes a Website Successful", "Website Development"],
  "/insights/ai-automation-small-businesses-2026/": ["AI and Automation", "Small Businesses"],
  "/privacy/": ["Privacy Policy", "SARS Global"],
  "/terms/": ["Terms", "SARS Global"],
};

const failures = [];

for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  if (!response.ok) {
    failures.push(`${route} returned ${response.status}`);
    continue;
  }
  if (!html.includes("<main")) {
    failures.push(`${route} missing <main>`);
  }
  if (!html.includes("/assets/img/sars-new-logo.png")) {
    failures.push(`${route} missing new logo reference`);
  }
  if (html.includes(oldLogoPath) || html.includes(oldRemoteLogoPath)) {
    failures.push(`${route} contains old logo reference`);
  }
  for (const phrase of expected[route] || []) {
    if (!html.toLowerCase().includes(phrase.toLowerCase())) {
      failures.push(`${route} missing expected content: ${phrase}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Audited ${routes.length} routes at ${origin}.`);

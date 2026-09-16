import type { BlogPost } from "./pages";
import { NEW_BLOG_POSTS } from "./newBlogs";
import { SEO_BLOG_POSTS } from "./seoBlogs";

const EXISTING_BLOG_POSTS = [
    {
      "slug": "ai-visibility-measure-brand-chatgpt-gemini-google-ai-search-2026",
      "category": "AI Search Optimization",
      "description": "Learn how to measure AI visibility across ChatGPT, Gemini, Google AI Search and other AI-powered discovery platforms in 2026.",
      "visualLabel": "AV",
      "title": "AI Visibility in 2026: How to Measure Your Brand Across ChatGPT, Gemini & Google AI Search",
      "route": "/insights/ai-visibility-measure-brand-chatgpt-gemini-google-ai-search-2026",
      "published": "2026-08-27",
      "readTime": "14 min read",
      "image": "/assets/img/Services-image/ai.png"
    },
    {
      "slug": "social-search-seo-instagram-linkedin-youtube-2026",
      "category": "SEO",
      "description": "Learn how social search SEO helps brands become discoverable on Instagram, LinkedIn, YouTube, TikTok, Reddit and AI-powered discovery platforms in 2026.",
      "visualLabel": "SS",
      "title": "Social Search SEO in 2026: How to Make Your Brand Discoverable on Instagram, LinkedIn & YouTube",
      "route": "/insights/social-search-seo-instagram-linkedin-youtube-2026",
      "published": "2026-08-26",
      "readTime": "13 min read",
      "image": "/assets/img/Services-image/Digital-Marketing.png"
    },
    {
      "slug": "b2b-buyer-journey-demand-generation-2026",
      "category": "Digital Marketing",
      "description": "Learn how the B2B buyer journey is changing in 2026 and how demand generation helps brands build awareness, trust and pipeline before buyers enquire.",
      "visualLabel": "DG",
      "title": "The B2B Buyer Journey Has Changed: How Brands Need to Generate Demand in 2026",
      "route": "/insights/b2b-buyer-journey-demand-generation-2026",
      "published": "2026-08-25",
      "readTime": "12 min read",
      "image": "/assets/img/Services-image/Digital-Marketing.png"
    },
    {
      "slug": "b2b-websites-traffic-fail-convert-leads",
      "category": "Website Development",
      "description": "Learn why B2B websites attract visitors but fail to convert them into leads, and how to improve messaging, trust, calls to action and user experience.",
      "visualLabel": "B2B",
      "title": "Why Most B2B Websites Get Traffic but Fail to Convert Visitors Into Leads",
      "route": "/insights/b2b-websites-traffic-fail-convert-leads",
      "published": "2026-08-24",
      "readTime": "10 min read",
      "image": "/assets/img/Services-image/Ui-UX-desgin.png"
    },
    {
      "slug": "agentic-ai-business-operations-2026",
      "category": "AI & Automation",
      "description": "Understand how agentic AI is changing business operations in 2026, from lead follow-up and customer support to internal workflows and automation.",
      "visualLabel": "AI",
      "title": "Agentic AI Is the Next Big Shift: How AI Agents Are Changing Business Operations in 2026",
      "route": "/insights/agentic-ai-business-operations-2026",
      "published": "2026-08-23",
      "readTime": "10 min read",
      "image": "/assets/img/Services-image/ai.png"
    },
    {
      "slug": "first-party-data-marketing-2026",
      "category": "Digital Marketing",
      "description": "First-party data is becoming essential for privacy-focused marketing, better personalization, smarter automation and stronger long-term customer relationships.",
      "visualLabel": "FD",
      "title": "First-Party Data Marketing: Why Businesses Need to Own Their Customer Data in 2026",
      "route": "/insights/first-party-data-marketing-2026",
      "published": "2026-08-22",
      "readTime": "9 min read",
      "image": "/assets/img/Services-image/Digital-Marketing.png"
    },
    {
      "slug": "brand-mentioned-chatgpt-gemini-google-ai-overviews-2026",
      "category": "AI Search Optimization",
      "description": "Learn how businesses can improve their chances of being discovered, understood and mentioned by AI platforms such as ChatGPT, Gemini and Google AI Overviews.",
      "visualLabel": "AI",
      "title": "How to Get Your Brand Mentioned in ChatGPT, Gemini & Google AI Overviews in 2026",
      "route": "/insights/brand-mentioned-chatgpt-gemini-google-ai-overviews-2026",
      "published": "2026-08-22",
      "readTime": "7 min read",
      "image": "/assets/img/Services-image/ai.png"
    },
    {
      "slug": "zero-click-search-generate-leads-2026",
      "category": "SEO",
      "description": "Zero-click search is changing how businesses earn visibility. Learn how to generate leads when AI Overviews and search features reduce traditional clicks.",
      "visualLabel": "ZC",
      "title": "Zero-Click Search Is Growing: How Businesses Can Still Generate Leads in 2026",
      "route": "/insights/zero-click-search-generate-leads-2026",
      "published": "2026-08-22",
      "readTime": "8 min read",
      "image": "/assets/img/Services-image/Digital-Marketing.png"
    },
    {
      "slug": "ai-automation-small-businesses-2026",
      "route": "/insights/ai-automation-small-businesses-2026",
      "title": "AI and Automation for Small Businesses: Where to Start in 2026",
      "category": "AI & Automation",
      "description": "Learn where small businesses should start with AI and automation in 2026, from lead management and customer support to reporting, workflows and data safety.",
      "published": "2026-08-12",
      "readTime": "7 min read",
      "image": "/assets/img/Services-image/ai.png",
      "visualLabel": "AA"
    },
    {
      "slug": "what-makes-a-website-successful",
      "route": "/insights/what-makes-a-website-successful",
      "title": "What Makes a Website Successful? 8 Important Factors Every Business Should Know",
      "category": "Website Development",
      "description": "Learn the eight factors behind a successful business website: clear structure, mobile design, speed, SEO, content, calls to action, security and analytics.",
      "published": "2026-08-12",
      "readTime": "7 min read",
      "image": "/assets/img/Services-image/software-developer.png",
      "visualLabel": "WM"
    },
    {
      "slug": "signs-tech-stack-costing-you-growth",
      "route": "/insights/signs-tech-stack-costing-you-growth",
      "title": "Signs Your Tech Stack Is Quietly Costing You Growth",
      "category": "Technology Consulting",
      "description": "Failing systems announce themselves. Underperforming ones don't. Here are nine symptoms that your technology is capping growth, and how to audit it before you spend more.",
      "published": "2026-08-07",
      "readTime": "9 min read",
      "image": "/assets/img/Services-image/Technology-Consulting-Strategy-Meeting.png",
      "visualLabel": "SY"
    },
    {
      "slug": "why-cost-per-lead-keeps-rising",
      "route": "/insights/why-cost-per-lead-keeps-rising",
      "title": "Why Your Cost Per Lead Keeps Rising (And What Actually Fixes It)",
      "category": "Digital Marketing",
      "description": "Rising CPL is usually a symptom, not the disease. Here are the seven real causes behind climbing lead costs, and the fixes that work in order of impact.",
      "published": "2026-08-07",
      "readTime": "9 min read",
      "image": "/assets/img/Services-image/Digital-Marketing.png",
      "visualLabel": "WY"
    }
  ] as const satisfies readonly BlogPost[];

export const BLOG_POSTS: readonly BlogPost[] = [
  ...SEO_BLOG_POSTS,
  ...NEW_BLOG_POSTS,
  ...EXISTING_BLOG_POSTS,
].sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

export const BLOG_CATEGORIES = [
  "All",
  "AI Search Optimization",
  "SEO",
  "Digital Marketing",
  "Technology Consulting",
  "Website Development",
  "AI & Automation",
  "BPO Services",
  "Talent Solutions"
] as const;

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

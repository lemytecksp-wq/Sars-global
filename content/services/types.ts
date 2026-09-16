export interface ServiceData {
  slug: string;
  route: string;
  parentRoute?: string;
  parentLabel?: string;
  title: string;
  eyebrow: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badges: string[];
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solutions: Array<{
    title: string;
    desc: string;
    deliverables: string[];
  }>;
  subServices?: Array<{
    title: string;
    route: string;
    desc: string;
    deliverables: string[];
  }>;
  process: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  techStack: string[];
  caseStudies: Array<{
    name: string;
    category: string;
    summary: string;
    route: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

import { ServiceData } from "./types";

export const BPO_CHILD_SERVICES: Record<string, ServiceData> = {
  "customer-support-outsourcing": {
    slug: "customer-support-outsourcing",
    route: "/bpo-services/customer-support-outsourcing",
    parentRoute: "/bpo-services",
    parentLabel: "BPO Services",
    title: "Customer Support Outsourcing Services | Omnichannel 24/7 Support | SARS Global",
    eyebrow: "BPO & Customer Experience",
    metaDescription: "Deliver exceptional customer care with SARS Global's customer support outsourcing: 24/7 voice, live chat, email, and WhatsApp support with dedicated agents.",
    heroHeadline: "24/7 Dedicated Customer Support Outsourcing Engineered for High CSAT",
    heroSubheadline: "Scale your customer care operations without sacrificing quality. We provide professionally trained, technology-enabled support specialists across voice, email, chat, and social channels.",
    badges: ["24/7 Omnichannel Coverage", "Dedicated English & Multilingual Agents", "Zendesk, Freshdesk & Intercom Native", "95%+ First Contact Resolution (FCR)", "Strict SLA Guarantees", "AI-Augmented Response Speed"],
    challenge: {
      title: "The Dilemma of In-House Customer Support",
      description: "Hiring, training, and managing customer service representatives in-house is expensive, time-consuming, and difficult to scale during sudden seasonal volume surges. Without 24/7 coverage, customers abandon carts and churn to competitors.",
      points: [
        "High overhead costs for domestic support headcount, equipment, and office space",
        "High employee turnover rates forcing continuous rehiring and retraining cycles",
        "Inability to provide round-the-clock support across multiple time zones",
        "Slow first response times dragging down CSAT and Net Promoter Scores (NPS)",
      ],
    },
    solutions: [
      {
        title: "Omnichannel Customer Support",
        desc: "Unified customer service across live web chat, voice inbound calls, email ticketing, and WhatsApp Business.",
        deliverables: ["Real-time live chat coverage", "Inbound voice call routing & IVR", "Email ticket triage and resolution", "Social media comment and DM response"],
      },
      {
        title: "Rigorous Agent Training & Brand Alignment",
        desc: "Agents are trained deeply on your product nuances, company culture, return policies, and communication guidelines.",
        deliverables: ["Custom brand playbook development", "Mock scenario role-playing exams", "Continuous quality assurance (QA) audits", "Customer sentiment & tone monitoring"],
      },
      {
        title: "AI-Augmented Agent Productivity",
        desc: "We equip our human agents with internal AI copilot tools that instantly fetch verified answers from your knowledge base.",
        deliverables: ["Auto-summarized ticket histories", "Instant macro suggestion copilot", "Automated multilingual translation", "Real-time CSAT prediction scoring"],
      },
      {
        title: "Transparent SLA & Performance Reporting",
        desc: "Live visibility into First Response Time (FRT), First Contact Resolution (FCR), Average Handle Time (AHT), and CSAT scores.",
        deliverables: ["Real-time client analytics dashboard", "Weekly QA review recordings", "Agent productivity scorecards", "Monthly executive service reviews"],
      },
    ],
    process: [
      { step: "01", title: "Process & Knowledge Transfer", desc: "We document your support workflows, FAQs, escalation paths, and software tools into a comprehensive training syllabus." },
      { step: "02", title: "Dedicated Team Selection", desc: "We interview and allocate dedicated support specialists matching your industry requirements and timezone." },
      { step: "03", title: "Shadowing & Gradual Handoff", desc: "Our agents shadow your existing team, handling tickets under supervision until meeting 95%+ quality benchmarks." },
      { step: "04", title: "Full 24/7 Operations & Continuous QA", desc: "We transition to full 24/7 coverage with dedicated team leads monitoring quality and response SLAs continuously." },
    ],
    techStack: ["Zendesk", "Freshdesk", "Intercom", "Salesforce Service Cloud", "Gorgias", "Aircall", "Talkdesk", "Slack"],
    caseStudies: [
      { name: "Cavalo", category: "Automotive Customer Care", summary: "Provided 24/7 customer inquiry triage and service appointment booking across voice and WhatsApp channels.", route: "/work/#cavalo" },
      { name: "Cloudnine KnowMoms", category: "Healthcare Community", summary: "Delivered empathetic, responsive community support handling sensitive maternal questions.", route: "/work/#cloudnine" },
    ],
    faqs: [
      { question: "Are the support agents dedicated to our account or shared?", answer: "We offer both models. For growing brands, we provide dedicated agents who work exclusively on your account, ensuring deep product familiarity and brand voice alignment. For early-stage companies with variable volume, we also offer shared agent pools." },
      { question: "How quickly can you spin up a support team?", answer: "A dedicated team of 2 to 10 agents can typically be trained, onboarded, and fully live handling tickets within 2 to 3 weeks." },
      { question: "What security measures protect customer data?", answer: "Our operational centers enforce strict ISO 27001 and SOC 2 security protocols: clean desk policies, restricted external USB drives, two-factor VPN access, and end-to-end encrypted communications." },
    ],
  },
  "sales-outsourcing": {
    slug: "sales-outsourcing",
    route: "/bpo-services/sales-outsourcing",
    parentRoute: "/bpo-services",
    parentLabel: "BPO Services",
    title: "BPO Sales Outsourcing & SDR Services | SARS Global",
    eyebrow: "BPO & Revenue Acceleration",
    metaDescription: "Accelerate outbound pipeline and inbound sales conversions with SARS Global: dedicated SDRs, B2B lead generation, appointment setting, and inside sales teams.",
    heroHeadline: "Outsourced Sales Development That Fills Your Pipeline",
    heroSubheadline: "Scale your revenue without building an expensive internal sales floor. We deploy trained Sales Development Representatives (SDRs) and outbound specialists who book qualified meetings with decision-makers.",
    badges: ["Dedicated Outbound SDRs", "Inbound Lead Qualification & Speed-to-Lead", "B2B Appointment Setting", "Cold Calling & Email Outreach", "Salesforce & HubSpot Management", "Pay-for-Performance Options"],
    challenge: {
      title: "Why In-House Outbound Sales Teams Are Hard to Scale",
      description: "Recruiting, ramping, and retaining B2B sales reps is notoriously difficult. Average SDR tenure is under 14 months, meaning businesses constantly burn cash on recruiting, data tools, and ramp-up periods before reps book their first meeting.",
      points: [
        "Massive fixed overhead costs for base salaries, commissions, and expensive sales software licenses",
        "Inbound leads waiting too long to be called, resulting in lost deals to agile competitors",
        "Reps burning through prospect lists with generic, un-personalized outreach templates",
        "High management burden tracking daily activity metrics, call scripts, and objection handling",
      ],
    },
    solutions: [
      {
        title: "Dedicated Outbound SDR Squads",
        desc: "Fully equipped outbound sales specialists dedicated to identifying ideal accounts, verifying decision-makers, and booking discovery calls.",
        deliverables: ["Ideal Customer Profile (ICP) list building", "Multi-channel outreach (Phone, LinkedIn, Email)", "Custom objection-handling scripts", "Guaranteed qualified meeting benchmarks"],
      },
      {
        title: "Rapid Inbound Lead Response",
        desc: "Contact high-intent demo requests and inbound web leads within 3 minutes to maximize qualification rates.",
        deliverables: ["Sub-5-minute lead response SLAs", "BANT qualification methodology", "Direct calendar booking for Account Executives", "CRM contact enrichment and deal creation"],
      },
      {
        title: "Data Sourcing & Account Intelligence",
        desc: "We utilize premium B2B databases (Apollo, ZoomInfo, LinkedIn Sales Navigator) to deliver verified phone numbers and direct dials.",
        deliverables: ["Verified direct dial & mobile numbers", "Accurate email deliverability testing", "Technographic and firmographic segmentation", "Trigger event monitoring (funding, hiring)"],
      },
      {
        title: "Sales Technology & Tool Stack Included",
        desc: "Avoid spending thousands on individual sales tool subscriptions. Our SDRs come equipped with modern dialers, email warm-up, and CRM tooling.",
        deliverables: ["Dedicated sales engagement platform seats", "Domain email warm-up & deliverability protection", "Call recording & transcription analysis", "Live pipeline attribution dashboard"],
      },
    ],
    process: [
      { step: "01", title: "ICP & Value Proposition Alignment", desc: "We define your target buyer titles, industry verticals, competitive battlecards, and qualification criteria." },
      { step: "02", title: "Data Enrichment & Cadence Design", desc: "We source verified prospect lists and craft multi-touch calling, email, and LinkedIn cadences." },
      { step: "03", title: "Pilot Campaign & Script Calibration", desc: "Our reps launch outreach sprints, logging objections and refining messaging to optimize call-to-meeting conversion." },
      { step: "04", title: "Full Scale Outbound Engine", desc: "We scale daily dials and outreach volume, delivering consistent qualified pipeline directly into your AE calendars." },
    ],
    techStack: ["LinkedIn Sales Navigator", "Apollo.io", "Salesforce", "HubSpot Sales Hub", "Outreach / Salesloft", "Aircall", "ZoomInfo"],
    caseStudies: [
      { name: "BenchKart", category: "B2B Tech Services", summary: "Deployed inside sales SDRs to qualify enterprise IT buyers and schedule vendor briefing sessions.", route: "/work/#benchkart" },
      { name: "Cavalo", category: "Commercial Automotive", summary: "Managed inbound phone and web inquiry qualification, routing high-ticket fleet buyers directly to territory managers.", route: "/work/#cavalo" },
    ],
    faqs: [
      { question: "What qualifies as a booked meeting?", answer: "A meeting is qualified only when it matches your exact criteria: correct decision-maker job title, verified company size, active interest in your solutions, and the prospect attending the scheduled call." },
      { question: "Who provides the prospect phone numbers and emails?", answer: "SARS Global provides verified prospect data as part of our sales outsourcing service. We use premium data intelligence platforms with verified direct dials and email hygiene checks." },
      { question: "How do our internal Account Executives receive the leads?", answer: "Our SDRs book meetings directly into your sales reps' Google or Outlook calendars via HubSpot or Calendly, attaching the call recording, notes, and CRM profile." },
    ],
  },
  "technical-support-outsourcing": {
    slug: "technical-support-outsourcing",
    route: "/bpo-services/technical-support-outsourcing",
    parentRoute: "/bpo-services",
    parentLabel: "BPO Services",
    title: "Technical Support Outsourcing Services | L1, L2 & L3 Helpdesk | SARS Global",
    eyebrow: "BPO & IT Support Services",
    metaDescription: "Resolve software bugs and hardware issues with SARS Global's technical support outsourcing: 24/7 Tier 1, Tier 2, and Tier 3 IT helpdesk and engineering support.",
    heroHeadline: "Tier 1 to Tier 3 Technical Support Outsourcing That Solves Complex Issues",
    heroSubheadline: "Protect your internal engineering team from customer bug triage. We provide technically proficient helpdesk engineers who diagnose, troubleshoot, and resolve technical issues 24/7.",
    badges: ["Tier 1, Tier 2 & Tier 3 Engineers", "Software, SaaS & Cloud Troubleshooting", "Hardware & IoT Diagnostics", "Jira & GitHub Integration", "API & Webhook Debugging", "Strict Resolution Time SLAs"],
    challenge: {
      title: "Why Software Developers Shouldn't Do Tier 1 Support",
      description: "When core software engineers are constantly pulled off feature sprints to answer customer bug tickets, product roadmaps stall. Dedicated technical support engineers keep developers focused on building while ensuring customers receive rapid technical resolutions.",
      points: [
        "Expensive core software engineers bogged down answering repetitive configuration tickets",
        "Long resolution times on complex technical inquiries causing enterprise customer dissatisfaction",
        "Lack of detailed reproduction steps when bug tickets are escalated to engineering",
        "Absence of round-the-clock technical coverage for mission-critical SaaS outages",
      ],
    },
    solutions: [
      {
        title: "Tier 1 Technical Helpdesk",
        desc: "Rapid triage, user provisioning, configuration guidance, and common technical issue resolution across web and mobile platforms.",
        deliverables: ["24/7 ticket triage and severity tagging", "Password resets & user access management", "Browser & environment compatibility checks", "Knowledge base article curation"],
      },
      {
        title: "Tier 2 Technical Troubleshooting",
        desc: "In-depth investigation of software logs, API payloads, database inconsistencies, and integration configurations.",
        deliverables: ["Log analysis (Datadog, CloudWatch)", "API request/response debugging", "Network & webhook delivery troubleshooting", "Clean bug reproduction steps for core dev teams"],
      },
      {
        title: "Tier 3 Escalation & Patch Management",
        desc: "Specialized technical engineers who interface directly with your code repository to triage edge cases and review hotfixes.",
        deliverables: ["Jira & GitHub issue escalation", "Regression reproduction environments", "SLA-backed emergency incident response", "Post-incident root cause documentation"],
      },
      {
        title: "Developer Documentation & SDK Support",
        desc: "Assist your third-party developer ecosystem with API onboarding, authentication troubleshooting, and code examples.",
        deliverables: ["API documentation maintenance", "Developer forum & Discord moderation", "Sample code snippet production", "Partner technical onboarding calls"],
      },
    ],
    process: [
      { step: "01", title: "Technical Stack & Architecture Onboarding", desc: "Our technical leads review your product documentation, API schemas, logging platforms, and escalation protocols." },
      { step: "02", title: "Simulation & Sandbox Training", desc: "Support engineers practice diagnosing real historical bug cases in a sandbox staging environment." },
      { step: "03", title: "Live Shadowing & Ticket Graduation", desc: "Engineers resolve live tickets alongside your internal team, achieving 100% compliance with escalation criteria." },
      { step: "04", title: "24/7 Autonomous Helpdesk Operation", desc: "Full round-the-clock operational coverage with automated alerting and detailed weekly SLA reports." },
    ],
    techStack: ["Jira Service Management", "Zendesk Support", "Postman", "Datadog", "GitHub / GitLab", "AWS CloudWatch", "PagerDuty", "Chrome DevTools"],
    caseStudies: [
      { name: "BenchKart", category: "B2B Tech Platform", summary: "Provided Tier 1 and Tier 2 technical helpdesk for enterprise buyers and vendors on the marketplace platform.", route: "/work/#benchkart" },
      { name: "StarAgri", category: "Agritech Systems", summary: "Delivered remote technical troubleshooting for warehouse tablet software and handheld barcode scanners.", route: "/work/#staragri" },
    ],
    faqs: [
      { question: "What technical qualifications do your support engineers have?", answer: "Our technical support specialists hold degrees in Computer Science or Information Technology and possess practical experience with SQL, REST APIs, JSON, Git, and cloud logging tools." },
      { question: "How do your agents escalate genuine bugs to our core developers?", answer: "When an issue is identified as a legitimate code bug, our Tier 2 engineers compile a structured ticket in Jira or GitHub with exact reproduction steps, browser/OS environment details, error logs, and network payloads so your developers can fix it immediately." },
      { question: "Can you provide 24/7/365 coverage including weekends and holidays?", answer: "Yes. We maintain a follow-the-sun operational schedule providing continuous coverage across all global time zones, including weekends and public holidays." },
    ],
  },
  "back-office-outsourcing": {
    slug: "back-office-outsourcing",
    route: "/bpo-services/back-office-outsourcing",
    parentRoute: "/bpo-services",
    parentLabel: "BPO Services",
    title: "Back Office Outsourcing Services | Data Entry & Processing | SARS Global",
    eyebrow: "BPO & Operational Excellence",
    metaDescription: "Streamline repetitive administrative operations with SARS Global's back office outsourcing: data entry, document processing, invoice reconciliation, and content moderation.",
    heroHeadline: "Scalable Back-Office Outsourcing That Keeps Operations Moving",
    heroSubheadline: "Eliminate administrative backlogs and reduce operational overhead. We deliver accurate, technology-enabled back-office processing teams with 99.8%+ data accuracy guarantees.",
    badges: ["Data Entry & Cleansing", "Document & Invoice Processing", "Content & Catalog Moderation", "ERP & Accounting Reconciliation", "99.8%+ Data Accuracy", "SOC 2 & ISO 27001 Compliance"],
    challenge: {
      title: "The Drag of Administrative Bottlenecks",
      description: "When high-value strategic employees spend hours on manual document verification, spreadsheet reconciliation, and data entry, operational costs rise and fulfillment times slow down dramatically.",
      points: [
        "Mounting backlogs of unprocessed invoices, applications, and customer onboarding files",
        "High error rates in manual data transcription causing accounting discrepancies",
        "Expensive domestic labor costs for routine administrative and clerical tasks",
        "Difficulty scaling back-office operations during peak seasonal surges",
      ],
    },
    solutions: [
      {
        title: "High-Volume Data Entry & Cleansing",
        desc: "Fast, accurate transcription of analog and digital data into your CRM, ERP, or proprietary operational software.",
        deliverables: ["Double-entry verification methodology", "Database deduplication and normalization", "Spreadsheet cleanup and formatting", "Daily throughput and accuracy reporting"],
      },
      {
        title: "Document Verification & KYC Processing",
        desc: "Rapid review and verification of identification documents, financial statements, insurance claims, and legal contracts.",
        deliverables: ["Identity document & address verification", "Loan and credit application review", "Insurance claims document validation", "Compliance audit trail logging"],
      },
      {
        title: "Invoice Processing & Accounts Payable",
        desc: "Extract, verify, and match vendor invoices against purchase orders and receipts in your accounting software.",
        deliverables: ["Three-way purchase order matching", "QuickBooks, Xero & NetSuite data entry", "Vendor payment schedule tracking", "Discrepancy resolution workflows"],
      },
      {
        title: "Content & eCommerce Catalog Moderation",
        desc: "Ensure user-generated content, marketplace listings, and product catalogs adhere strictly to your brand guidelines and safety rules.",
        deliverables: ["Product listing taxonomy categorization", "Image and text community moderation", "Review verification & spam removal", "Copyright and trademark infringement checks"],
      },
    ],
    process: [
      { step: "01", title: "Workflow Standardization & SOPs", desc: "We document your exact processing steps, business rules, edge cases, and accuracy benchmarks into standard operating procedures." },
      { step: "02", title: "Tooling & Secure Access Setup", desc: "We configure encrypted VPN access, multi-factor authentication, and data isolation controls on our secure workstations." },
      { step: "03", title: "Pilot Processing & Quality Benchmarks", desc: "Our team executes sample batches with 100% senior QA inspection until reaching 99.8%+ accuracy benchmarks." },
      { step: "04", title: "Full Scale Processing & Governance", desc: "We manage daily batch volumes with dedicated shift supervisors, providing real-time turnaround reports." },
    ],
    techStack: ["QuickBooks", "NetSuite", "Xero", "Google Sheets / Excel", "Shopify Admin", "Airtable", "AWS Textract", "Zendesk"],
    caseStudies: [
      { name: "StarAgri", category: "Agri-Warehousing", summary: "Processed and reconciled thousands of daily agricultural warehouse receipts and grain inspection logs with 99.9% accuracy.", route: "/work/#staragri" },
      { name: "BenchKart", category: "B2B Marketplace", summary: "Moderated vendor service listings and validated corporate registration documents for enterprise procurement.", route: "/work/#benchkart" },
    ],
    faqs: [
      { question: "How do you guarantee data accuracy?", answer: "We utilize structured Quality Assurance (QA) workflows including dual-pass data entry, automated validation scripts, and continuous randomized sample audits conducted by dedicated team supervisors to ensure 99.8%+ accuracy." },
      { question: "How is our company and customer privacy maintained?", answer: "All back-office work is performed on secure, monitored workstations with disabled USB ports, strict access control, encrypted VPN tunnels, and comprehensive non-disclosure agreements (NDAs) adhering to ISO 27001 data protection standards." },
      { question: "Can your team scale up or down during seasonal business peaks?", answer: "Yes. Our flexible staffing model allows you to scale team size up during holiday or seasonal surges and scale down during slower periods without incurring severance or recruiting overhead." },
    ],
  },
};

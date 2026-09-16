import Image from "next/image";
import Link from "next/link";
import { BodyClass } from "@/components/layout/BodyClass";
import { BpoEngagementSwitcher } from "@/components/bpo/BpoEngagementSwitcher";
import { BpoFaqAccordion } from "@/components/bpo/BpoFaqAccordion";
import { StructuredData } from "@/components/ui/StructuredData";
import { makePageMetadata } from "@/content/metadata";
import { getPageByRoute } from "@/content/pages";

export const metadata = makePageMetadata("/bpo-services");

const modelCards = [
  ["01", "Client Process", "Business rules, customer journeys, scripts, systems and operating priorities."],
  ["02", "Managed by SARS Global", "People, process, technology, quality and reporting managed through one delivery structure."],
  ["03", "Business Outcomes", "Cleaner operations, faster response cycles, visible performance and room to scale."],
] as const;

const operatingLayers = [
  "Agents and executives",
  "Team leaders",
  "Supervisors",
  "Operations management",
  "Training and SOP",
  "Technology platforms",
  "Quality assurance",
  "Reporting",
  "Performance reviews",
  "Escalation management",
];

const services = [
  {
    number: "01",
    label: "Customer Experience",
    title: "Customer Support Outsourcing",
    copy: "Support teams trained around your product, tone, escalation rules and customer expectations.",
    items: ["Inbound customer support", "Email support", "Live chat support", "Complaint handling", "Query resolution", "Order support", "Customer follow-ups"],
    channels: ["Voice", "Email", "Chat", "WhatsApp", "CRM", "Ticketing"],
    cta: "Discuss Customer Support",
  },
  {
    number: "02",
    label: "Sales Operations",
    title: "Sales and Lead Generation Support",
    copy: "Structured sales support that keeps pipeline activity organized, responsive and reportable.",
    items: ["Outbound calling", "Lead qualification", "Appointment setting", "CRM data updates", "Follow-up calling", "Event and campaign calling", "Inside sales support"],
    channels: ["Calling", "Leads", "CRM", "Follow-up"],
    cta: "Discuss Sales Support",
  },
  {
    number: "03",
    label: "Product Support",
    title: "Technical Support Outsourcing",
    copy: "Process-driven support for software, websites, digital products and internal platforms.",
    items: ["Software support", "Website support", "Product troubleshooting", "Ticket management", "User assistance", "Technical query handling", "Escalation coordination"],
    channels: ["Helpdesk", "Tickets", "Product", "SLA"],
    cta: "Discuss Technical Support",
  },
  {
    number: "04",
    label: "Back Office",
    title: "Back Office Operations",
    copy: "Reliable operational support for recurring tasks that need structure, accuracy and oversight.",
    items: ["Data entry", "Data verification", "Order processing", "Document processing", "Database management", "Admin support", "Report preparation"],
    channels: ["Data", "Docs", "Admin", "Reports"],
    cta: "Discuss Back Office",
  },
  {
    number: "05",
    label: "Managed Contact Center",
    title: "Contact Center Management",
    copy: "End-to-end management for contact-center workflows that need staffing, training, quality control, supervision and operational reporting.",
    items: ["Team setup", "Process training", "Call quality monitoring", "SLA monitoring", "Team lead and supervisor support", "Performance reporting", "Escalation handling"],
    channels: ["Teams", "QA", "SLA", "Reporting"],
    cta: "Discuss Contact Center Management",
  },
];

const teamRoles = [
  ["01", "Agents / Executives", "Handle customer interactions, tickets, calls, data tasks and workflow activity."],
  ["02", "Team Leads", "Guide daily operations, review performance and support issue resolution."],
  ["03", "Supervisors / QA", "Monitor quality, review calls or tickets and strengthen process discipline."],
  ["04", "Operations Manager", "Own reporting, escalations, client coordination and continuous improvement."],
] as const;

const processSteps = [
  ["01", "Process Discovery", "Understand workflow, users, channels, tools and business priorities."],
  ["02", "SOP Mapping", "Document steps, rules, exceptions, response paths and approval points."],
  ["03", "Team Planning", "Define roles, supervision model, shifts, languages and reporting ownership."],
  ["04", "Tools Setup", "Align CRM, helpdesk, calling, chat, dashboards and access requirements."],
  ["05", "Training", "Train teams on process, product, brand tone, system usage and escalation."],
  ["06", "Pilot Run", "Run controlled operations, observe issues and tune SOPs before expansion."],
  ["07", "Quality Review", "Audit performance, calibrate QA and review early reporting insights."],
  ["08", "Scale Operations", "Increase volume, stabilize cadence and keep improving through reporting."],
] as const;

const qualityMetrics = [
  "Response Time Tracked",
  "Resolution Status Reported",
  "QA Scorecards Audited",
  "Escalations Reviewed",
  "Lead Outcomes Visible",
  "Backlog Managed",
  "SLA monitoring",
  "Call and ticket quality checks",
  "Supervisor reviews",
  "Process improvement cycles",
  "Client reporting cadence",
  "Escalation tracking",
];

const techFeatures = [
  ["CRM and Helpdesk", "Work inside approved systems or plan the right tool setup for tickets, contacts and pipeline activity."],
  ["Workflow Automation", "Reduce repetitive updates, route work, trigger reminders and keep process data moving cleanly."],
  ["Dashboards", "Track the agreed indicators for customer support, sales follow-ups, technical tickets and back-office work."],
  ["Knowledge Base", "Maintain scripts, FAQs, SOPs, escalation notes and response templates for consistent execution."],
] as const;

const engagementModels = [
  ["Process-Based Outsourcing", "One defined workflow, clear SOPs, agreed handoffs and recurring reporting."],
  ["Dedicated Team Model", "A named operations team aligned to your systems, customers and daily rhythm."],
  ["Project or Campaign Support", "Short-term support for launches, events, campaigns, data cleanup or seasonal volume."],
  ["Managed Contact Center", "Team, training, QA, escalation and reporting managed under one operational model."],
] as const;

const industries = [
  "E-commerce",
  "Real Estate",
  "Education and EdTech",
  "SaaS and Technology",
  "Travel and Hospitality",
  "Automotive",
  "Professional Services",
  "Consumer Brands",
];

const whyItems = [
  ["Process-first setup", "SOPs, escalation rules and reporting expectations are defined before scale."],
  ["Digital-native teams", "Teams can work across CRM, ticketing, communication and analytics tools."],
  ["Quality discipline", "QA reviews, training loops and supervisor oversight help protect consistency."],
  ["Flexible scale", "Start with one process and expand into broader managed operations."],
  ["Clear reporting", "Dashboards and reports focus on the indicators that matter to your workflow."],
  ["Brand-aware support", "Scripts, tone and customer communication align with your brand standards."],
  ["Continuous improvement", "Recurring reviews identify process gaps, training needs and optimization opportunities."],
  ["One accountable partner", "Operations management, QA, reporting and escalation live within one delivery structure."],
] as const;

const faqs = [
  ["What is Business Process Outsourcing?", "Business Process Outsourcing means assigning defined customer experience, support, sales or operations processes to a managed external team that works through documented workflows, quality checks and performance reporting."],
  ["What processes can SARS Global manage?", "SARS GLOBAL can support customer service, inbound and outbound calling, lead qualification, appointment setting, technical support, contact-center operations, data entry, order processing, CRM updates and back-office workflows."],
  ["Do you provide customer support outsourcing?", "Yes. SARS GLOBAL can help manage customer queries across supported channels with trained agents, escalation flows, response templates, quality checks and reporting."],
  ["Can SARS Global handle inbound and outbound calling?", "Yes. Calling support can be planned around the client's process, audience, scripts, compliance needs, reporting requirements and approved operating hours."],
  ["Do you provide technical support?", "SARS GLOBAL supports software, website and product support processes such as issue intake, troubleshooting guidance, ticket updates, user assistance and escalation coordination."],
  ["Do you offer dedicated BPO teams?", "Yes. Dedicated teams can be structured with agents, team leads, supervisors, operations management, QA and reporting based on the scope and volume of the process."],
  ["Can you work with our existing CRM or helpdesk?", "Yes. SARS GLOBAL can work with existing CRM, helpdesk, ticketing and communication tools, or help define the required technology stack during process setup."],
  ["Do you provide SOP and script support?", "Yes. SARS GLOBAL can help structure SOPs, scripts, response templates, escalation rules, process documentation and quality guidelines."],
  ["How long does it take to start a BPO process?", "The setup timeline depends on process complexity, volume, training requirements, systems access and approvals. SARS GLOBAL starts with discovery, SOP planning, team setup, training and a pilot before scaling."],
  ["Do you support domestic and international operations?", "Yes. SARS GLOBAL can plan domestic or international process support based on language, working hours, market expectations, tools and compliance requirements."],
  ["How do you maintain quality?", "Quality is managed through SOPs, training, QA scorecards, audits, supervisor reviews, escalation workflows, reporting and recurring performance improvement cycles."],
  ["Do you provide reporting?", "Yes. Reporting can include ticket trends, response performance, resolution tracking, call outcomes, lead status, QA observations, SLA adherence and process improvement insights."],
  ["Can I outsource only one process?", "Yes. You can start with one defined process such as lead qualification, customer support, ticket handling, data entry or appointment setting and expand as the workflow stabilizes."],
  ["Do you provide AI automation inside BPO workflows?", "SARS GLOBAL can support technology-enabled workflows using automation, CRM integrations, templates and reporting systems where they fit the process. Human operations and clear quality control remain central."],
  ["How do we get started?", "Share the process you want to outsource, expected volume, channels, tools, working hours and target markets through the requirement form. SARS GLOBAL will review the scope and respond with next steps."],
] as const;

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

export default function Page() {
  const page = getPageByRoute("/bpo-services");

  return (
    <>
      <BodyClass className={page.bodyClass} />
      <StructuredData items={page.structuredData} />
      <main id="main" className="sars-page-main">
        <div className="sars-bpo-page sars-bpo-page--light">
          <section className="sars-bpo-hero sars-bpo-page__reveal" data-nav-theme="light" aria-labelledby="bpo-hero-title">
            <div className="sars-bpo-page__container sars-bpo-hero__grid">
              <div className="sars-bpo-hero__copy">
                <p className="sars-bpo-page__eyebrow">Customer Experience &amp; Business Operations</p>
                <h1 id="bpo-hero-title" className="sars-bpo-page__display">Business Process Outsourcing Built to Scale</h1>
                <p className="sars-bpo-page__lead">SARS GLOBAL provides technology-enabled business process outsourcing across customer experience, sales, technical support, contact-center operations and back-office processes through dedicated teams, structured workflows, quality management and measurable performance.</p>
                <div className="sars-bpo-page__actions" aria-label="Business Process Outsourcing actions">
                  <a className="sars-bpo-button sars-bpo-button--primary" href="#bpo-requirement" data-bpo-track="hero_primary_cta">Discuss Your BPO Requirement <Arrow /></a>
                  <a className="sars-bpo-button sars-bpo-button--secondary" href="#bpo-solutions" data-bpo-track="hero_secondary_cta">Explore BPO Solutions <Arrow /></a>
                </div>
                <div className="sars-bpo-hero__proof" aria-label="Business Process Outsourcing model highlights">
                  <span>Dedicated teams</span>
                  <span>Documented SOPs</span>
                  <span>Quality monitoring</span>
                  <span>Performance reporting</span>
                </div>
              </div>

              <div className="sars-bpo-hero__visual" aria-label="Managed operations command center preview">
                <figure className="sars-bpo-visual-card">
                  <Image src="/assets/img/sars-hero-visual.png" alt="Technology-enabled operations dashboard for managed BPO workflows" width={900} height={540} priority />
                </figure>
                <div className="sars-bpo-ops-card">
                  <div>
                    <span>Live process view</span>
                    <strong>SARS Operations Desk</strong>
                  </div>
                  <ul aria-label="Active support channels">
                    <li>Voice</li>
                    <li>Email</li>
                    <li>Chat</li>
                    <li>CRM</li>
                  </ul>
                  <div className="sars-bpo-ops-card__metrics">
                    <span><strong>QA</strong> Monitored</span>
                    <span><strong>SLA</strong> Tracked</span>
                    <span><strong>Reports</strong> Scheduled</span>
                  </div>
                  <p>Escalation flow: Agent -&gt; Team Lead -&gt; Supervisor</p>
                </div>
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-section--soft sars-bpo-model" data-nav-theme="light" aria-labelledby="bpo-model-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Operating Model</p>
                  <h2 id="bpo-model-title" className="sars-bpo-page__heading">Your Process. Our Team. Managed End-to-End.</h2>
                </div>
                <p>Outsourcing works when people, process, technology and reporting are connected from day one. SARS GLOBAL structures the operation around your workflow, not around a generic call-center template.</p>
              </div>
              <div className="sars-bpo-model__grid">
                {modelCards.map(([step, title, copy]) => (
                  <article className="sars-bpo-model-card sars-bpo-page__reveal" key={title}>
                    <span>{step}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
              <div className="sars-bpo-layer sars-bpo-page__reveal">
                <p>Managed by SARS GLOBAL</p>
                <div>{operatingLayers.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </div>
          </section>

          <section className="sars-bpo-section" id="bpo-solutions" data-nav-theme="light" aria-labelledby="bpo-solutions-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Core Solutions</p>
                  <h2 id="bpo-solutions-title" className="sars-bpo-page__heading">Business Process Outsourcing for customer-facing and operational work.</h2>
                </div>
                <p>Choose a single process, combine multiple workflows or build a dedicated operations unit managed by SARS GLOBAL.</p>
              </div>
              <div className="sars-bpo-services-grid">
                {services.map((service) => (
                  <article className="sars-bpo-service-card sars-bpo-page__reveal" key={service.title}>
                    <div className="sars-bpo-service-card__top">
                      <span>{service.number}</span>
                      <p>{service.label}</p>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    <div className="sars-bpo-chip-row">{service.channels.map((channel) => <span key={channel}>{channel}</span>)}</div>
                    <a className="sars-bpo-text-link" href="#bpo-requirement" data-bpo-track={`${service.number}_service_cta`}>{service.cta} <Arrow /></a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-omni" data-nav-theme="light" aria-labelledby="bpo-omni-title">
            <div className="sars-bpo-page__container sars-bpo-omni__grid">
              <div className="sars-bpo-page__reveal">
                <p className="sars-bpo-page__eyebrow">Omnichannel Operations</p>
                <h2 id="bpo-omni-title" className="sars-bpo-page__heading">Every Customer. Every Supported Channel.</h2>
                <p className="sars-bpo-page__lead">Calls, email, chat, WhatsApp, CRM and ticketing activity can be handled through a unified process view so teams know what happened, what is pending and what needs escalation.</p>
                <div className="sars-bpo-page__actions">
                  <a className="sars-bpo-button sars-bpo-button--secondary" href="#bpo-requirement" data-bpo-track="omnichannel_requirement_cta">Plan Your Workflow <Arrow /></a>
                </div>
              </div>
              <div className="sars-bpo-channel-board sars-bpo-page__reveal" aria-label="Unified operations channels">
                {["Voice", "Email", "Live Chat", "WhatsApp", "CRM", "Ticketing", "QA", "Reporting"].map((channel) => <span key={channel}>{channel}</span>)}
                <strong>Unified Operations View</strong>
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-section--soft" data-nav-theme="light" aria-labelledby="bpo-team-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Dedicated Teams</p>
                  <h2 id="bpo-team-title" className="sars-bpo-page__heading">A team structure built around your process volume.</h2>
                </div>
                <p>From one function to a managed operations unit, SARS GLOBAL can structure staffing and supervision around the complexity of the workflow.</p>
              </div>
              <div className="sars-bpo-role-grid">
                {teamRoles.map(([number, title, copy]) => (
                  <article className="sars-bpo-role-card sars-bpo-page__reveal" key={title}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section" data-nav-theme="light" aria-labelledby="bpo-process-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Launch Lifecycle</p>
                  <h2 id="bpo-process-title" className="sars-bpo-page__heading">From process discovery to stable operations.</h2>
                </div>
                <p>A clear eight-step setup gives every outsourced process a proper start before scale.</p>
              </div>
              <div className="sars-bpo-process-grid">
                {processSteps.map(([number, title, copy]) => (
                  <article className="sars-bpo-process-step sars-bpo-page__reveal" key={title}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-orange-panel" data-nav-theme="light" aria-labelledby="bpo-quality-title">
            <div className="sars-bpo-page__container sars-bpo-orange-panel__grid">
              <div className="sars-bpo-page__reveal">
                <p className="sars-bpo-page__eyebrow">Quality and Performance</p>
                <h2 id="bpo-quality-title" className="sars-bpo-page__heading">Operational visibility without vanity numbers.</h2>
                <p>Every metric should be tied to the actual process. SARS GLOBAL builds reporting around the indicators that matter for your workflow.</p>
              </div>
              <div className="sars-bpo-metric-grid sars-bpo-page__reveal">
                {qualityMetrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-section--dark sars-bpo-tech" data-nav-theme="dark" aria-labelledby="bpo-tech-title">
            <div className="sars-bpo-page__container sars-bpo-tech__grid">
              <div className="sars-bpo-page__reveal">
                <p className="sars-bpo-page__eyebrow">Technology-Enabled BPO</p>
                <h2 id="bpo-tech-title" className="sars-bpo-page__heading">Human operations supported by smarter systems.</h2>
                <p>Technology strengthens visibility, handoffs and consistency. The operations team remains accountable for the process, customer experience and quality outcomes.</p>
              </div>
              <div className="sars-bpo-tech__cards">
                {techFeatures.map(([title, copy]) => (
                  <article className="sars-bpo-page__reveal" key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section" data-nav-theme="light" aria-labelledby="bpo-models-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Engagement Models</p>
                  <h2 id="bpo-models-title" className="sars-bpo-page__heading">Start narrow, expand when the process proves itself.</h2>
                </div>
                <p>Pick the operating model that matches your current business requirement.</p>
              </div>
              <BpoEngagementSwitcher models={engagementModels} />
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-section--soft" data-nav-theme="light" aria-labelledby="bpo-industries-title">
            <div className="sars-bpo-page__container sars-bpo-industries__grid">
              <div className="sars-bpo-page__reveal">
                <p className="sars-bpo-page__eyebrow">Industries</p>
                <h2 id="bpo-industries-title" className="sars-bpo-page__heading">Flexible support for growth-focused sectors.</h2>
                <p>Each industry needs a different tone, workflow and reporting model. SARS GLOBAL adapts the operation around those details.</p>
              </div>
              <div className="sars-bpo-industries-list sars-bpo-page__reveal">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div>
            </div>
          </section>

          <section className="sars-bpo-section" data-nav-theme="light" aria-labelledby="bpo-why-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Why SARS GLOBAL</p>
                  <h2 id="bpo-why-title" className="sars-bpo-page__heading">Built for brands that need accountable operations.</h2>
                </div>
                <p>SARS GLOBAL connects operations thinking with digital systems, training discipline and process visibility.</p>
              </div>
              <div className="sars-bpo-why-grid">
                {whyItems.map(([title, copy]) => (
                  <article className="sars-bpo-mini-card sars-bpo-page__reveal" key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-choice" data-nav-theme="light" aria-labelledby="bpo-choice-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">Choose the right service</p>
                  <h2 id="bpo-choice-title" className="sars-bpo-page__heading">Business Process Outsourcing or Hire Talent?</h2>
                </div>
                <p>Both services can help you scale, but they solve different problems.</p>
              </div>
              <div className="sars-bpo-choice__grid">
                <article className="sars-bpo-choice-card sars-bpo-page__reveal">
                  <span>Managed process</span>
                  <h3>Business Process Outsourcing</h3>
                  <p>Choose this when you want SARS GLOBAL to manage a customer support, sales support, technical support, contact-center or back-office process with team structure, SOPs, QA and reporting.</p>
                  <a className="sars-bpo-button sars-bpo-button--primary" href="#bpo-requirement" data-bpo-track="choice_bpo_cta">Outsource a Process <Arrow /></a>
                </article>
                <article className="sars-bpo-choice-card sars-bpo-page__reveal">
                  <span>Individual experts</span>
                  <h3>Hire Talent</h3>
                  <p>Choose this when you need developers, designers or technical specialists to join your internal team and work under your management.</p>
                  <Link className="sars-bpo-button sars-bpo-button--secondary" href="/hire-talent/" data-bpo-track="choice_hire_talent_cta">Explore Hire Talent <Arrow /></Link>
                </article>
              </div>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-case-note" data-nav-theme="light" aria-labelledby="bpo-case-title">
            <div className="sars-bpo-page__container sars-bpo-case-note__inner sars-bpo-page__reveal">
              <p className="sars-bpo-page__eyebrow">Operations in Action</p>
              <h2 id="bpo-case-title" className="sars-bpo-page__heading">Case Studies Coming Soon</h2>
              <p>SARS GLOBAL is preparing verified Business Process Outsourcing case studies with process scope, operating model and approved outcomes. Until then, this page avoids unsupported claims or invented metrics.</p>
              <a className="sars-bpo-button sars-bpo-button--secondary" href="#bpo-requirement" data-bpo-track="case_note_cta">Talk to Our Team <Arrow /></a>
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-section--soft sars-bpo-faq" data-nav-theme="light" aria-labelledby="bpo-faq-title">
            <div className="sars-bpo-page__container">
              <div className="sars-bpo-page__section-head sars-bpo-page__reveal">
                <div>
                  <p className="sars-bpo-page__eyebrow">FAQ</p>
                  <h2 id="bpo-faq-title" className="sars-bpo-page__heading">Questions before outsourcing a process?</h2>
                </div>
                <p>Here are the practical details businesses usually need before handing over customer or operations work.</p>
              </div>
              <BpoFaqAccordion faqs={faqs} />
            </div>
          </section>

          <section className="sars-bpo-section sars-bpo-form-section" id="bpo-requirement" data-nav-theme="light" aria-labelledby="bpo-form-title">
            <div className="sars-bpo-page__container sars-bpo-form-section__grid">
              <div className="sars-bpo-form-section__copy sars-bpo-page__reveal">
                <p className="sars-bpo-page__eyebrow">BPO Requirement Form</p>
                <h2 id="bpo-form-title" className="sars-bpo-page__heading">Tell us the process you want to outsource.</h2>
                <p>Share the essentials. SARS GLOBAL will review your scope and recommend the right setup path.</p>
                <div className="sars-bpo-form-section__notes" aria-label="Requirement planning checklist">
                  <span>Process scope</span>
                  <span>Team model</span>
                  <span>Tools and access</span>
                </div>
              </div>

              <form className="sars-bpo-form sars-bpo-compact-form sars-bpo-page__reveal" action="/contact/" method="post" data-contact-form data-bpo-form>
                <input type="hidden" name="form_source" value="bpo_services" />
                <input type="hidden" name="selected_service" value="Business Process Outsourcing" />
                <input type="hidden" name="landing_page" value="/bpo-services/" />
                <input type="hidden" name="utm_source" data-utm-field="utm_source" />
                <input type="hidden" name="utm_medium" data-utm-field="utm_medium" />
                <input type="hidden" name="utm_campaign" data-utm-field="utm_campaign" />
                <input type="hidden" name="utm_content" data-utm-field="utm_content" />
                <input type="hidden" name="utm_term" data-utm-field="utm_term" />
                <input type="hidden" name="lead_source" data-lead-source />
                <label className="sars-bpo-page__honeypot" aria-hidden="true">
                  Leave this field empty
                  <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                </label>
                <div className="sars-bpo-compact-form__grid">
                  <label>Full Name<input type="text" name="full_name" placeholder="Your full name" required autoComplete="name" /></label>
                  <label>Work Email<input type="email" name="email" placeholder="name@company.com" required autoComplete="email" /></label>
                  <label>Phone Number<input type="tel" name="phone" placeholder="+91 98765 43210" required autoComplete="tel" /></label>
                  <label>Company Name<input type="text" name="company" placeholder="Company name" required autoComplete="organization" /></label>
                  <label className="sars-bpo-compact-form__wide">Service Required<select name="process_required" required defaultValue=""><option value="" disabled>Select service</option><option>Customer Support</option><option>Sales and Lead Generation</option><option>Technical Support</option><option>Back Office Operations</option><option>Contact Center Management</option><option>Multiple Processes</option><option>Not Sure</option></select></label>
                  <label className="sars-bpo-compact-form__wide">Short Message / Requirement<textarea name="requirement_details" rows={3} placeholder="Tell us about the process, channels, team size, tools or current challenge." required /></label>
                </div>
                <button className="sars-bpo-button sars-bpo-button--primary" type="submit" data-bpo-track="form_submit_button">Submit BPO Requirement <Arrow /></button>
                <p className="sars-form__status" data-form-status aria-live="polite" />
              </form>
            </div>
          </section>

          <section className="sars-bpo-final" data-nav-theme="dark" aria-labelledby="bpo-final-title">
            <div className="sars-bpo-page__container sars-bpo-final__inner sars-bpo-page__reveal">
              <p className="sars-bpo-page__eyebrow">Ready to Outsource?</p>
              <h2 id="bpo-final-title" className="sars-bpo-page__heading">Build a reliable operations layer around your business.</h2>
              <p>Start with one process or plan a complete managed support function with SARS GLOBAL.</p>
              <div className="sars-bpo-page__actions">
                <a className="sars-bpo-button sars-bpo-button--primary" href="#bpo-requirement" data-bpo-track="final_requirement_cta">Share Your Requirement <Arrow /></a>
                <a className="sars-bpo-button sars-bpo-button--secondary" href="mailto:business@sarsglobal.io" data-bpo-track="email_cta_click">business@sarsglobal.io <Arrow /></a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

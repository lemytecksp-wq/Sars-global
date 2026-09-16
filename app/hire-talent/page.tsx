import { BodyClass } from "@/components/layout/BodyClass";
import { HireHero } from "@/components/hire/HireHero";
import { HireRolesTabs } from "@/components/hire/HireRolesTabs";
import { HireImpactSection } from "@/components/hire/HireImpactSection";
import { StructuredData } from "@/components/ui/StructuredData";
import { makePageMetadata } from "@/content/metadata";
import { getPageByRoute } from "@/content/pages";

export const metadata = makePageMetadata("/hire-talent");

const heroEndTag = "</section>";
const rolesSectionStart = '<section class="sars-hire-page__section sars-hire-page__roles-section"';
const impactSectionStart =
  '<section class="sars-hire-page__section sars-hire-page__section--orange" data-nav-theme="light" aria-labelledby="hire-impact-title">';

function getHireTalentHtmlParts() {
  const page = getPageByRoute("/hire-talent");
  const pageInnerHtml = page.mainHtml
    .replace(/^<div class="sars-hire-page">\n?/, "")
    .replace(/\n?\s*<\/div>$/, "");

  const heroEndIndex = pageInnerHtml.indexOf(heroEndTag);
  const heroSliceEnd = heroEndIndex >= 0 ? heroEndIndex + heroEndTag.length : 0;

  const rolesStartIndex = pageInnerHtml.indexOf(rolesSectionStart);
  const impactStartIndex = pageInnerHtml.indexOf(impactSectionStart);
  const impactEndIndex =
    impactStartIndex >= 0
      ? pageInnerHtml.indexOf(heroEndTag, impactStartIndex) + heroEndTag.length
      : -1;

  if (rolesStartIndex < 0 || impactStartIndex < 0 || impactEndIndex <= impactStartIndex) {
    throw new Error("Unable to split Hire Talent sections.");
  }

  return {
    page,
    betweenHeroAndRoles: pageInnerHtml.slice(heroSliceEnd, rolesStartIndex),
    afterImpact: pageInnerHtml.slice(impactEndIndex),
  };
}

function TalentReportSignup() {
  return (
    <section className="sars-footer__newsletter" aria-labelledby="talent-report-title">
      <div>
        <h3 id="talent-report-title">Get the Talent Report</h3>
        <p>Weekly insights on tech hiring trends, salary benchmarks, and in-demand roles.</p>
      </div>
      <form className="sars-footer-newsletter" action="/contact/" method="post" data-talent-report-form noValidate>
        <input type="hidden" name="form_source" value="talent_report" />
        <label htmlFor="hire-talent-report-email">Work email</label>
        <div className="sars-footer-newsletter__control">
          <input
            id="hire-talent-report-email"
            name="email"
            type="email"
            placeholder="Enter your work email"
            autoComplete="email"
            required
          />
          <button type="submit">Subscribe &rarr;</button>
        </div>
        <p className="sars-footer-newsletter__status" data-talent-report-status aria-live="polite" />
      </form>
    </section>
  );
}

export default function Page() {
  const { page, betweenHeroAndRoles, afterImpact } = getHireTalentHtmlParts();

  return (
    <>
      <BodyClass className={page.bodyClass} />
      <StructuredData items={page.structuredData} />
      <main id="main" className="sars-page-main">
        <div className="sars-hire-page">
          <HireHero />
          <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: betweenHeroAndRoles }} />
          <HireRolesTabs />
          <HireImpactSection />
          <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: afterImpact }} />
          <TalentReportSignup />
        </div>
      </main>
    </>
  );
}

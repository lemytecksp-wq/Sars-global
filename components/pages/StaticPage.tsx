import { BodyClass } from "@/components/layout/BodyClass";
import { StructuredData } from "@/components/ui/StructuredData";
import { getPageByRoute } from "@/content/pages";

type StaticPageProps = {
  route: string;
};

export function StaticPage({ route }: StaticPageProps) {
  const page = getPageByRoute(route);

  return (
    <>
      <BodyClass className={page.bodyClass} />
      <StructuredData items={page.structuredData} />
      <main
        id="main"
        className="sars-page-main"
        dangerouslySetInnerHTML={{ __html: page.mainHtml }}
      />
    </>
  );
}

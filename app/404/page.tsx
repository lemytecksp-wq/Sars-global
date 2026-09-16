import { StaticPage } from "@/components/pages/StaticPage";
import { makePageMetadata } from "@/content/metadata";

export const metadata = makePageMetadata("/404");

export default function Page() {
  return <StaticPage route="/404" />;
}

import { StaticPage } from "@/components/pages/StaticPage";
import { makePageMetadata } from "@/content/metadata";

export const metadata = makePageMetadata("/privacy");

export default function Page() {
  return <StaticPage route="/privacy" />;
}

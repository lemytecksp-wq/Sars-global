import { StaticPage } from "@/components/pages/StaticPage";
import { makePageMetadata } from "@/content/metadata";

export const metadata = makePageMetadata("/contact");

export default function Page() {
  return <StaticPage route="/contact" />;
}

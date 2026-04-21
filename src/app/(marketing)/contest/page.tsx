import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { getLandingContent } from "@/lib/marketing/content";

export const metadata = {
  title: "Contest",
  description: "Contest placeholder for the FIVIVA public landing site.",
};

export default async function ContestPage() {
  const content = await getLandingContent();
  return <PlaceholderPage {...content.placeholders.contest} />;
}

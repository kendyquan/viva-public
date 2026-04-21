import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { getLandingContent } from "@/lib/marketing/content";

export const metadata = {
  title: "Jobs",
  description: "Jobs placeholder for the FIVIVA public landing site.",
};

export default async function JobsPage() {
  const content = await getLandingContent();
  return <PlaceholderPage {...content.placeholders.jobs} />;
}

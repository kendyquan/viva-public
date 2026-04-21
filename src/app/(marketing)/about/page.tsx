import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { getLandingContent } from "@/lib/marketing/content";

export const metadata = {
  title: "About",
  description: "About the temporary FIVIVA public landing site.",
};

export default async function AboutPage() {
  const content = await getLandingContent();
  return <PlaceholderPage {...content.placeholders.about} />;
}

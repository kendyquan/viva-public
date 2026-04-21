import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { HeroBanner } from "@/components/marketing/hero-banner";
import { getLandingContent } from "@/lib/marketing/content";

export const metadata = {
  title: "Help",
  description: "Search public FIVIVA FAQs and lightweight support guidance.",
};

export default async function HelpPage() {
  const content = await getLandingContent();

  return (
    <>
      <HeroBanner
        title={content.help.title}
        compact
        searchable
      />

      <div className="marketing-stack marketing-stack--help">
        <FaqAccordion
          faqs={content.faqs}
          searchPlaceholder={content.help.searchPlaceholder}
          searchSrLabel={content.help.searchSrLabel}
          emptyStateLabel={content.help.emptyStateLabel}
          paginationAriaLabel={content.ui.paginationAriaLabel}
          paginationPreviousLabel={content.ui.paginationPreviousLabel}
          paginationNextLabel={content.ui.paginationNextLabel}
        />
      </div>
    </>
  );
}

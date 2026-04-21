import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { getLandingContent } from "@/lib/marketing/content";

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getLandingContent();

  return (
    <div
      className="marketing-shell"
      lang={content.language.selected.languageCode}
    >
      <MarketingHeader
        navigation={content.navigation}
        languages={content.language.available}
        selectedLanguage={content.language.selected}
        homeAriaLabel={content.ui.homeAriaLabel}
        openMenuLabel={content.ui.openMenuLabel}
        closeMenuLabel={content.ui.closeMenuLabel}
        languageSelectorLabel={content.ui.languageSelectorLabel}
      />
      <main className="marketing-main">{children}</main>
      <MarketingFooter
        leftText={content.footer.leftText}
        rightText={content.footer.rightText}
      />
    </div>
  );
}

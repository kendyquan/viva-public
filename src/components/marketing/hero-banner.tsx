import { HeroStoreButtons } from "@/components/marketing/hero-store-buttons";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  compact?: boolean;
  searchable?: boolean;
  children?: React.ReactNode;
}

export function HeroBanner({
  title,
  subtitle,
  appStoreUrl,
  playStoreUrl,
  compact = false,
  searchable = false,
  children,
}: HeroBannerProps) {
  return (
    <section
      className={[
        "marketing-hero",
        compact ? "marketing-hero--compact" : "",
        searchable ? "marketing-hero--searchable" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="marketing-hero__inner">
        <h1 className="marketing-hero__title">{title}</h1>

        {subtitle ? (
          <p className="marketing-hero__subtitle">{subtitle}</p>
        ) : null}

        {appStoreUrl || playStoreUrl ? (
          <HeroStoreButtons
            appStoreUrl={appStoreUrl || "#"}
            playStoreUrl={playStoreUrl || "#"}
          />
        ) : null}

        {children}
      </div>
    </section>
  );
}

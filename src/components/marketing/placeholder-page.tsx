import { HeroBanner } from "@/components/marketing/hero-banner";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  body,
}: PlaceholderPageProps) {
  return (
    <>
      <HeroBanner title={eyebrow} compact />

      <section className="marketing-placeholder">
        <div className="marketing-placeholder__card">
          <p className="marketing-placeholder__eyebrow">{eyebrow}</p>
          <h1 className="marketing-placeholder__title">{title}</h1>
          <div className="marketing-placeholder__body">{body}</div>
        </div>
      </section>
    </>
  );
}

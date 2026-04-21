import Image from "next/image";

interface HeroStoreButtonsProps {
  appStoreUrl: string;
  playStoreUrl: string;
}

interface StoreBadgeProps {
  href: string;
  eyebrow: string;
  label: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  iconClassName?: string;
}

function StoreBadge({
  href,
  eyebrow,
  label,
  iconSrc,
  iconWidth,
  iconHeight,
  iconClassName,
}: StoreBadgeProps) {
  const isDisabled = !href || href === "#";

  const content = (
    <>
      <span
        className={[
          "marketing-store-badge__icon",
          iconClassName || "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        <Image
          src={iconSrc}
          alt=""
          width={iconWidth}
          height={iconHeight}
        />
      </span>
      <span className="marketing-store-badge__copy">
        <span className="marketing-store-badge__eyebrow">{eyebrow}</span>
        <span className="marketing-store-badge__label">{label}</span>
      </span>
    </>
  );

  if (isDisabled) {
    return (
      <span
        className="marketing-store-badge"
        aria-disabled="true"
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="marketing-store-badge"
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}

export function HeroStoreButtons({
  appStoreUrl,
  playStoreUrl,
}: HeroStoreButtonsProps) {
  return (
    <div className="marketing-store-buttons">
      <StoreBadge
        href={appStoreUrl}
        eyebrow="Install FIVIVA on"
        label="App Store"
        iconSrc="/landing/store-apple.svg"
        iconWidth={40}
        iconHeight={48}
        iconClassName="marketing-store-badge__icon--apple"
      />

      <StoreBadge
        href={playStoreUrl}
        eyebrow="Install FIVIVA on"
        label="Google Play"
        iconSrc="/landing/store-play.svg"
        iconWidth={42}
        iconHeight={42}
      />
    </div>
  );
}

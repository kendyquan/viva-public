"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSelector } from "@/components/marketing/language-selector";
import { MobileNavDrawer } from "@/components/marketing/mobile-nav-drawer";
import type {
  NavigationItemModel,
  SiteLanguageModel,
} from "@/lib/marketing/dto";

interface MarketingHeaderProps {
  navigation: NavigationItemModel[];
  languages: SiteLanguageModel[];
  selectedLanguage: SiteLanguageModel;
  homeAriaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageSelectorLabel: string;
}

export function MarketingHeader({
  navigation,
  languages,
  selectedLanguage,
  homeAriaLabel,
  openMenuLabel,
  closeMenuLabel,
  languageSelectorLabel,
}: MarketingHeaderProps) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="marketing-header">
        <div className="marketing-header__inner">
          <Link
            href="/"
            className="marketing-logo"
            aria-label={homeAriaLabel}
          >
            <Image
              src="/landing/logo.svg"
              alt="FIVIVA"
              width={164}
              height={54}
              priority
            />
          </Link>

          <nav className="marketing-nav" aria-label="Primary">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "marketing-nav__link",
                    isActive ? "marketing-nav__link--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSelector
            languages={languages}
            selectedLanguage={selectedLanguage}
            ariaLabel={languageSelectorLabel}
          />

          <button
            type="button"
            className="marketing-header__menu-button"
            aria-label={openMenuLabel}
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="marketing-header__menu-lines" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNavDrawer
        isOpen={isDrawerOpen}
        pathname={pathname}
        navigation={navigation}
        languages={languages}
        selectedLanguage={selectedLanguage}
        closeMenuLabel={closeMenuLabel}
        languageSelectorLabel={languageSelectorLabel}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

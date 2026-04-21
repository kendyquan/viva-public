"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LanguageSelector } from "@/components/marketing/language-selector";
import type {
  NavigationItemModel,
  SiteLanguageModel,
} from "@/lib/marketing/dto";

interface MobileNavDrawerProps {
  isOpen: boolean;
  pathname: string;
  navigation: NavigationItemModel[];
  languages: SiteLanguageModel[];
  selectedLanguage: SiteLanguageModel;
  closeMenuLabel: string;
  languageSelectorLabel: string;
  onClose: () => void;
}

export function MobileNavDrawer({
  isOpen,
  pathname,
  navigation,
  languages,
  selectedLanguage,
  closeMenuLabel,
  languageSelectorLabel,
  onClose,
}: MobileNavDrawerProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div
      className="marketing-drawer"
      hidden={!isOpen}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="marketing-drawer__backdrop"
        aria-label={closeMenuLabel}
        onClick={onClose}
      />

      <aside
        className="marketing-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          className="marketing-drawer__close"
          aria-label={closeMenuLabel}
          onClick={onClose}
        >
          x
        </button>

        <nav className="marketing-drawer__nav">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="marketing-drawer__link"
                aria-current={isActive ? "page" : undefined}
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="marketing-drawer__spacer" />

        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          ariaLabel={languageSelectorLabel}
          variant="drawer"
        />
      </aside>
    </div>
  );
}

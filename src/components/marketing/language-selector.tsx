"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useTransition } from "react";
import { MARKETING_LANGUAGE_COOKIE } from "@/lib/marketing/i18n";
import type { SiteLanguageModel } from "@/lib/marketing/dto";

interface LanguageSelectorProps {
  languages: SiteLanguageModel[];
  selectedLanguage: SiteLanguageModel;
  ariaLabel: string;
  variant?: "header" | "drawer";
}

function uniqueLanguages(languages: SiteLanguageModel[]) {
  const seen = new Set<string>();

  return languages.filter((language) => {
    const key = language.languageCode.toLowerCase();
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export function LanguageSelector({
  languages,
  selectedLanguage,
  ariaLabel,
  variant = "header",
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startRefreshTransition] = useTransition();
  const options = useMemo(
    () => uniqueLanguages([selectedLanguage, ...languages]),
    [languages, selectedLanguage],
  );

  const handleChange = (nextLanguageCode: string) => {
    if (!nextLanguageCode || nextLanguageCode === selectedLanguage.languageCode) {
      return;
    }

    document.cookie =
      `${MARKETING_LANGUAGE_COOKIE}=${encodeURIComponent(nextLanguageCode)}; `
      + "path=/; max-age=31536000; samesite=lax";

    const nextSearch = new URLSearchParams(searchParams.toString());
    nextSearch.delete("page");
    const href = nextSearch.toString() ? `${pathname}?${nextSearch.toString()}` : pathname;

    startRefreshTransition(() => {
      router.replace(href);
      router.refresh();
    });
  };

  return (
    <div
      className={[
        "marketing-language",
        variant === "drawer" ? "marketing-language--drawer" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={selectedLanguage.flagSrc}
        alt={selectedLanguage.flagAlt}
        width={32}
        height={32}
        className="marketing-language__flag-image"
      />
      <span className="marketing-language__current">{selectedLanguage.label}</span>
      <span className="marketing-language__chevron" aria-hidden="true">
        v
      </span>
      <select
        className="marketing-language__select"
        value={selectedLanguage.languageCode}
        onChange={(event) => handleChange(event.target.value)}
        aria-label={`${ariaLabel}: ${selectedLanguage.label}`}
        disabled={options.length <= 1 || isPending}
      >
        {options.map((language) => (
          <option
            key={language.id || language.languageCode}
            value={language.languageCode}
          >
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}

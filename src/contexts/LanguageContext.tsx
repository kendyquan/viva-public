"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LangCode, Translations, TRANSLATIONS, LANGUAGES, Language } from "@/lib/i18n";

interface LanguageContextValue {
  lang: LangCode;
  t: Translations;
  language: Language;
  setLang: (code: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: TRANSLATIONS.en,
  language: LANGUAGES[0],
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem("fiviva_lang") as LangCode | null;
    if (saved && TRANSLATIONS[saved]) setLangState(saved);
  }, []);

  function setLang(code: LangCode) {
    setLangState(code);
    localStorage.setItem("fiviva_lang", code);
    document.documentElement.dir = LANGUAGES.find((l) => l.code === code)?.dir || "ltr";
  }

  const language = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], language, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

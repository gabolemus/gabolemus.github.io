import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { ReactNode } from "react";
import { US, ES } from "country-flag-icons/react/3x2";

import translationEN from "./locales/en.json";
import translationES from "./locales/es.json";

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

interface Language {
  code: string;
  icon: ReactNode;
  names: string[];
}

export const availableLanguages: Language[] = [
  {
    code: "en",
    icon: (
      <US title="United States" key={0} className="footer__language__icon" />
    ),
    names: ["English", "Inglés"],
  },
  {
    code: "es",
    icon: <ES title="España" key={1} className="footer__language__icon" />,
    names: ["Spanish", "Español"],
  },
];

export const getDefaultLanguage = () => {
  let navigatorLanguage = navigator.language.split("-")[0];
  if (
    !availableLanguages.some((language) => language.code === navigatorLanguage)
  ) {
    navigatorLanguage = "en";
  }
  return navigatorLanguage;
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: process.env.NODE_ENV === "development",
    lng: getDefaultLanguage(),
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

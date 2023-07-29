// -------- i18next

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.json";
import translationCN from "../locales/zh.json";

const resources = {
  en: {
    translation: translationEN,
  },
  cn: {
    translation: translationCN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

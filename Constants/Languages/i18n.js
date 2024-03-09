import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";
import translationTR from "./tr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

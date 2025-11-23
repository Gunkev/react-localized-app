import i18n from "i18next";
import ICU from "i18next-icu";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fr from "./fr.json";
import qps from "./qps.json";

i18n
  .use(ICU)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      qps: { translation: qps }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

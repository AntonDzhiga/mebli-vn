import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './shared/locales/en_EN/en.json'
import ua from './shared/locales/uk_UA/ua.json'
import ru from './shared/locales/ru_RU/ru.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    ru: { translation: ru }
  },
  lng: "ua",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});

export default i18n;

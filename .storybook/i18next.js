import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import * as configConstant from "../configs/constants.config";

const { i18nConstants } = configConstant;
i18n.use(initReactI18next).init({
  //debug: true,
  lng: i18nConstants.defaultLocale,
  fallbackLng: i18nConstants.defaultLocale,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: i18nConstants.defaultNamespace,
  ns: i18nConstants.namespaces,
  supportedLngs: i18nConstants.locales,
});

i18nConstants.locales.forEach((lang) => {
  i18nConstants.namespaces.forEach((ns) => {
    i18n.addResourceBundle(
      lang,
      ns,
      require(`../public/locales/${lang}/${ns}.json`)
    );
  });
});

export { i18n };

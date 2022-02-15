import * as configConstants from "../../configs/constants.config";

export const languageDirections: any =
  configConstants.i18nConstants.locales.reduce((prev, locale: string) => {
    const isRtl = ["ar", "fa"].includes(locale);
    return {
      ...prev,
      [locale]: isRtl ? "rtl" : "ltr",
    };
  }, {});

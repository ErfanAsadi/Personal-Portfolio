import { useRouter } from "next/router";
import { languageDirections } from "./localeDirections";

export const useDirection = (): string => {
  const { locale = "en" } = useRouter();

  return languageDirections[locale];
};

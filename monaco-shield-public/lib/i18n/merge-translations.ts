import { translations } from "./translations"
import { additionalTranslations } from "./translations-additions"

export const mergedTranslations = {
  fr: { ...translations.fr, ...additionalTranslations.fr },
  en: { ...translations.en, ...additionalTranslations.en },
}

import i18n from "i18n-js"
import { I18nManager } from "react-native"
import * as RNLocalize from "react-native-localize"

import * as translations from "./translations"
import { LanguageKey } from "./types"

const fallback: { languageTag: LanguageKey; isRTL: boolean } = {
  languageTag: "en",
  isRTL: false,
}

// Using the device's language as the default language
const { languageTag, isRTL } =
  RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback

I18nManager.forceRTL(isRTL)
i18n.translations = translations
i18n.locale = languageTag

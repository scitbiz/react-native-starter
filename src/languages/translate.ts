import i18n, { TranslateOptions } from "i18n-js"

import * as translations from "./translations"

/**
 * Translates text.
 *
 * @param key The i18n key
 * @param options Translate options
 *
 * @returns the translated message or the {@link key} if nothing found
 */
export const translate = (key: string, options: TranslateOptions = {}) => {
  return key
    ? i18n.t(key, {
        message: key,
        defaultValue: key,
        ...options,
      })
    : key
}

/**
 * Switch to a language
 *
 * @param languageKey The language key
 */
export const switchLanguage = (languageKey: keyof typeof translations) => {
  i18n.locale = languageKey
}

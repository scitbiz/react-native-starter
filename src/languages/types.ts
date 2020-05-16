import * as translations from "./translations"

export type LanguageKey = keyof typeof translations

export const Locale: { [key in LanguageKey]: string } = {
  en: "en-US",
  vi: "vi-VN",
}

export interface AppLanguage {
  name: string
  language: {
    english: string
    vietnamese: string
  }
  error: {
    userNotFound: string
    unknownError: string
    nothingFound: string
    timeoutError: string
    unauthorized: string
    networkError: string
    systemError: string
  }
  youAreUsing: (
    language: string,
  ) => {
    withCode: (code: string) => string
  }
  switchTo: (language: string) => string
}

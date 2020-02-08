import * as translations from "./translations"

export const Locale: { [key in keyof typeof translations]: string } = {
  en: "en-US",
  vi: "vi-VN",
}

export interface AppLanguage {
  name: string
  language: {
    en: string
    vi: string
  }
  error: {
    unknownError: string
    unauthorized: string
    networkError: string
    systemError: string
  }
  main: {
    usingConfig: (config: string) => string
    language: (config: string) => string
    switchToLanguage: (language: string) => string
  }
}

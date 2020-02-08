import { AppLanguage } from "../types"

export const en: AppLanguage = {
  name: "English",
  language: {
    en: "English",
    vi: "Vietnamese",
  },
  error: {
    unknownError: "Unknown error",
    unauthorized: "Can't authenticate this account",
    networkError: "Your networking is unstable. Please check and retry",
    systemError: "System error, please retry later",
  },
  main: {
    usingConfig: (config: string) => `Using config: ${config}`,
    language: (language: string) => `Language: ${language}`,
    switchToLanguage: (language: string) => `Switch to ${language}`,
  },
}

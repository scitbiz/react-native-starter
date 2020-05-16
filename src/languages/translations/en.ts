import { AppLanguage } from "../types"

export const en: AppLanguage = {
  name: "English",
  language: {
    english: "English",
    vietnamese: "Vietnamese",
  },
  error: {
    userNotFound: "User not found",
    unknownError: "Unknown error",
    nothingFound: "Nothing found",
    timeoutError: "Request timeout",
    unauthorized: "Can't authenticate this account",
    networkError: "Your networking is unstable. Please check and retry",
    systemError: "System error, please retry later",
  },
  youAreUsing: (language: string) => ({
    withCode: (code: string) => `You are using ${language} with code [${code}]`,
  }),
  switchTo: (language: string) => `Switch to ${language}`,
}

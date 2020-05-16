import { LanguageKey } from "/languages/types"
import { AppState } from "/redux"
import { AppReducerType } from "/redux/reducers"

export const languageSelector = (state: AppState): LanguageKey =>
  state[AppReducerType.LANGUAGE]

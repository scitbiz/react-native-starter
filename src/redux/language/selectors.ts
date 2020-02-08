import * as translations from "/languages/translations"
import { AppState } from "/redux"
import { AppReducerType } from "/redux/reducers"

export const languageSelector = (state: AppState): keyof typeof translations =>
  state[AppReducerType.LANGUAGE]

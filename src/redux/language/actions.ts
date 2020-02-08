import { ActionType, createAction } from "typesafe-actions"

import * as translations from "/languages/translations"

const SET_LANGUAGE = "SET_LANGUAGE"

export const setLanguage = createAction(SET_LANGUAGE)<
  keyof typeof translations
>()

export type LanguageAction = ActionType<typeof setLanguage>

import { ActionType, createAction } from "typesafe-actions"

import { LanguageKey } from "/languages/types"

const SET_LANGUAGE = "SET_LANGUAGE"

export const setLanguage = createAction(SET_LANGUAGE)<LanguageKey>()

export type LanguageAction = ActionType<typeof setLanguage>

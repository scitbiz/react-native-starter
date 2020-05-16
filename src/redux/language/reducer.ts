import i18n from "i18n-js"
import { createReducer } from "typesafe-actions"

import { LanguageKey } from "/languages/types"

import { setLanguage } from "./actions"

const INITIAL_STATE = i18n.locale as LanguageKey

const userReducer = createReducer(INITIAL_STATE).handleAction(
  setLanguage,
  (_, action) => action.payload,
)

export default userReducer

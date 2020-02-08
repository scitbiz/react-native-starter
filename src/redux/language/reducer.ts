import i18n from "i18n-js"
import { createReducer } from "typesafe-actions"

import * as translations from "/languages/translations"

import { setLanguage } from "./actions"

const INITIAL_STATE = i18n.locale as keyof typeof translations

const userReducer = createReducer(INITIAL_STATE).handleAction(
  setLanguage,
  (_, action) => action.payload,
)

export default userReducer

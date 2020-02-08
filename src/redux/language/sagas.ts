import { all, takeLatest } from "redux-saga/effects"

import { switchLanguage } from "/languages/translate"
import { setLanguage } from "/redux/language/actions"

export function* setLanguageSaga(action: ReturnType<typeof setLanguage>) {
  switchLanguage(action.payload)
}

function* watchSetLanguage() {
  yield takeLatest(setLanguage, setLanguageSaga)
}

export default function* languageSagas() {
  yield all([watchSetLanguage()])
}

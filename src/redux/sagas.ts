import { all } from "redux-saga/effects"

import languageSagas from "./language/sagas"
import userSagas from "./user/sagas"

export default function* rootSaga() {
  yield all([userSagas(), languageSagas()])
}

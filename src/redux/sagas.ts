import { all } from "redux-saga/effects"

import userSagas from "./user/sagas"

export default function* rootSaga() {
  yield all([userSagas()])
}

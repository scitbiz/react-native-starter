import { all, call, put, takeLatest } from "redux-saga/effects"

import * as authApi from "/apis/auth"
import { User } from "/models"

import { login } from "./actions"

export function* loginSaga(action: ReturnType<typeof login.request>) {
  try {
    const user: User = yield call(authApi.login, action.payload)

    if (user) {
      yield put(login.success(user))
    }
  } catch (error) {
    yield put(login.failure(error))
  }
}

function* watchLogin() {
  yield takeLatest(login.request, loginSaga)
}

export default function* userSagas() {
  yield all([watchLogin()])
}

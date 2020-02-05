import { createReducer } from "typesafe-actions"

import { User } from "/models"
import { ReduxState, ReduxStateType } from "/redux/types"

import { login } from "./actions"

const INITIAL_STATE: User & ReduxState = {
  username: "",
  state: ReduxStateType.INIT,
}

const userReducer = createReducer(INITIAL_STATE)
  .handleAction(login.request, (state) => ({
    ...state,
    state: ReduxStateType.LOADING,
  }))
  .handleAction(login.success, (state, action) => ({
    ...state,
    ...action.payload,
    state: ReduxStateType.LOADED,
  }))
  .handleAction(login.failure, (state, action) => ({
    ...state,
    error: action.payload,
    state: ReduxStateType.ERROR,
  }))
  .handleAction(login.cancel, (state) => ({
    ...state,
    state: ReduxStateType.CANCELED,
  }))

export default userReducer

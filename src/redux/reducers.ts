import { combineReducers } from "redux"

import languageReducer from "./language/reducer"
import userReducer from "./user/reducer"

export enum AppReducerType {
  USER = "user",
  LANGUAGE = "language",
}

const reducers = combineReducers({
  [AppReducerType.USER]: userReducer,
  [AppReducerType.LANGUAGE]: languageReducer,
})

export default reducers

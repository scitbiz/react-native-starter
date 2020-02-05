import { combineReducers } from "redux"

import userReducer from "./user/reducer"

export enum AppReducerType {
  USER = "user",
}

const reducers = combineReducers({
  [AppReducerType.USER]: userReducer,
})

export default reducers

import { User } from "/models"
import { AppState } from "/redux"
import { AppReducerType } from "/redux/reducers"

export const userSelector = (state: AppState): User =>
  state[AppReducerType.USER]

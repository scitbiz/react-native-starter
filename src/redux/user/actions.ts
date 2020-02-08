import { ActionType, createAsyncAction } from "typesafe-actions"

import { LoginParams } from "/apis/auth/types"
import { User } from "/models"

const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_ERROR = "LOGIN_ERROR"
const LOGIN_CANCEL = "LOGIN_CANCEL"

export const login = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CANCEL,
)<LoginParams, User, Error, undefined>()

export type UserAction = ActionType<typeof login>

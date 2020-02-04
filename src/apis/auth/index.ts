import Request from "/apis/request"
import { User } from "/models"

import { ERROR_USER_NOT_FOUND } from "./errors"
import { LoginParams } from "./types"
import { API_LOGIN } from "./urls"

export const login = async (params: LoginParams): Promise<User> => {
  const res = await Request.post<User>(API_LOGIN, params)

  if (!res || !res.data) {
    throw ERROR_USER_NOT_FOUND
  }

  return res.data
}

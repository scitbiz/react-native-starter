import axios from "axios"

import { commonErrorMessage, commonErrors } from "./errors"

const headers = {
  "Content-Type": "application/json",
}

const Request = axios.create({
  // baseURL: Config.BASE_URL,
  timeout: 10000,
  headers,
  // ... other configs
})

Request.interceptors.request.use(
  (req) => {
    // Do something with the request data

    return req
  },
  (error) => {
    // Do something with the request error

    return error
  },
)

Request.interceptors.response.use(
  (res) => {
    // Do something with the response data
    return res
  },
  (error) => {
    // Do something with the response error

    const errorData = error?.response?.data
    const errorCode: number = error?.response?.status

    if (errorCode && commonErrors.hasOwnProperty(errorCode)) {
      return Promise.reject(commonErrors[errorCode])
    }

    if (errorData && errorData.message && commonErrorMessage.hasOwnProperty(errorData.message)) {
      return Promise.reject(commonErrorMessage[errorData.message])
    }

    return Promise.reject(errorData)
  },
)

export const setAccessToken = (token?: string) => {
  if (token) {
    Request.defaults.headers.Authentication = `Bearer ${token}`
  }
}

export const clearAccessToken = () => {
  Request.defaults.headers.Authentication = undefined
}

export default Request

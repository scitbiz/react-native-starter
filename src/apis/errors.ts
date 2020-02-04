export const UNAUTHORIZED = new Error("error.unauthorized")
export const NOT_FOUND_ERROR = new Error("error.notFound")
export const NETWORK_ERROR = new Error("error.network")
export const TIMEOUT_ERROR = new Error("error.timeout")
export const SYSTEM_ERROR = new Error("error.system")

export const commonErrors: { [key: number]: Error } = {
  401: UNAUTHORIZED,
  404: NOT_FOUND_ERROR,
  500: SYSTEM_ERROR,
}

export const commonErrorMessage: { [key: string]: Error } = {
  GENERAL: SYSTEM_ERROR,
  "Network Error": NETWORK_ERROR,
  "timeout of 10000ms exceeded": TIMEOUT_ERROR,
}

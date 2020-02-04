export interface Response<T> {
  data?: T
  error?: Error
}

export type ApiResponse<T> = Promise<Response<T>>

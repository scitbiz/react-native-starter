import { InferableComponentEnhancerWithProps } from "react-redux"

export enum ReduxStateType {
  INIT,
  LOADING,
  LOADED,
  ERROR,
  CANCELED,
}

export interface ReduxState {
  state: ReduxStateType
  error?: Error
}

export type ReduxScreenProps<T> = T extends InferableComponentEnhancerWithProps<
  infer P,
  any
>
  ? P
  : {}

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

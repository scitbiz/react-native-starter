import { AppAction } from "/redux"

declare module "typesafe-actions" {
  interface Types {
    RootAction: AppAction
  }
}

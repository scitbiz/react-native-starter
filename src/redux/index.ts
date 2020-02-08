import { StateType } from "typesafe-actions"

import { LanguageAction } from "./language/actions"
import reducers from "./reducers"
import { UserAction } from "./user/actions"

export type AppState = StateType<typeof reducers>
export type AppAction = UserAction | LanguageAction

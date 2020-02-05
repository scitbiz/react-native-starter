import { applyMiddleware, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"

import middlewares, { setupMiddleware } from "./middlewares"
import { persistOptions } from "./options"
import reducers from "./reducers"

const persistedReducer = persistReducer(persistOptions, reducers)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

setupMiddleware()

export { store, persistor }

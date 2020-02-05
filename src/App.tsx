import "react-native-gesture-handler"

import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import AppContainer from "/navigators"
import { store } from "/redux/store"

const Root = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="transparent" translucent />
    <AppContainer />
  </Provider>
)

export default Root

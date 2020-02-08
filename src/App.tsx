import "/languages/i18n"
import "react-native-gesture-handler"

import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import AppNavigator from "/navigators"
import { store } from "/redux/store"

const Root = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppNavigator />
    </Provider>
  )
}

export default Root

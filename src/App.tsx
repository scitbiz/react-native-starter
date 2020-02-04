import "react-native-gesture-handler"

import React from "react"
import { StatusBar } from "react-native"

import AppContainer from "/navigators"

const Root = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    <AppContainer />
  </>
)

export default Root

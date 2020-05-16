import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect } from "react"
import { Text, View } from "react-native"

import { RootStackParamList, Routes } from "/navigators"

import styles from "./styles"

const SPLASH_SCREEN_TIMEOUT = 1000

type SplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.SPLASH
>

export const Splash = () => {
  const navigation = useNavigation<SplashNavigationProp>()

  useEffect(() => {
    const timeout = setTimeout(
      () => navigation.replace(Routes.MAIN),
      SPLASH_SCREEN_TIMEOUT,
    )

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  )
}

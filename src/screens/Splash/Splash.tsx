import React, { useEffect } from "react"
import { Text, View } from "react-native"

import Routes from "/navigators/Routes"

import styles from "./styles"
import { SplashProps } from "./types"

const SPLASH_SCREEN_TIMEOUT = 1000

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => navigation.replace(Routes.MAIN), SPLASH_SCREEN_TIMEOUT)

    return () => clearTimeout(timeout)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  )
}

export default Splash

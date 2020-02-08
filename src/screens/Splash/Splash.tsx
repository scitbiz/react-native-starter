import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { Text, View } from "react-native"

import Routes from "/navigators/Routes"

import styles from "./styles"

const SPLASH_SCREEN_TIMEOUT = 1000

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timeout = setTimeout(
      () => navigation.replace(Routes.MAIN, undefined),
      SPLASH_SCREEN_TIMEOUT,
    )

    return () => clearTimeout(timeout)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  )
}

export default Splash

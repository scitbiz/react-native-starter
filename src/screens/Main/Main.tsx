import React from "react"
import { SafeAreaView, StatusBar, Text, View } from "react-native"

import { Button } from "/components"

import styles from "./styles"

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.text}>React Native Starter</Text>
        <Button style={styles.button} text="Button" />
      </SafeAreaView>
    </View>
  )
}

export default Main

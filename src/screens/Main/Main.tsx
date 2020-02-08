import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import Configs from "react-native-config"

import { Button } from "/components"
import useLanguage from "/utils/hooks/useLanguage"

import styles from "./styles"

const Main = () => {
  const [language, setLanguage, languageCode] = useLanguage()

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>React Native Starter</Text>
        <Text>
          {language.main.usingConfig(JSON.stringify(Configs))} {"\n"}
          {language.main.language(language.name)}
        </Text>
        <Button
          style={styles.button}
          text={language.main.switchToLanguage(
            languageCode === "vi" ? language.language.en : language.language.vi,
          )}
          onPress={() => setLanguage(languageCode === "vi" ? "en" : "vi")}
        />
      </SafeAreaView>
    </View>
  )
}

export default Main

import React, { useCallback } from "react"
import { SafeAreaView, Text, View } from "react-native"
import Configs from "react-native-config"

import { Button } from "/components"
import { useLanguage } from "/utils/hooks/useLanguage"

import styles from "./styles"

export const Main = () => {
  const [lang, setLanguage, languageCode] = useLanguage()

  const isVietnamese = languageCode === "vi"
  const nextLanguage = isVietnamese
    ? lang.language.english
    : lang.language.vietnamese

  const onSwitchLanguagePress = useCallback(() => {
    const nextLanguageCode = isVietnamese ? "en" : "vi"
    setLanguage(nextLanguageCode)
  }, [isVietnamese])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>React Native Starter</Text>
        <Text>{Configs.BASE_URL}</Text>
        <Text>{lang.youAreUsing(lang.name).withCode(languageCode)}</Text>
        <Button
          style={styles.button}
          text={lang.switchTo(nextLanguage)}
          onPress={onSwitchLanguagePress}
        />
      </SafeAreaView>
    </View>
  )
}

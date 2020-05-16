import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import Colors from "/configs/Colors"
import { Main, Splash } from "/screens"

import { Routes } from "./Routes"

export type RootStackParamList = {
  [Routes.SPLASH]: undefined
  [Routes.MAIN]: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: Colors.white,
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen
        name={Routes.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.MAIN} component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
)

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import Colors from "/configs/Colors"
import { Main, Splash } from "/screens"

import Routes from "./Routes"

const Stack = createStackNavigator()

const AppNavigator = () => (
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

export default AppNavigator

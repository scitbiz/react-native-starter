import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Colors from "/configs/Colors"
import { Main, Splash } from "/screens"

import Routes from "./Routes"

const AppNavigator = createStackNavigator(
  {
    [Routes.SPLASH]: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      },
    },
    [Routes.MAIN]: Main,
  },
  {
    initialRouteName: Routes.SPLASH,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  },
)

export default createAppContainer(AppNavigator)

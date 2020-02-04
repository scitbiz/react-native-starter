import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"

export interface ButtonProps extends TouchableOpacityProps {
  readonly text: string
  readonly style?: StyleProp<ViewStyle>
  readonly textStyle?: StyleProp<TextStyle>
}

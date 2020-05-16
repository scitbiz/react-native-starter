import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

import styles from "./styles"
import { ButtonProps } from "./types"

const Button = (props: ButtonProps) => {
  const containerStyle = [styles.container, StyleSheet.flatten(props.style)]
  const textStyle = [styles.text, StyleSheet.flatten(props.textStyle)]

  return (
    <TouchableOpacity {...props} style={containerStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button

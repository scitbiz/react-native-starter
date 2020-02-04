import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

import styles from "./styles"
import { ButtonProps } from "./types"

const Button = (props: ButtonProps) => (
  <TouchableOpacity {...props} style={[styles.container, StyleSheet.flatten(props.style)]}>
    <Text style={[styles.text, StyleSheet.flatten(props.textStyle)]}>{props.text}</Text>
  </TouchableOpacity>
)

export default Button

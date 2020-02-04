import { StyleSheet } from "react-native"

import Colors from "/configs/Colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
  },
  text: {
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
  },
})

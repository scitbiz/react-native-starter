import { StyleSheet } from "react-native"

import Colors from "/configs/Colors"

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 26,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
  },
})

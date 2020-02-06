module.exports = {
  bail: true,
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(" +
      "@react-native-community" +
      "|@react-navigation" +
      "|react-native" +
      "|react-native-gesture-handler" +
      "|react-navigation" +
      "|react-navigation-stack" +
      "|react-native-screens" +
      "|react-native-iphone-x-helper" +
      "|react-native-config" +
      ")/)",
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "./jestSetup.js",
  ],
}

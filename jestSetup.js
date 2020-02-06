/* eslint-disable max-len */
/* eslint-disable no-undef */

import mockAsyncStorage from "@react-native-community/async-storage/jest/async-storage-mock"

// Fix: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers()

// Fix: `useNativeDriver` is not supported because the native animated module is missing.
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper")

// async-storage mock
jest.mock("@react-native-community/async-storage", () => mockAsyncStorage)

// react-native-config mock
jest.mock("react-native-config", () => ({
  BASE_URL: "https://some-mock-url.com",
}))

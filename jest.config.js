module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
}

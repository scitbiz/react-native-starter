module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ios.tsx",
          ".android.tsx",
          ".ts",
          ".tsx",
          ".js",
          ".json",
        ],
        alias: {
          "^\\/(.+)": "./src/\\1",
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
}

declare module "react-native-config" {
  interface NativeConfig {
    BASE_URL: string
  }

  export const Configs: NativeConfig
  export default Configs
}

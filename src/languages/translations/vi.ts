import { AppLanguage } from "../types"

export const vi: AppLanguage = {
  name: "Tiếng Việt",
  language: {
    en: "Tiếng Anh",
    vi: "Tiếng Việt",
  },
  error: {
    unknownError: "Lỗi không xác định",
    unauthorized: "Không thể xác thực tài khoản này",
    networkError: "Mạng của bạn không ổn định. Vui lòng kiểm tra và thử lại",
    systemError: "Lỗi hệ thống, vui lòng thử lại sau",
  },
  main: {
    usingConfig: (config: string) => `Sử dụng cấu hình: ${config}`,
    language: (language: string) => `Ngôn ngữ: ${language}`,
    switchToLanguage: (language: string) => `Chuyển sang ${language}`,
  },
}

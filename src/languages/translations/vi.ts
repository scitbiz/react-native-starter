import { AppLanguage } from "../types"

export const vi: AppLanguage = {
  name: "Tiếng Việt",
  language: {
    english: "Tiếng Anh",
    vietnamese: "Tiếng Việt",
  },
  error: {
    userNotFound: "Người dùng không tồn tại",
    unknownError: "Lỗi không xác định",
    nothingFound: "Nothing found",
    timeoutError: "Request timeout",
    unauthorized: "Không thể xác thực tài khoản này",
    networkError: "Mạng của bạn không ổn định. Vui lòng kiểm tra và thử lại",
    systemError: "Lỗi hệ thống, vui lòng thử lại sau",
  },
  youAreUsing: (language: string) => ({
    withCode: (code: string) => `Bạn đang sử dụng ${language} với mã [${code}]`,
  }),
  switchTo: (language: string) => `Chuyển sang ${language}`,
}

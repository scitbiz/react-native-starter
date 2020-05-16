import i18n from "i18n-js"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"

import { AppLanguage } from "/languages/types"
import { AppAction } from "/redux"
import { setLanguage } from "/redux/language/actions"
import { languageSelector } from "/redux/language/selectors"

export const useLanguage = (): [
  AppLanguage,
  (lang: ReturnType<typeof languageSelector>) => void,
  ReturnType<typeof languageSelector>,
] => {
  const language = useSelector(languageSelector)
  const dispatch = useDispatch<Dispatch<AppAction>>()

  return [
    i18n.translations[language] as AppLanguage,
    (lang: typeof language) => dispatch(setLanguage(lang)),
    language,
  ]
}

import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import i18n, { SUPPORTED_LANGUAGES } from '../language/i18n'

export function useLanguage() {
  const { i18n: activeI18n } = useTranslation()
  const language = SUPPORTED_LANGUAGES.includes(activeI18n.resolvedLanguage) ? activeI18n.resolvedLanguage : 'id'
  const copy = activeI18n.getResourceBundle(language, 'translation') ?? i18n.getResourceBundle('id', 'translation')

  const setLanguage = useCallback(
    (nextLanguage) => {
      if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) {
        return Promise.resolve(language)
      }

      return activeI18n.changeLanguage(nextLanguage)
    },
    [activeI18n, language],
  )

  return {
    language,
    setLanguage,
    copy,
    supportedLanguages: SUPPORTED_LANGUAGES,
  }
}

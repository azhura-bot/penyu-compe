import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import id from './id'

const STORAGE_KEY = 'penyu-edu-language'
const SUPPORTED_LANGUAGES = ['id', 'en']

function resolveInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'id'
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)

  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage
  }

  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'id'
}

const resources = {
  id: { translation: id },
  en: { translation: en },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: resolveInitialLanguage(),
    fallbackLng: 'id',
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: 'translation',
    ns: ['translation'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  })

  i18n.on('languageChanged', (language) => {
    const activeLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : 'id'
    const activeCopy = resources[activeLanguage].translation

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, activeLanguage)
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = activeCopy.meta.htmlLang
    }
  })

  const initialCopy = resources[i18n.resolvedLanguage] ?? resources.id

  if (typeof document !== 'undefined') {
    document.documentElement.lang = initialCopy.translation.meta.htmlLang
  }
}

export { STORAGE_KEY, SUPPORTED_LANGUAGES }
export default i18n

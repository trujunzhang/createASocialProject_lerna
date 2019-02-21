// import i18next from 'i18next' // Without "* as" here.

import * as i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

export type LanguageDetectorCBFunc = (callback: () => any) => any

export type LocalI18nCallback = i18n.Callback

export function getLocalI18n(
  resources: any,
  languageDetectorCB: LanguageDetectorCBFunc,
  fallbackLng: string = 'en',
  callback?: LocalI18nCallback
) {
  // creating a language detection plugin using expo
  // http://i18next.com/docs/ownplugin/#languagedetector
  const languageDetector = {
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: languageDetectorCB,
    init: () => {},
    cacheUserLanguage: () => {}
  }

  const options: i18n.InitOptions = {
    fallbackLng,
    resources,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    }
  }
  i18n
    .use(languageDetector)
    .use(reactI18nextModule)
    .init(options, callback)

  return i18n
}

import * as resources from '../../static/locales/i18nextLocalesLoader'

import {
  getLocalI18n,
  TranslationFunction,
  LocalI18nCallback,
  LanguageDetectorCBFunc
} from '@app/intl'

export type GetMockedI18nCallback = (t: TranslationFunction) => any
export function getI18nextMockerWithResources(cb: GetMockedI18nCallback, ln = 'en') {
  const languageDetectorCB: LanguageDetectorCBFunc = (cb: any) => {
    cb(ln)
  }
  const i18nCB: LocalI18nCallback = (error: any, t: TranslationFunction) => {
    cb(t)
  }

  getLocalI18n(resources, languageDetectorCB, ln, i18nCB)
}

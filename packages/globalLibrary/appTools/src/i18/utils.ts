import i18n from 'i18next'

import { TranslationFunction } from './i18'

import { LocalI18nCallback } from './i18'
import { getLocalI18n, LanguageDetectorCBFunc } from './localI18n'

export type GetMockedI18nCallback = (t: TranslationFunction) => any
export const getI18nextMockerWithResources = (
  resources: any,
  cb: GetMockedI18nCallback,
  ln = 'en'
) => {
  const languageDetectorCB: LanguageDetectorCBFunc = (cb: any) => {
    cb(ln)
  }

  const i18nCB: LocalI18nCallback = (error: any, t: TranslationFunction) => {
    cb(t)
  }

  getLocalI18n(resources, languageDetectorCB, ln, i18nCB)
}
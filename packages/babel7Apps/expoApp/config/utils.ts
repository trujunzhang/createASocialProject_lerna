import { getLocalI18n } from '@app/tools'

import * as resources from '@assets/locales/i18nextLocalesLoader'

export const mockedI18n = getLocalI18n(resources, (callback: any) => {
  return 'en'
})

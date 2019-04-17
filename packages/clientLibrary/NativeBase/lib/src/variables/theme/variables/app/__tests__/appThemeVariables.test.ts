import { appThemeVariables } from '../appThemeVariables'
import { appThemeDefaultVariables } from '../appVariables'
import { generatorForAppThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '@app/tools' // typings
describe('methods correctly in the appThemeVariables', () => {
  test('should return string correctly, checking appThemeDefaultVariables', () => {
    const keys = Object.keys(appThemeDefaultVariables)

    keys.map((key, index) => {
      const expected = appThemeDefaultVariables[key]
      const value = appThemeVariables[key]
      expect(expected).toEqual(value)
    })

    const nextAppThemeVariables = generatorForAppThemeVariables({})

    keys.map((key, index) => {
      const expected = appThemeDefaultVariables[key]
      const value = nextAppThemeVariables[key]
      expect(expected).toEqual(value)
    })
  })
})

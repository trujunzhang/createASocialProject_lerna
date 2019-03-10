import { appThemeVariables } from '../appThemeVariables'
import { appThemeDefaultVariables } from '../appVariables'
import { generatorForAppThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '../../../../types'

describe('methods correctly in the appThemeVariables', () => {
  test('should return string correctly, checking appThemeDefaultVariables', () => {
    const keys = Object.keys(appThemeDefaultVariables)

    keys.map((key, index) => {
      const expected = appThemeDefaultVariables[key]
      const value = appThemeVariables[key]
      expect(expected).toEqual(value)
    })

    const nextAppThemeVariables = generatorForAppThemeVariables({
      iconRenderComponents: () => {
        return null
      }
    })

    keys.map((key, index) => {
      const expected = appThemeDefaultVariables[key]
      const value = nextAppThemeVariables[key]
      expect(expected).toEqual(value)
    })
  })
})

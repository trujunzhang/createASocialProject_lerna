import { commonColorThemeVariables } from '../commonColorThemeVariables'
import { commonColorThemeDefaultVariables } from '../commonColorVariables'
import { generatorForCommonColorThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '../../../../types'

describe('methods correctly in the commonColorThemeVariables', () => {
  test('should return string correctly, checking commonColorThemeDefaultVariables', () => {
    const keys = Object.keys(commonColorThemeDefaultVariables)

    keys.map((key, index) => {
      const expected = commonColorThemeDefaultVariables[key]
      const value = commonColorThemeVariables[key]
      expect(expected).toEqual(value)
    })

    const nextCommonColorThemeVariables = generatorForCommonColorThemeVariables(
      {
        iconRenderComponents: () => {
          return null
        }
      },
      {
        getKeyboardAwareScrollView: () => {
          return null
        }
      }
    )

    keys.map((key, index) => {
      const expected = commonColorThemeDefaultVariables[key]
      const value = nextCommonColorThemeVariables[key]
      expect(expected).toEqual(value)
    })
  })
})

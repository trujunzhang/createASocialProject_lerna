import { platformThemeVariables } from '../platformThemeVariables'
import { platformThemeDefaultVariables } from '../platformVariables'
import { generatorForPlatformThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '../../../../types'

describe('methods correctly in the platformThemeVariables', () => {
  test('should return string correctly, checking platformThemeDefaultVariables', () => {
    const keys = Object.keys(platformThemeDefaultVariables)

    keys.map((key, index) => {
      const expected = platformThemeDefaultVariables[key]
      const value = platformThemeVariables[key]
      expect(expected).toEqual(value)
    })

    const nextPlatformThemeVariables = generatorForPlatformThemeVariables(
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
      const expected = platformThemeDefaultVariables[key]
      const value = nextPlatformThemeVariables[key]
      expect(expected).toEqual(value)
    })
  })
})

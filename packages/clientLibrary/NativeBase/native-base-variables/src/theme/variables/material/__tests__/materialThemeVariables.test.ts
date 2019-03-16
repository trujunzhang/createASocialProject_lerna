import { materialThemeVariables } from '../materialThemeVariables'
import { materialThemeDefaultVariables } from '../materialVariables'
import { generatorForMaterialThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '../../../../types'

describe('methods correctly in the materialThemeVariables', () => {
  test('should return string correctly, checking materialThemeDefaultVariables', () => {
    const keys = Object.keys(materialThemeDefaultVariables)

    keys.map((key, index) => {
      const expected = materialThemeDefaultVariables[key]
      const value = materialThemeVariables[key]
      expect(expected).toEqual(value)
    })

    const nextMaterialThemeVariables = generatorForMaterialThemeVariables(
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
      const expected = materialThemeDefaultVariables[key]
      const value = nextMaterialThemeVariables[key]
      expect(expected).toEqual(value)
    })
  })
})

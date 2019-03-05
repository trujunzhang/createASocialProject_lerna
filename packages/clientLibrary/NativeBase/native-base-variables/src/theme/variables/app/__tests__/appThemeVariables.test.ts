import { appThemeVariables } from '../appThemeVariables'
import { themeDefaultVariables } from '../appVariables'
import { generatorForAppThemeVariables } from '../generator'

import { IThemeDefaultVariables } from '../../../../types'

describe('methods correctly in the appThemeVariables', () => {
    test('should return string correctly, checking themeDefaultVariables', () => {
        const keys = Object.keys(themeDefaultVariables)

        keys.map((key, index) => {
            const expected = themeDefaultVariables[key]
            const value = appThemeVariables[key]
            expect(expected).toEqual(value)
        })

        const nextAppThemeVariables = generatorForAppThemeVariables({
            iconRenderComponents: () => {
                return null
            }
        })

        keys.map((key, index) => {
            const expected = themeDefaultVariables[key]
            const value = nextAppThemeVariables[key]
            expect(expected).toEqual(value)
        })

    })

})

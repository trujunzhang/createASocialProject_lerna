import { appThemeVariables } from '../appThemeVariables'
import { themeDefaultVariables } from '../appVariables'

import { IThemeDefaultVariables } from '../../../../types'


describe('methods correctly in the appThemeVariables', () => {
    test('should return string correctly, checking themeDefaultVariables', () => {
        const keys = Object.keys(themeDefaultVariables)

        keys.map((key, index) => {
            const expected = themeDefaultVariables[key]
            const value = appThemeVariables[key]
            expect(expected).toEqual(value)
        })

    })

})

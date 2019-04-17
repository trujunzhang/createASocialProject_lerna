import { headerTheme } from '../index'

import { IThemeVariables } from '@app/tools'

import { generatorForAppThemeVariables } from '@appVariables/theme/variables/app' // variables
export const variables: IThemeVariables = generatorForAppThemeVariables()

describe('Verify the theme!', () => {
  it('should return correctly', () => {
    const theme = headerTheme(variables)

    let x = 0

    expect(1).toEqual(1)

    // expect(dependencies['tween-functions']).toBeDefined()
  })
})

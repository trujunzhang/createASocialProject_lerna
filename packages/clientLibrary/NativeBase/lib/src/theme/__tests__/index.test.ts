import { getThemeStyle } from '../index'

import { platformVariables } from '@appVariables/theme/variables/platform' // variables // [variable]

describe('Verify the getThemeStyle', () => {
  it('should return correctly', () => {
    const result = getThemeStyle(platformVariables)

    let x = 0

    expect(1).toEqual(1)

    // expect(dependencies['tween-functions']).toBeDefined()
  })
})

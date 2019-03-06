import * as svgJsonObject from '../../../glyphmapsJS/MaterialIcons.json'

import { getSvgDataByIconName } from '../iconsJsonHelper'

describe('methods correctly in the iconsJsonHelper', () => {
  test('should return string correctly, checking getSvgDataByIconName  ', () => {
    const xxx = getSvgDataByIconName('MaterialIcons', svgJsonObject, 'arrow-left')

    const yyy = 0
    // expect(expected).toEqual(value)
  })
})

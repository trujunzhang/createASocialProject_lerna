import * as svgJsonObject from '../../../glyphmapsJS/MaterialIcons.json'

import { getSvgDataByIconName } from '../iconsJsonHelper'

describe('methods correctly in the iconsJsonHelper', () => {
  test('should return string correctly, checking getSvgDataByIconName  ', () => {
    const pathData: string | null = getSvgDataByIconName(
      svgJsonObject,
      'MaterialIcons',
      'pause-circle-filled'
    )

    expect(pathData).toBeDefined()
  })
})

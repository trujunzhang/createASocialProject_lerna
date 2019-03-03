import * as React from 'react'

import { ColorUtils as Color } from '@app/tools'

describe('methods correctly in the textColor', () => {
  test('should return string correctly invoked secret', () => {
    const toolbarDefaultBg = '#fff'
    const result = Color(toolbarDefaultBg)
      .darken(0.2)
      .hex()

    console.log(result)
    const x = 0

    expect(result).toEqual('#CCCCCC')
  })
})

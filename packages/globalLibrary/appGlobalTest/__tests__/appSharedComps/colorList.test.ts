import * as React from 'react'

import { colorList } from '@app/shared-components'
import chroma from 'chroma-js'

// take a hex and give us a nice text color to put over it
const textColor = (hex: string) => {
  const vsWhite = chroma.contrast(hex, 'white')
  if (vsWhite > 4) {
    return '#FFF'
  }
  return chroma(hex)
    .darken(3)
    .hex()
}

describe('methods correctly in the textColor', () => {
  test('should return string correctly invoked secret', () => {
    const textColorList: object = {}
    Object.keys(colorList).map((name: string, index: number) => {
      const hex = colorList[name]
      const color = textColor(hex)
      textColorList[name] = color
    })

    console.log(JSON.stringify(textColorList))
    const x = 0

    // expect(secretString).toBeDefined()
  })
})

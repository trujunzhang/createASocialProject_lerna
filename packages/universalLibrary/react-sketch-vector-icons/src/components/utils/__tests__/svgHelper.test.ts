import * as React from 'react' // So important

import { getSvgProps } from '../svgHelper'

import * as renderer from 'react-test-renderer'

it('return correctly, for Ionicons', () => {
  const props = {
    type: 'Ionicons',
    name: 'md-arrow-back',
    style: [
      { fontSize: 28, color: '#000' },
      { fontSize: 24, color: '#fff', marginTop: 0, marginRight: 2, marginLeft: 1, paddingTop: 1 }
    ]
  }

  const { fixedStyle, color, fixedSize } = getSvgProps(props)

  expect(typeof fixedStyle).toBeTruthy()
  expect(color).toEqual('#fff')
  expect(fixedSize).toEqual(24)
})

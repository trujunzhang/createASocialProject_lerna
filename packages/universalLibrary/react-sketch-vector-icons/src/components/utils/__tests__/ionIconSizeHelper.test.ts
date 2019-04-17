import * as React from 'react' // So important

import { IonIconFixSize } from '../ionIconSizeHelper'

import * as renderer from 'react-test-renderer'

it('return correctly', () => {
  const { width, height } = IonIconFixSize(24, 'ios-arrow-back')

  expect(width).toEqual(10.422857142857145)
  expect(height).toEqual(18.28571428571429)
})

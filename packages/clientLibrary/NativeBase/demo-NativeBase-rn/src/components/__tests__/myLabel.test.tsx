// React Native: 'React' refers to a umd global but the current file is a module consider adding an import instead
import * as React from 'react'

import * as renderer from 'react-test-renderer'

import { MyLabel } from '../myLabel'

describe('Functions of the label', () => {
  it('render a label', () => {
    const page = renderer.create(<MyLabel />).toJSON()

    expect(page).toMatchSnapshot()
  })
})

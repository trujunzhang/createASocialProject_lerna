// React Native: 'React' refers to a umd global but the current file is a module consider adding an import instead
import * as React from 'react'

import * as renderer from 'react-test-renderer'

import { Setup } from '../setup'

describe('Functions of the Setup', () => {
  it('render a Setup', () => {
    const page = renderer.create(<Setup>{<React.Fragment />}</Setup>).toJSON()

    expect(page).toMatchSnapshot()
  })
})

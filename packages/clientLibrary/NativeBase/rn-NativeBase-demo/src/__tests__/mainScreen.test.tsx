// React Native: 'React' refers to a umd global but the current file is a module consider adding an import instead
import * as React from 'react'

import * as renderer from 'react-test-renderer'

import MainScreen from '../mainScreen'

describe('Functions of the Setup', () => {
  it('render a Setup', () => {
    const page = renderer.create(<MainScreen screenTag={'NHBadge'} />).toJSON()

    expect(page).toMatchSnapshot()
  })
})

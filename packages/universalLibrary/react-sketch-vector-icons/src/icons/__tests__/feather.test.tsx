import * as React from 'react' // So important
import { Feather } from '../feather'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const page = <Feather name="home" style={{ color: '#999' }} />
  const rendered = renderer.create(page).toJSON()
  expect(rendered).toMatchSnapshot()
})

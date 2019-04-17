import * as React from 'react' // So important
import { Ionicons } from '../ionicons'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const page = <Ionicons name="md-arrow-back" size={32} style={{ color: '#999' }} />
  const rendered = renderer.create(page).toJSON()
  expect(rendered).toMatchSnapshot()
})

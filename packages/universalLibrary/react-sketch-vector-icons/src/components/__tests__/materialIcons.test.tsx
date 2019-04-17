import * as React from 'react' // So important
import { MaterialIcons } from '../materialIcons'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const page = <MaterialIcons name="get-app" size={32} style={{ color: '#999' }} />
  const rendered = renderer.create(page).toJSON()
  expect(rendered).toMatchSnapshot()
})

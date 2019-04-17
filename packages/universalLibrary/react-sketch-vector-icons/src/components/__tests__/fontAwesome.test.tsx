import * as React from 'react' // So important
import { FontAwesome } from '../fontAwesome'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const page = <FontAwesome name="adn" size={32} style={{ color: '#999' }} />
  const rendered = renderer.create(page).toJSON()
  expect(rendered).toMatchSnapshot()
})

import 'react-native' // So important
import * as React from 'react' // So important
import App from '../App'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toMatchSnapshot()
})

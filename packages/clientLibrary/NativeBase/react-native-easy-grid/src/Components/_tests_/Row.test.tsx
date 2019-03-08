import 'react-primitives'
import * as React from 'react'
import { Row } from '../Row'
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<Row />).toJSON()
  expect(tree).toMatchSnapshot()
})

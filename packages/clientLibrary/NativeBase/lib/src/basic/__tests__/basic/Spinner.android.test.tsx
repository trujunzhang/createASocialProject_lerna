import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Spinner } from '../../Spinner'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "android";
//  return Platform;
// });

it('renders Spinner', () => {
  const tree = renderer
    .create(
      <Container>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

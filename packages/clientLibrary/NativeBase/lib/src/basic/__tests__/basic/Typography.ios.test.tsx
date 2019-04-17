import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Content } from '../../Content'
import { H1 } from '../../H1'
import { H2 } from '../../H2'
import { H3 } from '../../H3'
import { Text } from '../../Text'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders Typography', () => {
  const tree = renderer
    .create(
      <Content>
        <H1>Header One</H1>
        <H2>Header Two</H2>
        <H3>Header Three</H3>
        <Text>Default</Text>
      </Content>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

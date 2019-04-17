import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Header } from '../../Header'
import { Item } from '../../Item'
import { Icon } from '../../Icon'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { Text } from '../../Text'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "android";
//  return Platform;
// });

it('renders searchbar', () => {
  const tree = renderer
    .create(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

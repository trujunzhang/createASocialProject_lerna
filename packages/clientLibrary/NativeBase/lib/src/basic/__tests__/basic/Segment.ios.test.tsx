import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Header } from '../../Header'
import { Left } from '../../Left'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Body } from '../../Body'
import { Right } from '../../Right'
import { Text } from '../../Text'
import { Segment } from '../../Segment'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders Segments inside Header', () => {
  const tree = renderer
    .create(
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button active={true} first>
                <Text>Puppies</Text>
              </Button>
              <Button last active={false}>
                <Text>Cubs</Text>
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Segments outside Header', () => {
  const tree = renderer
    .create(
      <Container>
        <Header hasSegment />
        <Segment>
          <Button first active={true}>
            <Text>Puppies</Text>
          </Button>
          <Button active={false}>
            <Text>Kittens</Text>
          </Button>
          <Button last active={false}>
            <Text>Cubs</Text>
          </Button>
        </Segment>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

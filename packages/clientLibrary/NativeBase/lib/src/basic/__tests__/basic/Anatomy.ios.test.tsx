import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Header } from '../../Header'
import { Left } from '../../Left'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Body } from '../../Body'
import { Title } from '../../Title'
import { Right } from '../../Right'
import { Content } from '../../Content'
import { Text } from '../../Text'
import { Footer } from '../../Footer'
import { FooterTab } from '../../FooterTab'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders anatomy', () => {
  const tree = renderer
    .create(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Content goes here</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Header } from '../../Header'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Content } from '../../Content'
import { Text } from '../../Text'
import { Footer } from '../../Footer'
import { FooterTab } from '../../FooterTab'
import { Badge } from '../../Badge'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders basic Footer', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Text>Camera</Text>
            </Button>
            <Button active={false}>
              <Text>Navigate</Text>
            </Button>
            <Button active={false}>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Footer with Icons', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Icon active={true} name="apps" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="compass" />
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Footer with Icon and Text', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true}>
              <Icon active={true} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Footer with Badge', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button active={true} vertical badge>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon active={true} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={false} vertical badge>
              <Badge style={{ backgroundColor: 'green' }}>
                <Text>51</Text>
              </Badge>
              <Icon active={false} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={false}>
              <Icon active={false} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

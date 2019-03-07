import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "@app/native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

export class BasicTab extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Basic Tabs</Title>
          </Body>
          <Right />
        </Header>

        <Tabs>
          <Tab heading="Tab1">
            <TabOne />
          </Tab>
          <Tab heading="Tab2">
            <TabTwo />
          </Tab>
          <Tab heading="Tab3">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}



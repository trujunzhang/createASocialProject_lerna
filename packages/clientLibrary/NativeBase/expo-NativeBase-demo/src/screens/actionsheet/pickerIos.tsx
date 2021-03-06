import * as React from 'react'
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text
} from '@app/native-base'
import { any } from 'prop-types'
var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel']
var DESTRUCTIVE_INDEX = 3
var CANCEL_INDEX = 4

export class ActionSheetNBIOS extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>ActionSheet</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Select an option'
                },
                (buttonIndex) => {
                  this.setState({ clicked: BUTTONS[buttonIndex] })
                }
              )
            }>
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

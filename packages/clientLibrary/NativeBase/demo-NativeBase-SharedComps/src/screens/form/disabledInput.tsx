import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from '@app/native-base'
import styles from './styles'

export class DisabledInput extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Disabled Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item disabled>
              <Input disabled placeholder="Disabled Textbox" />
              <IconNB name="ios-information-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}
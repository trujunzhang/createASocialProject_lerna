import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input,
  Form
} from '@app/native-base'
import styles from './styles'

export class SuccessInput extends React.Component<any, any> {
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
            <Title>Success Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item success>
              <Input placeholder="Textbox with Success Input" />
              <IconNB name="ios-checkmark-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

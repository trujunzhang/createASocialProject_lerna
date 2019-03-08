import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Toast
} from '@app/native-base'
import styles from './styles'

export class ToastType extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      showToast: false
    }
  }
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
            <Title>Toast Type</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay'
              })
            }>
            <Text>Default Toast</Text>
          </Button>
          <Button
            success
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                type: 'success'
              })
            }>
            <Text>Success Toast</Text>
          </Button>
          <Button
            warning
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                type: 'warning'
              })
            }>
            <Text>Warning Toast</Text>
          </Button>
          <Button
            danger
            style={styles.mb15}
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                type: 'danger'
              })
            }>
            <Text>Danger Toast</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

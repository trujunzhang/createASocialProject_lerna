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

export class ToastDuration extends React.Component<any, any> {
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
            <Title>Toast with duration</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                duration: 3000
              })
            }>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from '@app/native-base'
import styles from './styles'

export class Custom extends React.Component<any, any> {
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
            <Title>Custom Size</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button small style={styles.mb15}>
            <Text>Default Small</Text>
          </Button>
          <Button success style={styles.mb15}>
            <Text>Success Default</Text>
          </Button>
          <Button large dark style={styles.mb15}>
            <Text>Dark Large</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}


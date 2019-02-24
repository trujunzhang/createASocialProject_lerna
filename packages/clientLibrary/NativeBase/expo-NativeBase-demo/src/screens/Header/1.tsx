import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from '@app/native-base'
import styles from './styles'

export class Header1 extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

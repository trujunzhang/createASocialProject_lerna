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

export class Header2 extends React.Component<any, any> {
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
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>Header with Icon Buttons</Text>
        </Content>
      </Container>
    )
  }
}

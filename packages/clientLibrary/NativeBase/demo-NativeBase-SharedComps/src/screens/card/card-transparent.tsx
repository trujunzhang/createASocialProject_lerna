import * as React from 'react'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from '@app/native-base'

import styles from './styles'

export class NHCardTransparent extends React.Component<any, any> {
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
            <Title>Transparent Card</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb} transparent>
            <CardItem>
              <Body>
                <Text>This is just a transparent card with some text to boot.</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
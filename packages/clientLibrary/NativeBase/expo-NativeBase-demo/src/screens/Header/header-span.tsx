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

export class HeaderSpan extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header span>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header Span</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Header span example</Text>
        </Content>
      </Container>
    )
  }
}

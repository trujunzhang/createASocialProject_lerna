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
  Text,
  Subtitle
} from '@app/native-base'
import styles from './styles'

export class Header7 extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Header with Title & Subtitle</Text>
        </Content>
      </Container>
    )
  }
}

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

export class Header3 extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button hasText transparent onPress={() => this.props.navigation.goBack()}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent onPress={() => this.props.navigation.goBack()}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>Header with Text Buttons</Text>
        </Content>
      </Container>
    )
  }
}

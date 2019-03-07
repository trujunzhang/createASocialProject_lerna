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

export class Header8 extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: '#dc4239' }}
          androidStatusBarColor="#dc2015"
          iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: '#FFF' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#FFF' }}>Custom Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Header with Custom background color</Text>
        </Content>
      </Container>
    )
  }
}

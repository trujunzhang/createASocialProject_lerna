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

export class DefaultButton extends React.Component<any, any> {
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
            <Title>Default</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: '#fff' }}>
          <Button light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}



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

export class SketchButton extends React.Component<any, any> {
  renderIcon() {
    return <Icon name="arrow-back" />
  }

  renderButton() {
    return <Icon name="arrow-back" />
  }

  renderHeader() {
    return (
      <Header
        style={{
          width: 800,
          height: 44,
          backgroundColor: 'yellow'
        }}>
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
    )
  }

  // <Text>{'sketch button debug'}</Text>
  render() {
    /* const containerStyle = styles.container */
    const containerStyle = {
      backgroundColor: 'blue'
    }
    return (
      <Container style={[containerStyle]}>
        <Icon name="arrow-back" />
      </Container>
    )
  }
}

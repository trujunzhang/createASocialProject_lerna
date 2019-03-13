import * as React from 'react'
import {
  View,
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
  IconVectorTypeIonicons
} from '@app/native-base'

const mb15 = {
  marginTop: 15,
  marginBottom: 20
}

export class NBDebugButton extends React.Component<any, any> {
  renderInfo() {
    return <Text>{'nb: button debug'}</Text>
  }

  renderIcon() {
    return (
      <Content padder>
        <Icon name="arrow-back" />
        <Icon iconColor="blue" name="arrow-back" />
        <Icon iconSize={140} iconColor="red" name="arrow-back" />
        <Icon fontSize={140} name="arrow-back" />
      </Content>
    )
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
          <Title>Custom Size </Title>
        </Body>
        <Right />
      </Header>
    )
  }

  renderContent() {
    return (
      <Content padder>
        <View
          name={'debug-button'}
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between'
            },
            {
              backgroundColor: 'orange'
            }
          ]}>
          <Button
            style={[
              {
                backgroundColor: 'blue'
              }
            ]}
            iconLeft
            onPress={() => this.props.navigation.openDrawer()}>
            <Text>Hello World!</Text>
          </Button>
        </View>
      </Content>
    )
  }

  render() {
    /* const containerStyle = styles.container */
    const containerStyle = {
      /* backgroundColor: 'blue' */
    }
    return (
      <Container style={[containerStyle]}>
        <Header style={{}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Size , button</Title>
          </Body>
          <Right />
        </Header>

        {this.renderContent()}
      </Container>
    )
  }
}

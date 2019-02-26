import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Content,
  Text
} from '@app/native-base'
import styles from './styles'

const datas = [
  {
    route: 'BasicIcon',
    text: 'Basic Icon'
  },
  {
    route: 'Icons',
    text: 'Icons'
  },
  {
    route: 'PlatformSpecificIcon',
    text: 'Platform Specific Icon'
  },
  {
    route: 'IconFamily',
    text: 'Icon Family'
  }
]

class NHIcon extends Component {
  renderContent() {
    return null
  }

  renderContentxxx() {
    return (
      <List
        dataArray={datas}
        renderRow={(data) => (
          <ListItem button onPress={() => this.props.navigation.navigate(data.route)}>
            <Left>
              <Text>{data.text}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" style={{ color: '#999' }} />
            </Right>
          </ListItem>
        )}
      />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Icons</Title>
          </Body>
          <Right />
        </Header>

        <Content>{this.renderContent()}</Content>
      </Container>
    )
  }
}

export default NHIcon

import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body
} from '@app/native-base'
import styles from './styles'

export class NHBadge extends Component {
  renderHeader() {
    return null
  }

  renderHeaderxx() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name="menu"/>
          </Button>
        </Left>
        <Body>
        <Title>Badge</Title>
        </Body>
        <Right/>
      </Header>
    )
  }

  renderBadgeIconxxx() {
    return (
      <Icon
        name="star"
        style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}
      />
    )
  }

  renderBadgeIcon() {
    return null
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.renderHeader()}

        <Content padder>
          <Badge style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge success style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge info style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge warning style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge danger style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary style={styles.mb}>
            {this.renderBadgeIcon()}
          </Badge>
          <Badge
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
          >
            <Text>1866</Text>
          </Badge>
        </Content>
      </Container>
    )
  }
}


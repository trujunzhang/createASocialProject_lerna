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
  List,
  ListItem
} from '@app/native-base'
import styles from './styles'

const datas = [
  {
    route: 'Default',
    text: 'Default Button'
  },
  {
    route: 'Outline',
    text: 'Outline Button'
  },
  {
    route: 'Rounded',
    text: 'Rounded Button'
  },
  {
    route: 'Block',
    text: 'Block Button'
  },
  {
    route: 'Full',
    text: 'Full Button'
  },
  {
    route: 'Custom',
    text: 'Custom Size Button'
  },
  {
    route: 'Transparent',
    text: 'Transparent Button'
  },
  {
    route: 'IconBtn',
    text: 'Icon Button'
  },
  {
    route: 'Disabled',
    text: 'Disabled Button'
  }
]

class NHButton extends React.Component<any, any> {
  renderHeader() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Buttons</Title>
        </Body>
        <Right />
      </Header>
    )
  }

    renderList(){
        return (
            <Text>{'List Demo for buttons'}</Text>
        )
    }

  renderListxxx() {
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
        {this.renderHeader()}

        <Content>{this.renderList()}</Content>
      </Container>
    )
  }
}

export default NHButton

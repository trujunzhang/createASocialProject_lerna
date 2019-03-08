import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View
} from '@app/native-base'
import styles from './styles'

export class NHThumbnail extends React.Component<any, any> {
  renderContent() {
    // TODO: DJZHANG
    const logo = require('../../../assets/drawer-cover.png') // issue for sketch
    const cover = require('../../../assets/drawer-cover.png') // issue for sketch
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.mb10}>Square Thumbnail</Text>
        <Thumbnail square small source={logo} style={styles.mb10} />
        <Thumbnail square source={logo} style={styles.mb10} />
        <Thumbnail square large source={logo} style={styles.mb35} />

        <Text style={styles.mb10}>Circular Thumbnail</Text>
        <Thumbnail small source={cover} style={styles.mb10} />
        <Thumbnail source={cover} style={styles.mb10} />
        <Thumbnail large source={cover} />
      </View>
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
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder />
      </Container>
    )
  }
}

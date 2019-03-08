import * as React from 'react'
import { Image, View } from 'react-primitives'
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from '@app/native-base'
import styles from './styles'

export class SimpleDeck extends React.Component<any, any> {
  render() {
    const cardOne = require('../../../assets/drawer-cover.png')
    const cardTwo = require('../../../assets/drawer-cover.png')
    const cardThree = require('../../../assets/drawer-cover.png')
    const cardFour = require('../../../assets/drawer-cover.png')

    const cards = [
      {
        text: 'Card One',
        name: 'One',
        image: cardOne
      },
      {
        text: 'Card Two',
        name: 'Two',
        image: cardTwo
      },
      {
        text: 'Card Three',
        name: 'Three',
        image: cardThree
      },
      {
        text: 'Card Four',
        name: 'Four',
        image: cardFour
      }
    ]
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Simple Deck Swiper</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            looping={false}
            renderEmpty={() => (
              <View>
                <Text>Over</Text>
              </View>
            )}
            renderItem={(item) => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={
                      [
                        {
                          resizeMode: 'cover',
                          width: null,
                          flex: 1,
                          height: 300
                        }
                      ] as any
                    }
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <IconNB name={'ios-heart'} style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    )
  }
}

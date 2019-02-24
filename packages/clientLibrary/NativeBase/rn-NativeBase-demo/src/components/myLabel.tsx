import * as React from 'react'
import { View, Text, PixelRatio, Dimensions, StyleSheet, Button } from 'react-native'

export class MyLabel extends React.Component {
  render() {
    return (
      <Button title={'Click Jest'} onPress={() => {}}>
        <Text>{'Hello Jest!'}</Text>
      </Button>
    )
  }
}

import * as React from 'react'

// import {View, Text} from 'react-native'
import { View, Text } from 'react-primitives'
// import {  View,  Text} from '@app/native-base'

export class AppToolsView extends React.Component<any, {}> {
  renderText() {
    const title = 'App Tool View!'
    return (
      <Text
        style={[
          {
            textAlign: 'center'
          }
        ]}>
        {title}
      </Text>
    )
  }

  render() {
    return (
      <View
        name="container"
        style={[
          {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'red'
          }
        ]}>
        {this.renderText()}
      </View>
    )
  }
}

import * as React from 'react'
import { View, Text } from 'react-primitives'

export class SadText extends React.Component<any, any> {
  renderContent() {
    return <Text>Hello World!</Text>
  }

  render() {
    return (
      <View
        name="Sketch Layer name"
        style={{
          flexDirection: 'row',
          width: 480,
          backgroundColor: '#01ffae'
        }}>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

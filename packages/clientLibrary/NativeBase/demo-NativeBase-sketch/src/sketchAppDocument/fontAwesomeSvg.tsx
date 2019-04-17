import * as React from 'react'
import { View, Text } from 'react-primitives'
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  // FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} from '@app/react-sketch-vector-icons'

export class FontAwesomeSvg extends React.Component<any, any> {
  renderContent() {
    return <Text>Hello World!</Text>
  }

  renderIcon() {
    return <Ionicons name="ios-arrow-back" size={22} color={'blue'} />
  }

  render() {
    return (
      <View
        name="Sketch Layer name"
        style={{
          flexDirection: 'row',
          width: 480,
          height: 50,
          backgroundColor: 'red'
        }}>
        {this.renderContent()}
      </View>
    )
  }
}

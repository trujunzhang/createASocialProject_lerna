import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

export class EvilIcons extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props
    return <Text>{name + 'wh'}</Text>
  }
}

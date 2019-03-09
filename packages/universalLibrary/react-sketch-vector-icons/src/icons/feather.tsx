import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

import { Camera } from 'react-feather'

export class Feather extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    // const FeatherIcon = Icon[name]
    const FeatherIcon = Camera

    // console.log('Feather(icon): ', JSON.stringify(Icon))
    console.log('Feather(FeatherIcon): ', JSON.stringify(FeatherIcon))

    // <FeatherIcon />
    return (
      <View name={'feather-' + name}>
        <Text>{name}</Text>
      </View>
    )
  }
}

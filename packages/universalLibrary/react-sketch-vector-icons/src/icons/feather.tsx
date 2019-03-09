import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

// import * as FeatherIcons from '../generate/feather'
import { Camera } from '../generate/feather'

export class Feather extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    const FeatherIcon = Camera
    // const FeatherIcon = FeatherIcons[name]

    // console.log('Feather(icon): ', JSON.stringify(Icon))
    console.log('Feather(FeatherIcon): ', JSON.stringify(FeatherIcon))

    return (
      <View name={'feather-' + name}>
        <FeatherIcon />
      </View>
    )
  }
}

import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

import feather from 'feather-icons'

export class Feather extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    return feather.icons[name].toSvg({ 'stroke-width': 1, color: 'red' })
  }
}

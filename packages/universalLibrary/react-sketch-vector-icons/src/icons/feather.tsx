import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

import { UpperCaseStringUtils } from '@app/tools'

import * as FeatherIcons from '../generate/feather'

const ICONNAME = 'feather'

export class Feather extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    // const FeatherIcon = Camera
    const svgClassName = UpperCaseStringUtils.toCamelClassName(name)
    // console.log('Feather(svgClassName): ', svgClassName)
    // console.log('Feather(lastSize): ', lastSize)

    const FeatherIcon = FeatherIcons[svgClassName]

    // console.log('Feather(icon): ', JSON.stringify(Icon))
    // console.log('Feather(FeatherIcon): ', JSON.stringify(FeatherIcon))

    return (
      <View name={ICONNAME + '-' + name}>
        <FeatherIcon color={color} size={lastSize as number} />
      </View>
    )
  }
}

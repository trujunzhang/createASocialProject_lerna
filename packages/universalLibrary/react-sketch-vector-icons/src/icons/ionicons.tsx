import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import { UpperCaseStringUtils } from '@app/tools'
import * as IoniconsIcons from '../generate/ionicons'

const ICONNAME = 'ionicons'
export class Ionicons extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    const svgClassName = UpperCaseStringUtils.toCamelClassName(name)
    console.log('Ionicons(svgClassName): ', svgClassName)
    // console.log('Ionicons(lastSize): ', lastSize)

    const VectorIcon = IoniconsIcons[svgClassName]

    // console.log('Ionicons(icon): ', JSON.stringify(Icon))
    // console.log('Ionicons(IoniconsIcon): ', JSON.stringify(IoniconsIcon))

    return (
      <View name={ICONNAME + '-' + name}>
        <VectorIcon color={color} size={lastSize as number} />
      </View>
    )
  }
}

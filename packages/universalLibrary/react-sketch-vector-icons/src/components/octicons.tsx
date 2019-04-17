import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import { UpperCaseStringUtils } from '@app/tools'

// import * as OcticonsIcons from '../generate/octicons'
const OcticonsIcons: any = {}

const ICONNAME = 'octicons'

interface IOcticonsProps {}
interface IOcticonsState {}

export class Octicons extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    // const FeatherIcon = Camera
    const svgClassName = UpperCaseStringUtils.toCamelClassName(name)
    // console.log('Feather(svgClassName): ', svgClassName)
    // console.log('Feather(lastSize): ', lastSize)

    const VectorIcon = OcticonsIcons[svgClassName + 'Icon']

    // console.log('Feather(icon): ', JSON.stringify(Icon))
    // console.log('Feather(FeatherIcon): ', JSON.stringify(FeatherIcon))

    return (
      <View name={ICONNAME + '-' + name}>
        <VectorIcon color={color} size={lastSize as number} />
      </View>
    )
  }
}

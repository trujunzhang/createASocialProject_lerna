import * as React from 'react'
import { Text, View, Svg } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import { IconContext } from '../lib/iconContext'
import { UpperCaseStringUtils } from '@app/tools'

import * as Icons from '../svgs/feather'
// import { FaAdn } from '../svgs/feather '
const vectorIconDisplayName = 'Feather'

export class Feather extends React.Component<IconProps, any> {
  renderxxxx() {
    const { name, size, color, style } = this.props
    return <Text>{name + 'wh'}</Text>
  }

  /**
   * FaAdn
   */
  renderSvg() {
    const d =
      'M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z'
    const { name, size, color, style } = this.props
    return (
      <Svg viewBox={'0 0 496 512'} width={32} height={32}>
        <Svg.Path d={d} />
      </Svg>
    )
  }

  render() {
    const { name, size, color, style } = this.props
    const fixedSize = size || 24
    const svgClassName = UpperCaseStringUtils.toCamelClassName(name)
    const VectorIcon = Icons['Fi' + svgClassName]
    // const VectorIcon = Icons['FaAdn']
    // const VectorIcon =FaAdn

    console.log('VectorIcon:(fixedSize) ', fixedSize)
    // console.log('VectorIcon: ', JSON.stringify(VectorIcon))

    return <VectorIcon name={vectorIconDisplayName + '-[' + name + ']'} size={fixedSize} />
  }
}

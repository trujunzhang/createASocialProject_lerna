import * as React from 'react'
import { View, Text, Svg } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import * as svgJsonObject from '../glyphmapsJS/MaterialIcons.json'
import { getSvgDataByIconName } from './utils/iconsJsonHelper'

interface IMaterialIconsProps { }
interface IMaterialIconsState {
  pathData: string | null
}

// console.log('svgJsonObject:  ', JSON.stringify(svgJsonObject['svg']['defs']['font']['font-face']))

export class MaterialIcons extends React.Component<IconProps, IMaterialIconsState> {
  constructor(props: IconProps) {
    super(props)
    const { name } = props

    // console.log('MaterialIcons:  ', JSON.stringify(props))

    const pathData: string | null = getSvgDataByIconName(svgJsonObject, 'MaterialIcons', name)
    this.state = {
      pathData
    }
  }

  render() {
    const { name, size, color } = this.props
    const { pathData } = this.state
    if (!!pathData) {
      // console.log('MaterialIcons:  ', JSON.stringify(this.props))
      return (
        <Svg height={size} width={size}>
          <Svg.G fill={color} fillRule="evenodd" viewBox={`0 0 ${size} ${size}`}>
            <Svg.Path d={pathData} />
          </Svg.G>
        </Svg>
      )
    }

    return <Text name={`icon`}>{name}</Text>
  }
}

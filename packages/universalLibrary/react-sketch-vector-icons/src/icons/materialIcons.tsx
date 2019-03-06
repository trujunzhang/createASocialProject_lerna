import * as React from 'react'
import { View, Text, Svg } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import * as svgJsonObject from '../glyphmapsJS/MaterialIcons.json'
// import MaterialIconsSVG from "material-icons/iconfont/MaterialIcons-Regular.svg"

interface IMaterialIconsProps { }
interface IMaterialIconsState { }

console.log('svgJsonObject:  ', JSON.stringify(svgJsonObject['svg']['defs']['font']['font-face']))

export class MaterialIcons extends React.Component<IconProps, IMaterialIconsState> {
  constructor(props: IconProps) {
    super(props)

    // console.log('MaterialIconsSVG:  ', JSON.stringify(MaterialIconsSVG))
  }

  render() {
    const { name, size, color } = this.props
    // console.log('MaterialIcons:  ', JSON.stringify(this.props))
    // return <Text>{name + 'wh-MaterialIcons'}</Text>
    return (
      <Svg
        height={size}
        width={size}
      >
        <Svg.G fill={color} fillRule="evenodd" viewBox={`0 0 ${size} ${size}`}>
          <Svg.Path d="M427 277v-42h-260l119 -120l-30 -30l-171 171l171 171l30 -30l-119 -120h260z" />
        </Svg.G>
      </Svg>
    )
  }
}

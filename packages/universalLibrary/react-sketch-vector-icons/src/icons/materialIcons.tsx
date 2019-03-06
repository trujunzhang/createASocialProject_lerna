import * as React from 'react'
import { View, Text, Svg } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
// import { } from "material-icons"

interface IMaterialIconsProps { }
interface IMaterialIconsState { }

export class MaterialIcons extends React.Component<IconProps, IMaterialIconsState> {
  constructor(props: IconProps) {
    super(props)

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

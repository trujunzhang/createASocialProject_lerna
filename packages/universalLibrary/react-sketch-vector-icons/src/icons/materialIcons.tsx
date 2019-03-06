import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'

interface IMaterialIconsProps { }
interface IMaterialIconsState { }

export class MaterialIcons extends React.Component<IconProps, any> {
  render() {
    const { name } = this.props
    return <Text>{name + 'wh-MaterialIcons'}</Text>
  }
}

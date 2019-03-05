import { TouchableOpacityProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchTouchableOpacityState {}

export class TouchableOpacity extends React.Component<
  TouchableOpacityProps,
  ISketchTouchableOpacityState
> {
  render() {
    return <View name="touchableOpacity">{this.props.children}</View>
  }
}

import { TouchableHighlightProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchTouchableHighlightState {}

export class TouchableHighlight extends React.Component<
  TouchableHighlightProps,
  ISketchTouchableHighlightState
> {
  render() {
    return <View name="touchableHighlight">{this.props.children}</View>
  }
}

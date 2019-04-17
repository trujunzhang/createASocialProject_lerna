import { TouchableHighlightProps } from '../../../typings'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchTouchableHighlightState {}

export class TouchableHighlight extends React.Component<
  TouchableHighlightProps,
  ISketchTouchableHighlightState
> {
  render() {
    const { name, style } = this.props as any
    return (
      <View name={name} style={style}>
        {this.props.children}
      </View>
    )
  }
}

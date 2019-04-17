import { TouchableNativeFeedbackProps } from '../../../typings'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchTouchableNativeFeedbackState {}

export class TouchableNativeFeedback extends React.Component<
  TouchableNativeFeedbackProps,
  ISketchTouchableNativeFeedbackState
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

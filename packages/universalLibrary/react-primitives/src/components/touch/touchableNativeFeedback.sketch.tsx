import { TouchableNativeFeedbackProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchTouchableNativeFeedbackState {}

export class TouchableNativeFeedback extends React.Component<
  TouchableNativeFeedbackProps,
  ISketchTouchableNativeFeedbackState
> {
  render() {
    return <View name="touchableNativeFeedback">{this.props.children}</View>
  }
}

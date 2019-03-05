import { PanResponderProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View } from 'react-sketchapp'

interface ISketchPanResponderState {}

export class PanResponder extends React.Component<PanResponderProps, ISketchPanResponderState> {
  render() {
    return <View name="panResponder">{this.props.children}</View>
  }
}

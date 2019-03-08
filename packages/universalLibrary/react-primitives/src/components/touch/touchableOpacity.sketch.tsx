import { TouchableOpacityProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View, Style } from 'react-sketchapp'

interface ISketchTouchableOpacityState { }

export class TouchableOpacity extends React.Component<
  TouchableOpacityProps,
  ISketchTouchableOpacityState
  > {
  render() {
    const { name, style } = this.props as any

    console.log('TouchableOpacity:', JSON.stringify(style))

    return (
      <View name={name} style={style}>
        {this.props.children}
      </View>
    )
  }
}

import { TouchableOpacityProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

interface ISketchTouchableOpacityState { }

export class TouchableOpacity extends React.Component<
  TouchableOpacityProps,
  ISketchTouchableOpacityState
  > {
  render() {
    const { name, style } = this.props as any

    const compStyle = StyleSheet.flatten(style)
    // console.log('TouchableOpacity:', JSON.stringify(compStyle))

    return (
      <View name={name} style={compStyle}>
        {this.props.children}
      </View>
    )
  }
}

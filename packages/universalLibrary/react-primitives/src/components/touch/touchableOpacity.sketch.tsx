import { TouchableOpacityProps } from '../../models/iTouchProps'

import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

import { getChildStyle } from '../utils'

interface ISketchTouchableOpacityState {}

export class TouchableOpacity extends React.Component<
  TouchableOpacityProps,
  ISketchTouchableOpacityState
> {
  render() {
    const { name, style } = this.props as any

    // console.log('TouchableOpacity:', JSON.stringify(compStyle))
    const compStyle = getChildStyle(this.props)

    return (
      <View name={name} style={compStyle}>
        {this.props.children}
      </View>
    )
  }
}

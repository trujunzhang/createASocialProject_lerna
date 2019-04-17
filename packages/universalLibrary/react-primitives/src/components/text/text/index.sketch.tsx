import { TextProps } from '../../../typings'
import { Text as SAText, View, StyleSheet } from 'react-sketchapp'

import * as React from 'react'
import { getStylesForText } from './utils/styleHelper'

interface ISketchTextState {}

export class Text extends React.Component<any, ISketchTextState> {
  render() {
    const { children, style } = this.props as any

    // console.log('text(style), ',JSON.stringify(style))

    const { viewStyle, textStyle } = getStylesForText(style)
    // const viewStyle = {}
    // const textStyle = {}

    const nextProps = { ...this.props, style: viewStyle }
    return (
      <View style={viewStyle}>
        <SAText {...nextProps} style={textStyle}>
          {children}
        </SAText>
      </View>
    )
  }
}

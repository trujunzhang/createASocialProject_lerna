import { TextProps } from '../../models/iTextProps'
import { Text as SAText, StyleSheet } from 'react-sketchapp'

import * as React from 'react'

interface ISketchTextState { }

export class Text extends React.Component<any, ISketchTextState> {
  render() {
    const nextStyle = StyleSheet.flatten(this.props.style)
    const nextProps = { ... this.props, style: nextStyle }
    return <SAText {...nextProps}>{(this.props as any).children}</SAText>
  }
}

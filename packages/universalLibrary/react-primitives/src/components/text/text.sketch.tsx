import { TextProps } from '../../models/iTextProps'
import { Text as SAText } from 'react-sketchapp'

import * as React from 'react'

interface ISketchTextState {}

export class Text extends React.Component<any, ISketchTextState> {
  render() {
    return <SAText {...this.props}>{(this.props as any).children}</SAText>
  }
}

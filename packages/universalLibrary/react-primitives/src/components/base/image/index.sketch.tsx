import * as React from 'react'

import { convertValidateStyle } from '../../stylesHelper.sketch'
import { Image as SAImage, StyleSheet } from 'react-sketchapp'

interface ISketchImageState {}

export class Image extends React.Component<any, ISketchImageState> {
  render() {
    const { style } = this.props as any
    const compStyle: any = convertValidateStyle(style)
    // console.log('Image, (style): ', JSON.stringify(compStyle))

    const nextProps: any = { ...this.props, style: compStyle }
    return <SAImage {...nextProps}>{this.props.children}</SAImage>
  }
}

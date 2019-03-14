import { ViewProps } from '../../models/iBase'

import * as React from 'react'

import { convertValidateStyle } from '../utils'
import { View as SAView, StyleSheet } from 'react-sketchapp'

interface ISketchViewState {}

export class View<ItemT> extends React.Component<any, ISketchViewState> {
  render() {
    const { style } = this.props as any
    const compStyle = convertValidateStyle(style)
    // console.log('View, (style): ', JSON.stringify(compStyle))

    const nextProps = { ...this.props, style: compStyle }
    return <SAView {...nextProps}>{(this.props as any).children}</SAView>
  }
}

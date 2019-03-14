import { ViewProps } from '../../models/iBase'

import * as React from 'react'

import { View as SAView, StyleSheet } from 'react-sketchapp'

interface ISketchViewState { }

export class View<ItemT> extends React.Component<any, ISketchViewState> {
  render() {
    const nextStyle = StyleSheet.flatten(this.props.style)
    const nextProps = { ... this.props, style: nextStyle }
    return <SAView {...nextProps}>{(this.props as any).children}</SAView>
  }
}

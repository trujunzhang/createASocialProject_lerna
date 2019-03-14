import { ViewProps } from '../../models/iBase'

import * as React from 'react'

import { View as SAView } from 'react-sketchapp'

interface ISketchViewState {}

export class View<ItemT> extends React.Component<any, ISketchViewState> {
  render() {
    return <SAView {...this.props}>{(this.props as any).children}</SAView>
  }
}

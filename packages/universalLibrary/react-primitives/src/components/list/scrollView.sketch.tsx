import { ScrollViewProps } from '../../models/iListProps'

import { View, Text } from 'react-sketchapp'

import * as React from 'react'

interface ISketchScrollViewState {}

export class ScrollView extends React.Component<ScrollViewProps, ISketchScrollViewState> {
  render() {
    const { children, name } = this.props as any
    return <View name={name || 'scrollView'}>{children}</View>
  }
}

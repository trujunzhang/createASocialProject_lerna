import { StatusBarProps } from '../../models/iSystemProps'
import { View } from 'react-sketchapp'

import * as React from 'react'

interface ISketchStatusBarState { }

export class StatusBar extends React.Component<StatusBarProps, ISketchStatusBarState> {

  static currentHeight: number = 44
  render() {
    return <View name="statusBar">{this.props.children}</View>
  }
}

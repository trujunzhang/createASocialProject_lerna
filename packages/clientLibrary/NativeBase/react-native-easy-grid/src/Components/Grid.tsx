import * as React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-primitives'
import computeProps from '../Utils/computeProps'
import { Row } from './Row'

export interface IGridProps extends TouchableOpacityProps {
  style?: any
}

export class Grid extends React.Component<IGridProps, any> {
  private _root: any
  prepareRootProps() {
    var type = {
      flex: 1,
      flexDirection: this.ifRow() ? 'column' : 'row'
    }

    var defaultProps = {
      style: type
    }

    return computeProps(this.props, defaultProps)
  }

  ifRow() {
    var row = false
    React.Children.forEach(this.props.children, function (child: any) {
      if (child && child.type == Row) row = true
    })
    return row
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  }

  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View
            ref={(component) => (this._root = component)}
            {...this.props}
            {...this.prepareRootProps()}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <View
          ref={(component) => (this._root = component)}
          {...this.props}
          {...this.prepareRootProps()}>
          {this.props.children}
        </View>
      )
    }
  }
}

import * as React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-primitives'

import computeProps from '../Utils/computeProps'

export interface IRowProps extends TouchableOpacityProps {
  style?: any
  size?: number
}

export class Row extends React.Component<IRowProps, any> {
  private _root: any
  prepareRootProps() {
    var type = {
      flexDirection: 'row',
      flex: this.props.size ? this.props.size : this.props.style && (this.props.style as any).height ? 0 : 1
    }

    var defaultProps = {
      style: type
    }
    return computeProps(this.props, defaultProps)
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  }

  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress} {...this.prepareRootProps()}>
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

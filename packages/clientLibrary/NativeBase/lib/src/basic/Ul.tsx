import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
import { View, TextProps } from 'react-primitives'

import { Text } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IUlProps extends TextProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}

class Ul extends React.Component<IUlProps, any> {
  private _root: any
  render() {
    return <Text ref={(c) => (this._root = c)} {...this.props} />
  }
}

const childrenType = function (props, propName, component) {
  let error
  const prop = props[propName]
  React.Children.forEach(prop, (child) => {
    if (typeof child !== 'string' && typeof child !== 'number') {
      error = new Error(`${component} should have only string or number`)
    }
  })
  return error
}

//Ul.propTypes = {
//  ...Text.propTypes,
//  children: childrenType,
//  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
//}

const StyledUl = connectStyle('NativeBase.Ul', {}, mapPropsToStyleNames)(Ul)

export { StyledUl as Ul }
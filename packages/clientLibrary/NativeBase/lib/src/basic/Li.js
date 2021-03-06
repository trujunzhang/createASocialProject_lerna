import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

class Li extends Component {
  render() {
    return <Text ref={(c) => (this._root = c)} {...this.props} />
  }
}

const childrenType = function(props, propName, component) {
  let error
  const prop = props[propName]
  React.Children.forEach(prop, (child) => {
    if (typeof child !== 'string' && typeof child !== 'number') {
      error = new Error(`${component} should have only string or number`)
    }
  })
  return error
}

Li.propTypes = {
  ...Text.propTypes,
  children: childrenType,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
}

const StyledLi = connectStyle('NativeBase.Li', {}, mapPropsToStyleNames)(Li)

export { StyledLi as Li }

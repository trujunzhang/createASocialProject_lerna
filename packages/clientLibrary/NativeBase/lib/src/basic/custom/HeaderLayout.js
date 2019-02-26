import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ViewPropTypes } from 'react-native'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'

class HeaderLayout extends Component {
  static contextTypes = {
    theme: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      orientation: 'portrait'
    }
  }

  layoutChange(val) {
    let maxComp = Math.max(variable.deviceWidth, variable.deviceHeight)
    if (val.width >= maxComp) this.setState({ orientation: 'landscape' })
    else {
      this.setState({ orientation: 'portrait' })
    }
  }

  renderCommon() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }

  render() {
    return (
      <View onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}>{this.renderCommon()}</View>
    )
  }
}

HeaderLayout.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
}

const StyledHeaderLayout = connectStyle('NativeBase.HeaderLayout', {}, mapPropsToStyleNames)(
  HeaderLayout
)
export { StyledHeaderLayout as HeaderLayout }

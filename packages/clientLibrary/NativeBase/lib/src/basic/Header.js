import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ViewPropTypes, StyleSheet } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'
import { isIphoneX } from '@app/react-native-iphone-x-helper'

import { HeaderStatusBar } from './HeaderStatusBar'
import { LodashUtils as _ } from '@app/tools'

class Header extends Component {
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

  calculateHeight(mode, inSet) {
    let inset = null
    if (inSet != undefined) {
      inset = inSet
    } else {
      inset = variable.Inset
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape
    let oldHeight = null
    if (this.props.style.height != undefined) {
      oldHeight = this.props.style.height
    } else if (this.props.style[1]) {
      oldHeight = this.props.style[1].height
        ? this.props.style[1].height
        : this.props.style[0].height
    } else {
      oldHeight = this.props.style[0].height
    }
    let height = oldHeight + InsetValues.topInset
    return height
  }

  calculatePadder(mode, inSet) {
    let inset = null
    if (inSet != undefined) {
      inset = inSet
    } else {
      inset = variable.Inset
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape
    let topPadder = null
    let style = StyleSheet.flatten(this.props.style)
    if (style.padding !== undefined || style.paddingTop !== undefined) {
      topPadder = (style.paddingTop ? style.paddingTop : style.padding) + InsetValues.topInset
    } else {
      topPadder = InsetValues.topInset
    }
    return topPadder
  }

  shouldShowStatusBar() {
    const { noStatusBar } = this.props
    if (noStatusBar === undefined) {
      return true
    }
    if (noStatusBar === true) {
      return false
    }
    return true
  }

  renderStatusBar() {
    if (this.shouldShowStatusBar() === false) {
      return null
    }

    return <HeaderStatusBar />
  }

  renderCommon() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }

  renderForIphoneX() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    debugger
    return (
      <View
        ref={(c) => (this._root = c)}
        {...this.props}
        style={[
          this.props.style,
          {
            height: this.calculateHeight(this.state.orientation, variables.Inset),
            paddingTop: this.calculatePadder(this.state.orientation, variables.Inset)
          }
        ]}
      />
    )
  }

  render() {
    return (
      <View onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}>
        {this.renderStatusBar()}
        {isIphoneX() ? this.renderForIphoneX() : this.renderCommon()}
      </View>
    )
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  searchBar: PropTypes.bool,
  noStatusBar: PropTypes.bool,
  rounded: PropTypes.bool
}

const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header)
export { StyledHeader as Header }

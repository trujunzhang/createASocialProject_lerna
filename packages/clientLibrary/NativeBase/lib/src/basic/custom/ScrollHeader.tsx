import * as React from 'react'
import * as ReactNative from 'react-native'
import { View, StatusBar, ViewProps, StyleSheet } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'
import { isIphoneX } from '@app/react-native-iphone-x-helper'

import { LodashUtils as _ } from '@app/tools'

/**
 * see Widget ScrollHeader.js
 */
interface IScrollHeaderProps {
  /**
   * Prop to be used with <ScrollHeader> component to have Search bar onto the Header section of your screen.
   */
  searchBar?: boolean
  /**
   * Wraps the search bar with predefined border options.
   * Default: regular
   */
  rounded?: boolean
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  /**
   * It is advisable to use hasTabs prop with Header while using Tab
   */
  hasTabs?: boolean
  noShadow?: boolean
  hasSubtitle?: boolean
  span?: boolean
  androidStatusBarColor?: string
  iosBarStyle?: ReactNative.StatusBarStyle
  hasSegment?: boolean
  translucent?: boolean
  transparent?: boolean
}

class ScrollHeader extends React.Component<IScrollHeaderProps, any> {
  private _root: any

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
    let inset: any = null
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
    let inset: any = null
    if (inSet != undefined) {
      inset = inSet
    } else {
      inset = variable.Inset
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape
    let topPadder = null
    let style: any = StyleSheet.flatten(this.props.style)
    if (style.padding !== undefined || style.paddingTop !== undefined) {
      topPadder = (style.paddingTop ? style.paddingTop : style.padding) + InsetValues.topInset
    } else {
      topPadder = InsetValues.topInset
    }
    return topPadder
  }

  renderCommon() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }

  renderForIphoneX() {
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

  renderStatusBar() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    const platformStyle = variables.platformStyle
    return (
      <StatusBar
        backgroundColor={
          this.props.androidStatusBarColor
            ? this.props.androidStatusBarColor
            : variables.statusBarColor()
        }
        barStyle={
          this.props.iosBarStyle
            ? this.props.iosBarStyle
            : platformStyle === 'material'
            ? 'light-content'
            : variables.iosStatusbar
        }
        translucent={this.props.transparent ? true : this.props.translucent}
      />
    )
  }

  render() {
    return (
      <View onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}>
        {isIphoneX() ? this.renderForIphoneX() : this.renderCommon()}
      </View>
    )
  }
}

ScrollHeader.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
}

const StyledScrollHeader = connectStyle('NativeBase.ScrollHeader', {}, mapPropsToStyleNames)(
  ScrollHeader
)
export { StyledScrollHeader as ScrollHeader }

import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View, StatusBar, StyleSheet } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'
import { IThemeVariables } from '@app/tools' // typings
import { platformVariables as variable } from '@appVariables/theme/variables/platform' // variables // [variable]

import { LodashUtils as _ } from '@app/tools'
import { isIphoneX } from 'react-primitives'

import { HeaderProps } from './Header'

export interface HeaderDefaultProps {
  noStatusBar: boolean
}

class Header extends React.Component<HeaderProps, any> {
  private _root: any
  public static defaultProps: Partial<HeaderDefaultProps> = {
    noStatusBar: false
  }

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
    if (!!this.props.style) {
      if ((this.props.style as any).height != undefined) {
        oldHeight = (this.props.style as any).height
      } else if (this.props.style[1]) {
        oldHeight = this.props.style[1].height
          ? this.props.style[1].height
          : this.props.style[0].height
      } else if (this.props.style[0]) {
        oldHeight = this.props.style[0].height
      }
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
    let style: any = StyleSheet.flatten(this.props.style as any)
    if (style.padding !== undefined || style.paddingTop !== undefined) {
      topPadder = (style.paddingTop ? style.paddingTop : style.padding) + InsetValues.topInset
    } else {
      topPadder = InsetValues.topInset
    }
    return topPadder
  }

  renderStatusBar() {
    const { noStatusBar } = this.props as HeaderDefaultProps
    if (noStatusBar) {
      return null
    }
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    const platformStyle = variables.platformStyle
    return (
      <StatusBar
        name={'statusBar'}
        backgroundColor={
          this.props.androidStatusBarColor
            ? (this.props.androidStatusBarColor as any)
            : (variables.statusBarColor as any)
        }
        barStyle={
          this.props.iosBarStyle
            ? (this.props.iosBarStyle as any)
            : platformStyle === 'material'
            ? 'light-content'
            : variables.iosStatusbar
        }
        translucent={this.props.transparent ? true : this.props.translucent}
      />
    )
  }

  renderForIphoneX() {
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    return (
      <View
        name={'header-iosX'}
        ref={(c) => (this._root = c)}
        {...this.props}
        style={
          [
            this.props.style,
            {
              height: this.calculateHeight(this.state.orientation, variables.Inset),
              paddingTop: this.calculatePadder(this.state.orientation, variables.Inset)
            }
          ] as any
        }
      />
    )
  }

  renderForNormal() {
    return <View name={'header-other'} ref={(c) => (this._root = c)} {...this.props} />
  }

  render() {
    return (
      <View name={'header'} onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}>
        {this.renderStatusBar()}
        {isIphoneX() ? this.renderForIphoneX() : this.renderForNormal()}
      </View>
    )
  }
}

// Header.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   searchBar: PropTypes.bool,
//   rounded: PropTypes.bool
// }

const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header)
export { StyledHeader as Header }

import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, StatusBar, ViewProps, StyleSheet } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'

import { LodashUtils as _ } from '@app/tools'

export interface IHeaderStatusBarProps extends ViewProps {
  parallax?: boolean
  noStatusBar?: boolean
  /**
   * Prop to be used with <Header> component to have Search bar onto the Header section of your screen.
   */
  searchBar?: boolean
  /**
   * Wraps the search bar with predefined border options.
   * Default: regular
   */
  rounded?: boolean
  style?: ViewStyle | Array<ViewStyle>
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

class HeaderStatusBar extends React.Component<IHeaderStatusBarProps, any> {
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

  render() {
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
}

// HeaderStatusBar.propTypes = {
//   ...ViewPropTypes
// }

const StyledHeaderStatusBar = connectStyle('NativeBase.HeaderStatusBar', {}, mapPropsToStyleNames)(
  HeaderStatusBar
)
export { StyledHeaderStatusBar as HeaderStatusBar }

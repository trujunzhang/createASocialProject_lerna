import * as React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, ViewPropTypes, StyleSheet } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'

import { LodashUtils as _ } from '@app/tools'

export interface IProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class HeaderStatusBar extends React.Component<IProps, any> {
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

const StyledHeaderStatusBar = connectStyle('NativeBase.HeaderStatusBar', {}, mapPropsToStyleNames)(HeaderStatusBar)
export { StyledHeaderStatusBar as HeaderStatusBar }

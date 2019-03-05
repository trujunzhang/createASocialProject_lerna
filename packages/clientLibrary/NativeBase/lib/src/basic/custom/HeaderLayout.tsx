import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'

export interface IHeaderLayoutProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  searchBar: boolean
  rounded: boolean
}
class HeaderLayout extends React.Component<IHeaderLayoutProps, any> {
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

  renderCommon() {
    return <View name="headerLayout" ref={(c) => (this._root = c)} {...this.props} />
  }

  render() {
    return (
      <View onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}>{this.renderCommon()}</View>
    )
  }
}

// HeaderLayout.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   searchBar: PropTypes.bool,
//   rounded: PropTypes.bool
// }

const StyledHeaderLayout = connectStyle('NativeBase.HeaderLayout', {}, mapPropsToStyleNames)(
  HeaderLayout
)
export { StyledHeaderLayout as HeaderLayout }

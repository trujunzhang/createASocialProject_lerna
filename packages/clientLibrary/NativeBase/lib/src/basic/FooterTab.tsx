import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IFooterTabProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class FooterTab extends React.Component<IFooterTabProps, any> {
  private _root: any
  render() {
    return (
      <View name="footerTab" ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// FooterTab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab)

export { StyledFooterTab as FooterTab }

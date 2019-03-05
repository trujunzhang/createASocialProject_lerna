import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import { platformVariables as variable } from '@app/native-base-variables'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IBadgeProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Badge extends React.Component<IBadgeProps, any> {
  private _root: any
  render() {
    return (
      <View name="badge" ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Badge.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge)

export { StyledBadge as Badge }

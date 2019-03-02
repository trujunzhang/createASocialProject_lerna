import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ITabContainerProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class TabContainer extends React.Component<ITabContainerProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// TabContainer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(
  TabContainer
)
export { StyledTabContainer as TabContainer }

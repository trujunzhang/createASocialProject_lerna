import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ITabHeadingNBProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class TabHeadingNB extends React.Component<ITabHeadingNBProps, any> {
  private _root: any
  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

//TabHeadingNB.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledTabHeadingNB = connectStyle('NativeBase.TabHeading', {}, mapPropsToStyleNames)(
  TabHeadingNB
)
export { StyledTabHeadingNB as TabHeading }

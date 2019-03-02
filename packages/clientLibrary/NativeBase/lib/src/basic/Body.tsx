import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IBodyProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Body extends React.Component<IBodyProps, any> {
  private _root: any
  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Body.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(Body)

export { StyledBody as Body }

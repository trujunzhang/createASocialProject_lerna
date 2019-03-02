import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ISeparatorProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Separator extends React.Component<ISeparatorProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Separator.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledSeparator = connectStyle('NativeBase.Separator', {}, mapPropsToStyleNames)(Separator)

export { StyledSeparator as Separator }

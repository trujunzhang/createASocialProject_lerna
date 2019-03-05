import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ITabProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Tab extends React.Component<ITabProps, any> {
  private _root: any

  render() {
    return (
      <View name="tab" ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Tab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab)

export { StyledTab as Tab }

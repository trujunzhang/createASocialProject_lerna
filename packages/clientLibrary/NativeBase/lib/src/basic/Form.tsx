import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IFormProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Form extends React.Component<IFormProps, any> {
  private _root: any
  render() {
    return <View name="form" ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Form.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledForm = connectStyle('NativeBase.Form', {}, mapPropsToStyleNames)(Form)

export { StyledForm as Form }

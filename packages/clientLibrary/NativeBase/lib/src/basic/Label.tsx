import * as React from 'react'

import * as PropTypes from 'prop-types'
import { Text, TextProps ,ViewStyle} from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ILabelProps extends TextProps {
  style?: ViewStyle | Array<ViewStyle>
}
class Label extends React.Component<ILabelProps, any> {
  private _root: any
  render() {
    return <Text ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Label.propTypes = {
// 	...Text.propTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// };

const StyledLabel = connectStyle('NativeBase.Label', {}, mapPropsToStyleNames)(Label)

export { StyledLabel as Label }

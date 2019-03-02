import * as React from 'react'

import * as PropTypes from 'prop-types'
// import createReactClass from "create-react-class";
import { Picker, PickerProps } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

interface IPickerNBProps extends PickerProps {}
export default class PickerNB extends React.Component<IPickerNBProps, any> {
  private _root: any
  render() {
    return (
      <Picker ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </Picker>
    )
  }
}

;(PickerNB as any).Item = (props) => <Picker.Item {...props} />

// createReactClass({
// render() {
//   return <Picker.Item {...this.props} />;
// }
// });

// PickerNB.propTypes = {
// ...Picker.propTypes
// };

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB)

export { StyledPickerNB as PickerNB }

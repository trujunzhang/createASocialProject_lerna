import * as React from 'react'

import * as PropTypes from 'prop-types'
// import createReactClass from "create-react-class";
import { Picker, PickerProps, TextStyle, ViewStyle } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

interface IPickerNBProps extends PickerProps {
  style?: ViewStyle | Array<ViewStyle>
  mode?: 'dialog' | 'dropdown'
  iosHeader?: string
  inlineLabel?: boolean
  headerBackButtonText?: string
  placeholder?: string
  placeholderStyle?: TextStyle
  textStyle?: TextStyle
  // iosIcon?: React.ReactElement<NativeBase.Icon>
  iosIcon?: any
  note?: boolean
  placeholderIconColor?: string
  itemTextStyle?: TextStyle
  headerStyle?: ViewStyle
  headerTitleStyle?: TextStyle
  headerBackButtonTextStyle?: TextStyle
  modalStyle?: ViewStyle
  renderHeader?: (backAction: any) => React.ReactElement<any>
}
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
//   ...Picker.propTypes
// };

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB)

export { StyledPickerNB as PickerNB }

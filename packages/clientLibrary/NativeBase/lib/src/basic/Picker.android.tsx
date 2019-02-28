import * as React from 'react'
import * as ReactNative from 'react-native';
// import createReactClass from "create-react-class";
import { Picker } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends Picker {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  mode?: 'dialog' | 'dropdown'
  iosHeader?: string
  inlineLabel?: boolean
  headerBackButtonText?: string
  placeholder?: string
  placeholderStyle?: ReactNative.TextStyle
  textStyle?: ReactNative.TextStyle
  // iosIcon?: React.ReactElement<NativeBase.Icon>
  iosIcon?: any
  note?: boolean
  placeholderIconColor?: string
  itemTextStyle?: ReactNative.TextStyle
  headerStyle?: ReactNative.ViewStyle
  headerTitleStyle?: ReactNative.TextStyle
  headerBackButtonTextStyle?: ReactNative.TextStyle
  modalStyle?: ReactNative.ViewStyle
  renderHeader?: (backAction: any) => React.ReactElement<any>
}
export default class PickerNB extends React.Component<IProps, any> {
  private _root: any
  render() {
    return (
      <Picker ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </Picker>
    );
  }
}

PickerNB.Item = (props) => (<Picker.Item {...props} />);

// createReactClass({
// render() {
//   return <Picker.Item {...this.props} />;
// }
// });

// PickerNB.propTypes = {
//   ...Picker.propTypes
// };

const StyledPickerNB = connectStyle(
  "NativeBase.PickerNB",
  {},
  mapPropsToStyleNames
)(PickerNB);

export { StyledPickerNB as PickerNB };

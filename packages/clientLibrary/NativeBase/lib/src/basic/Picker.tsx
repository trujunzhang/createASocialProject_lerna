import * as React from 'react'
import * as ReactNative from 'react-native';
// import createReactClass from "create-react-class";
import { Picker } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
export default class PickerNB extends React.Component {
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
// ...Picker.propTypes
// };

const StyledPickerNB = connectStyle(
  "NativeBase.PickerNB",
  {},
  mapPropsToStyleNames
)(PickerNB);

export { StyledPickerNB as PickerNB };

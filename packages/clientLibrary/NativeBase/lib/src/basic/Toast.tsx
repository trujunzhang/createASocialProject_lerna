
import * as React from 'react'
import * as ReactNative from 'react-native'
import { View, ViewProps } from 'react-primitives'

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IToastProps extends ViewProps {
    style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Toast extends React.Component<IToastProps ,any> {
    private _root: any
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

//Toast.propTypes = {
 // ...ViewPropTypes,
 // style: PropTypes.oneOfType([
  //  PropTypes.object,
  //  PropTypes.number,
 //   PropTypes.array
 // ])
//};

const StyledToast = connectStyle("NativeBase.Toast", {}, mapPropsToStyleNames)(
  Toast
);
export { StyledToast as Toast };

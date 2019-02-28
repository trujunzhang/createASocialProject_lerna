import * as React from 'react'
import * as ReactNative from 'react-native';
import { View, ViewProps } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Separator extends React.Component<IProps, any> {
  private _root: any

  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
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

const StyledSeparator = connectStyle(
  "NativeBase.Separator",
  {},
  mapPropsToStyleNames
)(Separator);

export { StyledSeparator as Separator };

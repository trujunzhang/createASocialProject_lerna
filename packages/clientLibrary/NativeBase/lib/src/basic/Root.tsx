import * as React from 'react'
import { View, ViewProps } from "react-primitives";
import * as ReactNative from 'react-native';
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import { ToastContainer as Toast } from "./ToastContainer";
import { ActionSheetContainer as ActionSheet } from "./Actionsheet";
import { Text } from "./Text";

export interface IProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Root extends React.Component {
  private _root: any
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props} style={{ flex: 1 }}>
        {this.props.children}
        <Toast
          ref={c => {
            if (c) Toast.toastInstance = c;
          }}
        />
        <ActionSheet
          ref={c => {
            if (c)
              ActionSheet.actionsheetInstance = c;
          }}
        />
      </View>
    );
  }
}

// Root.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledRoot = connectStyle("NativeBase.Root", {}, mapPropsToStyleNames)(
  Root
);

export { StyledRoot as Root };

import * as React from 'react'
import * as ReactNative from 'react-native';
import {
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  View
} from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import { platformVariables as variable } from '@app/native-base-variables'

export interface IListItemProps extends TouchableHighlight {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class ListItem extends React.Component<IListItemProps, any> {
  private _root: any
  static contextTypes = {
    theme: PropTypes.object
  };
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;

    if (
      Platform.OS === "ios" ||
      Platform.OS === "web" ||
      variables.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          ref={c => (this._root = c)}
          underlayColor={variables.listBtnUnderlayColor}
          {...this.props}
          style={this.props.touchableHighlightStyle}
        >
          <View {...this.props}>{this.props.children}</View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableNativeFeedback
          ref={c => (this._root = c)}
          {...this.props}
        >
          <View style={{ marginLeft: -17, paddingLeft: 17 }}>
            <View {...this.props}>{this.props.children}</View>
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

// ListItem.propTypes = {
//   ...TouchableHighlight.propTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ]),
//   touchableHighlightStyle: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.array
//   ]),
//   itemDivider: PropTypes.bool,
//   button: PropTypes.bool
// };

const StyledListItem = connectStyle(
  "NativeBase.ListItem",
  {},
  mapPropsToStyleNames
)(ListItem);

export { StyledListItem as ListItem };

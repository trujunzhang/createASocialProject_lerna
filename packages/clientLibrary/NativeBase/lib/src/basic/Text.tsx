import * as React from 'react'
import * as ReactNative from 'react-native'
import { Text as RNText, TextProps } from "react-primitives";
import { LodashUtils as _ } from '@app/tools'

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface ITextProps extends TextProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  uppercase: boolean
}
class Text extends React.Component<ITextProps, any>{
  private _root: any

  render() {
    const {
      uppercase,
      children,
    } = this.props;

    let text;
    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_.isString(child)) {
          return _.toUpper(child);
        } else {
          return child;
        }
      })
    } else {
      text = children;
    }

    return (
      <RNText ref={c => (this._root = c)} {...this.props}>
        {text}
      </RNText>
    );
  }
}

//Text.propTypes = {
// ...RNText.propTypes,
// uppercase: PropTypes.bool,
// style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//};

Text.defaultProps = {
  uppercase: false,
};

const StyledText = connectStyle("NativeBase.Text", {}, mapPropsToStyleNames)(Text);

export { StyledText as Text };

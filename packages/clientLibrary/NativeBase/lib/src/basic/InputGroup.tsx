import * as React from 'react'
import * as ReactNative from 'react-native';
import { View, ViewProps } from "react-primitives";

import { platformVariables as variable } from '@app/native-base-variables';
import { connectStyle } from "@app/native-base-shoutem-theme";
import computeProps from "../utils/computeProps";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class InputGroup extends React.Component {
  private _root: any
  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? 1 : undefined,
        borderRadius: this.props.rounded
          ? variables.inputGroupRoundedBorderRadius
          : undefined
      }
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.prepareRootProps()}>
        {this.props.children}
      </View>
    );
  }
}

// InputGroup.propTypes = {
//   ...ViewPropTypes,
//   regular: PropTypes.bool,
//   underline: PropTypes.bool,
//   rounded: PropTypes.bool,
//   success: PropTypes.bool,
//   error: PropTypes.bool,
//   disabled: PropTypes.bool
// };

const StyledInputGroup = connectStyle(
  "NativeBase.InputGroup",
  {},
  mapPropsToStyleNames
)(InputGroup);

export { StyledInputGroup as InputGroup };

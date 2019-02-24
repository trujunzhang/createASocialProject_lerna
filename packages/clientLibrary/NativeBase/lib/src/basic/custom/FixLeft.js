import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../../utils/mapPropsToStyleNames";

class FixLeft extends Component {
  render() {
    // debugger
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

FixLeft.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledFixLeft = connectStyle("NativeBase.FixLeft", {}, mapPropsToStyleNames)(
  FixLeft
);

export { StyledFixLeft as FixLeft };

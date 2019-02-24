import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../../utils/mapPropsToStyleNames";

class FixRight extends Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

FixRight.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledFixRight = connectStyle("NativeBase.FixRight", {}, mapPropsToStyleNames)(
  FixRight
);

export { StyledFixRight as FixRight };

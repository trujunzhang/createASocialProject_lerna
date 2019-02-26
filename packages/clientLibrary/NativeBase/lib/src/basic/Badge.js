import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "@app/native-base-shoutem-theme";
import { platformVariables as variable } from '@app/native-base-variables';
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Badge extends Component {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

Badge.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledBadge = connectStyle("NativeBase.Badge", {}, mapPropsToStyleNames)(
  Badge
);

export { StyledBadge as Badge };

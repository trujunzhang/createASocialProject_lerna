import * as React from 'react'
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Toast extends React.Component {
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

Toast.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledToast = connectStyle("NativeBase.Toast", {}, mapPropsToStyleNames)(
  Toast
);
export { StyledToast as Toast };

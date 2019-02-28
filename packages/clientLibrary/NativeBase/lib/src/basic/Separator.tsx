import * as React from 'react'
import PropTypes from "prop-types";
import { View, ViewProps } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Separator extends React.Component {
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

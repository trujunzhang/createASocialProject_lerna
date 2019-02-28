import * as React from 'react'
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Body extends React.Component {
  private _root: any
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

// Body.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledBody = connectStyle("NativeBase.Body", {}, mapPropsToStyleNames)(
  Body
);

export { StyledBody as Body };

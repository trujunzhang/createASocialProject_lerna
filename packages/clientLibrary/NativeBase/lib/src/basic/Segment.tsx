import * as React from 'react'
import PropTypes from "prop-types";
import { View, ViewProps } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Segment extends React.Component {
  private _root: any
  render() {
    return <View ref={c => (this._root = c)} {...this.props} />;
  }
}

// Segment.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledSegment = connectStyle(
  "NativeBase.Segment",
  {},
  mapPropsToStyleNames
)(Segment);
export { StyledSegment as Segment };

import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Right extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ name: 'right', ref: (c) => (this._root = c) }, this.props));
    }
}
// Right.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledRight = connectStyle('NativeBase.Right', {}, mapPropsToStyleNames)(Right);
export { StyledRight as Right };
//# sourceMappingURL=index.js.map
import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Left extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ name: 'left', ref: (c) => (this._root = c) }, this.props));
    }
}
// Left.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledLeft = connectStyle('NativeBase.Left', {}, mapPropsToStyleNames)(Left);
export { StyledLeft as Left };
//# sourceMappingURL=index.js.map
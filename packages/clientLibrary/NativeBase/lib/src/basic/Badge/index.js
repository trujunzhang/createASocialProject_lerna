import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Badge extends React.Component {
    render() {
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
// Badge.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };
const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge);
export { StyledBadge as Badge };
//# sourceMappingURL=index.js.map
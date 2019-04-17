import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Tab extends React.Component {
    render() {
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
// Tab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab);
export { StyledTab as Tab };
//# sourceMappingURL=index.js.map
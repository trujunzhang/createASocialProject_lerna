import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class TabContainer extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// TabContainer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(TabContainer);
export { StyledTabContainer as TabContainer };
//# sourceMappingURL=index.js.map
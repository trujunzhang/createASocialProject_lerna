import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class FooterTab extends React.Component {
    render() {
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
// FooterTab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab);
export { StyledFooterTab as FooterTab };
//# sourceMappingURL=index.js.map
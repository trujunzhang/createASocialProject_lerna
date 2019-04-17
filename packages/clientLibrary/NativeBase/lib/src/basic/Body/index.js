import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Body extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ name: 'body', ref: (c) => (this._root = c) }, this.props));
    }
}
// Body.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(Body);
export { StyledBody as Body };
//# sourceMappingURL=index.js.map
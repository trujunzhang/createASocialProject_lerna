import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Separator extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// Separator.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledSeparator = connectStyle('NativeBase.Separator', {}, mapPropsToStyleNames)(Separator);
export { StyledSeparator as Separator };
//# sourceMappingURL=index.js.map
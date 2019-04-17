import * as React from 'react';
import { Text } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Subtitle extends React.Component {
    render() {
        return React.createElement(Text, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// Subtitle.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledSubtitle = connectStyle('NativeBase.Subtitle', {}, mapPropsToStyleNames)(Subtitle);
export { StyledSubtitle as Subtitle };
//# sourceMappingURL=index.js.map
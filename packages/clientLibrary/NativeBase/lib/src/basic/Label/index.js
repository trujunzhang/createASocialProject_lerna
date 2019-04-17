import * as React from 'react';
import { Text } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Label extends React.Component {
    render() {
        return React.createElement(Text, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// Label.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledLabel = connectStyle('NativeBase.Label', {}, mapPropsToStyleNames)(Label);
export { StyledLabel as Label };
//# sourceMappingURL=index.js.map
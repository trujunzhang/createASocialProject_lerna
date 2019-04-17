import * as React from 'react';
import { Text } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Title extends React.Component {
    render() {
        return React.createElement(Text, Object.assign({ ref: (c) => (this._root = c), numberOfLines: 1 }, this.props));
    }
}
// Title.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title);
export { StyledTitle as Title };
//# sourceMappingURL=index.js.map
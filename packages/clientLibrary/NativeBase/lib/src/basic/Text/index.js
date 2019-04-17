import * as React from 'react';
import { Text as RNText } from 'react-primitives';
import { LodashUtils as _ } from '@app/tools';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Text extends React.Component {
    render() {
        const { uppercase, children } = this.props;
        let text;
        if (uppercase) {
            text = React.Children.map(children, (child) => {
                if (_.isString(child)) {
                    return _.toUpper(child);
                }
                else {
                    return child;
                }
            });
        }
        else {
            text = children;
        }
        return (React.createElement(RNText, Object.assign({ ref: (c) => (this._root = c) }, this.props), text));
    }
}
// Text.propTypes = {
//   ...RNText.propTypes,
//   uppercase: PropTypes.bool,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
;
Text.defaultProps = {
    uppercase: false
};
const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(Text);
export { StyledText as Text };
//# sourceMappingURL=index.js.map
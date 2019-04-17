import * as React from 'react';
import { Text } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class H2 extends React.Component {
    render() {
        return React.createElement(Text, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
const childrenType = function (props, propName, component) {
    let error;
    const prop = props[propName];
    React.Children.forEach(prop, (child) => {
        if (typeof child !== 'string' && typeof child !== 'number') {
            error = new Error(`${component} should have only string or number`);
        }
    });
    return error;
};
// H2.propTypes = {
//   ...Text.propTypes,
//   children: childrenType,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledH2 = connectStyle('NativeBase.H2', {}, mapPropsToStyleNames)(H2);
export { StyledH2 as H2 };
//# sourceMappingURL=index.js.map
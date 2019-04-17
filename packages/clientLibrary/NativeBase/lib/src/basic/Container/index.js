import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Container extends React.Component {
    render() {
        return (React.createElement(View, Object.assign({ name: 'container', ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
// Container.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);
export { StyledContainer as Container };
//# sourceMappingURL=index.js.map
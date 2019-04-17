import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Form extends React.Component {
    render() {
        return React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// Form.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledForm = connectStyle('NativeBase.Form', {}, mapPropsToStyleNames)(Form);
export { StyledForm as Form };
//# sourceMappingURL=index.js.map
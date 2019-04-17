import * as React from 'react';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
import { ToastContainer as Toast } from '@appBasic/ToastContainer';
import { ActionSheetContainer as ActionSheet } from '@appBasic/Actionsheet';
class Root extends React.Component {
    render() {
        return (React.createElement(View, Object.assign({ name: 'root', ref: (c) => (this._root = c) }, this.props, { style: { flex: 1 } }),
            this.props.children,
            React.createElement(Toast, { ref: (c) => {
                    if (c)
                        Toast.toastInstance = c;
                } }),
            React.createElement(ActionSheet, { ref: (c) => {
                    if (c)
                        ActionSheet.actionsheetInstance = c;
                } })));
    }
}
// Root.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledRoot = connectStyle('NativeBase.Root', {}, mapPropsToStyleNames)(Root);
export { StyledRoot as Root };
//# sourceMappingURL=index.js.map
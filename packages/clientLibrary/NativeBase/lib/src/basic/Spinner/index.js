import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import { mapPropsToStyleNames } from '@app/tools';
class Spinner extends React.Component {
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(ActivityIndicator, Object.assign({ ref: (c) => (this._root = c) }, this.props, { color: this.props.color
                ? this.props.color
                : this.props.inverse
                    ? variables.inverseSpinnerColor
                    : variables.defaultSpinnerColor, size: this.props.size ? this.props.size : 'large' })));
    }
}
Spinner.contextTypes = {
    theme: PropTypes.object
};
// Spinner.propTypes = {
//   ...ActivityIndicator.propTypes,
//   color: PropTypes.string,
//   inverse: PropTypes.bool
// }
const StyledSpinner = connectStyle('NativeBase.Spinner', {}, mapPropsToStyleNames)(Spinner);
export { StyledSpinner as Spinner };
//# sourceMappingURL=index.js.map
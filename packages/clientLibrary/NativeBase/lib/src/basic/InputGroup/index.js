import * as React from 'react';
import { View } from 'react-primitives';
import { platformVariables as variables } from '@appVariables/theme/variables/platform'; // variables // [variables]
import { connectStyle } from 'native-base-shoutem-theme';
import computeProps from '@appUtils/computeProps';
import { mapPropsToStyleNames } from '@app/tools';
class InputGroup extends React.Component {
    getInitialStyle() {
        return {
            roundedInputGroup: {
                borderWidth: this.props.rounded ? 1 : undefined,
                borderRadius: this.props.rounded ? variables.inputGroupRoundedBorderRadius : undefined
            }
        };
    }
    prepareRootProps() {
        const defaultProps = {
            style: this.getInitialStyle().roundedInputGroup
        };
        return computeProps(this.props, defaultProps);
    }
    render() {
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.prepareRootProps()), this.props.children));
    }
}
// InputGroup.propTypes = {
//   ...ViewPropTypes,
//   regular: PropTypes.bool,
//   underline: PropTypes.bool,
//   rounded: PropTypes.bool,
//   success: PropTypes.bool,
//   error: PropTypes.bool,
//   disabled: PropTypes.bool
// }
const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup);
export { StyledInputGroup as InputGroup };
//# sourceMappingURL=index.js.map
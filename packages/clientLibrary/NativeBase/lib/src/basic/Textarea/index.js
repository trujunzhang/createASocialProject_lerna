import * as React from 'react';
import { TextInput } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { platformVariables as variables } from '@appVariables/theme/variables/platform'; // variables // [variables]
import computeProps from '@appUtils/computeProps';
import { mapPropsToStyleNames } from '@app/tools';
class Textarea extends React.Component {
    getStyle() {
        return {
            textarea: {
                height: this.props.rowSpan ? this.props.rowSpan * 25 : 60
            }
        };
    }
    prepareRootProps() {
        const defaultProps = {
            style: this.getStyle().textarea
        };
        return computeProps(this.props, defaultProps);
    }
    render() {
        return (React.createElement(TextInput, Object.assign({ ref: (c) => {
                this._textInput = c;
                this._root = c;
            } }, this.prepareRootProps(), { multiline: true, placeholderTextColor: this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : variables.inputColorPlaceholder, underlineColorAndroid: "rgba(0,0,0,0)", editable: this.props.disabled ? false : true })));
    }
}
// Textarea.propTypes = {
//   ...TextInput.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   rowSpan: PropTypes.number,
//   bordered: PropTypes.bool,
//   underline: PropTypes.bool
// }
const StyledTextarea = connectStyle('NativeBase.Textarea', {}, mapPropsToStyleNames)(Textarea);
export { StyledTextarea as Textarea };
//# sourceMappingURL=index.js.map
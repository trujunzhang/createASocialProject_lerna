import * as React from 'react';
import { TextInput } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import { mapPropsToStyleNames } from '@app/tools';
import NativeBaseComponent from '@appBasic/Base/NativeBaseComponent';
class Input extends NativeBaseComponent {
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(TextInput, Object.assign({ ref: (c) => {
                this._textInput = c;
                this._root = c;
            }, editable: this.props.disabled ? false : true, underlineColorAndroid: "rgba(0,0,0,0)", placeholderTextColor: this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : variables.inputColorPlaceholder }, this.props)));
    }
}
// Input.propTypes = {
//   ...TextInput.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledInput = connectStyle('NativeBase.Input', {}, mapPropsToStyleNames)(Input);
export { StyledInput as Input };
//# sourceMappingURL=index.js.map
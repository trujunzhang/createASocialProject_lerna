import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-primitives';
// TODO:DJZHANG(NB)
import { getIoniconsIcons } from '@appUtils/cacheHelper';
// import IconNB from 'react-native-vector-icons/Ionicons'
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import computeProps from '@appUtils/computeProps';
class CheckBox extends React.Component {
    getInitialStyle(variables) {
        return {
            checkStyle: {
                borderColor: this.props.color ? this.props.color : variables.checkboxBgColor,
                backgroundColor: this.props.checked === true
                    ? this.props.color
                        ? this.props.color
                        : variables.checkboxBgColor
                    : 'transparent'
            }
        };
    }
    prepareRootProps(variables) {
        const defaultProps = {
            style: this.getInitialStyle(variables).checkStyle
        };
        return computeProps(this.props, defaultProps);
    }
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        const platformStyle = variables.platformStyle;
        const platform = variables.platform;
        const IconNB = getIoniconsIcons() || View;
        return (React.createElement(TouchableOpacity, Object.assign({ ref: (c) => (this._root = c) }, this.prepareRootProps(variables)),
            React.createElement(IconNB, { style: {
                    color: this.props.checked === true ? variables.checkboxTickColor : 'transparent',
                    fontSize: variables.CheckboxFontSize,
                    lineHeight: variables.CheckboxIconSize,
                    marginTop: variables.CheckboxIconMarginTop,
                    textShadowRadius: 0
                }, name: platform === 'ios' && platformStyle !== 'material' ? 'ios-checkmark' : 'md-checkmark' })));
    }
}
CheckBox.contextTypes = {
    theme: PropTypes.object
};
// CheckBox.propTypes = {
//   ...TouchableOpacity.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   checked: PropTypes.bool,
//   onPress: PropTypes.func
// }
const StyledCheckBox = connectStyle('NativeBase.CheckBox', {}, mapPropsToStyleNames)(CheckBox);
export { StyledCheckBox as CheckBox };
//# sourceMappingURL=index.js.map
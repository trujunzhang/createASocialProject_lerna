import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TouchableOpacity, Platform, View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
// TODO:DJZHANG(NB)
import { getIoniconsIcons } from '@appUtils/cacheHelper';
// import Icon from 'react-native-vector-icons/Ionicons'
import { mapPropsToStyleNames } from '@app/tools';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import computeProps from '@appUtils/computeProps';
class Radio extends React.Component {
    prepareRootProps() {
        const defaultProps = {
            standardStyle: false
        };
        return computeProps(this.props, defaultProps);
    }
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        const platformStyle = variables.platformStyle;
        const platform = variables.platform;
        const Icon = getIoniconsIcons() || View;
        return (React.createElement(TouchableOpacity, Object.assign({ ref: (c) => (this._root = c) }, this.prepareRootProps()), Platform.OS === 'ios' && !this.props.standardStyle ? (this.props.selected && (React.createElement(Icon, { style: {
                color: this.props.selectedColor ? this.props.selectedColor : variables.radioColor,
                lineHeight: 25,
                height: 20,
                fontSize: variables.radioBtnSize
            }, name: "ios-checkmark" }))) : (React.createElement(Icon, { style: {
                color: Platform.OS === 'ios'
                    ? this.props.selected
                        ? this.props.selectedColor
                            ? this.props.selectedColor
                            : variables.radioColor
                        : this.props.color
                            ? this.props.color
                            : undefined
                    : this.props.selected
                        ? this.props.selectedColor
                            ? this.props.selectedColor
                            : variables.radioSelectedColorAndroid
                        : this.props.color
                            ? this.props.color
                            : undefined,
                lineHeight: variables.radioBtnLineHeight,
                fontSize: variables.radioBtnSize
            }, name: Platform.OS === 'ios'
                ? this.props.selected
                    ? 'ios-radio-button-on'
                    : 'ios-radio-button-off'
                : this.props.selected
                    ? 'md-radio-button-on'
                    : 'md-radio-button-off' }))));
    }
}
Radio.contextTypes = {
    theme: PropTypes.object
};
// Radio.propTypes = {
//   ...TouchableOpacity.propTypes,
//   selected: PropTypes.bool,
//   standardStyle: PropTypes.bool
// }
const StyledRadio = connectStyle('NativeBase.Radio', {}, mapPropsToStyleNames)(Radio);
export { StyledRadio as Radio };
//# sourceMappingURL=index.js.map
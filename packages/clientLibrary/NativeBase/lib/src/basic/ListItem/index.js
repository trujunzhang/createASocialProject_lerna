import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TouchableHighlight, Platform, TouchableNativeFeedback, View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
class ListItem extends React.Component {
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        if (Platform.OS === 'ios' ||
            Platform.OS === 'web' ||
            variables.androidRipple === false ||
            (!this.props.onPress && !this.props.onLongPress) ||
            Platform.Version <= 21) {
            return (React.createElement(TouchableHighlight, Object.assign({ onPress: this.props.onPress, onLongPress: this.props.onLongPress, ref: (c) => (this._root = c), underlayColor: variables.listBtnUnderlayColor }, this.props, { style: this.props.touchableHighlightStyle }),
                React.createElement(View, Object.assign({}, this.props, { testID: undefined }), this.props.children)));
        }
        else {
            return (React.createElement(TouchableNativeFeedback, Object.assign({ ref: (c) => (this._root = c) }, this.props),
                React.createElement(View, { style: { marginLeft: -17, paddingLeft: 17 } },
                    React.createElement(View, Object.assign({}, this.props, { testID: undefined }), this.props.children))));
        }
    }
}
ListItem.contextTypes = {
    theme: PropTypes.object
};
// ListItem.propTypes = {
//   ...TouchableHighlight.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   touchableHighlightStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   itemDivider: PropTypes.bool,
//   button: PropTypes.bool
// }
const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);
export { StyledListItem as ListItem };
//# sourceMappingURL=index.js.map
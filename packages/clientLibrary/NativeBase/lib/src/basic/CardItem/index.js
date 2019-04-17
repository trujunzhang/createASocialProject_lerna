import * as React from 'react';
import { TouchableOpacity, View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class CardItem extends React.Component {
    render() {
        if (this.props.button) {
            return (React.createElement(TouchableOpacity, Object.assign({ ref: (c) => (this._root = c), activeOpacity: 0.2 }, this.props), this.props.children));
        }
        else {
            return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
        }
    }
}
// CardItem.propTypes = {
//   ...TouchableOpacity.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   header: PropTypes.bool,
//   cardBody: PropTypes.bool,
//   footer: PropTypes.bool,
//   button: PropTypes.bool
// }
const StyledCardItem = connectStyle('NativeBase.CardItem', {}, mapPropsToStyleNames)(CardItem);
export { StyledCardItem as CardItem };
//# sourceMappingURL=index.js.map
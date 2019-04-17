import * as React from 'react';
import { View, ListView } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Card extends React.Component {
    render() {
        if (this.props.dataArray && this.props.renderRow) {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            const dataSource = ds.cloneWithRows(this.props.dataArray);
            return (React.createElement(ListView, Object.assign({}, this.props, { enableEmptySections: true, dataSource: dataSource, renderRow: this.props.renderRow })));
        }
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
// Card.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   dataArray: PropTypes.array,
//   renderRow: PropTypes.func
// }
const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(Card);
export { StyledCard as Card };
//# sourceMappingURL=index.js.map
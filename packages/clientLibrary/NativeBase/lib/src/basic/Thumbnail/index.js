import * as React from 'react';
import { Image } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
class Thumbnail extends React.Component {
    render() {
        const RNImage = Image;
        return React.createElement(RNImage, Object.assign({ ref: (c) => (this._root = c) }, this.props));
    }
}
// Thumbnail.propTypes = {
//   ...Image.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   square: PropTypes.bool,
//   circular: PropTypes.bool,
//   size: PropTypes.number
// }
const StyledThumbnail = connectStyle('NativeBase.Thumbnail', {}, mapPropsToStyleNames)(Thumbnail);
export { StyledThumbnail as Thumbnail };
//# sourceMappingURL=index.js.map
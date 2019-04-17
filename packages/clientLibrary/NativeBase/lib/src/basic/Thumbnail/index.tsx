import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Image } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import computeProps from '@appUtils/computeProps'
import { mapPropsToStyleNames } from '@app/tools'

class Thumbnail extends React.Component<any, any> {
  private _root: any
  render() {
    const RNImage: any = Image
    return <RNImage ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Thumbnail.propTypes = {
//   ...Image.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   square: PropTypes.bool,
//   circular: PropTypes.bool,
//   size: PropTypes.number
// }

const StyledThumbnail = connectStyle('NativeBase.Thumbnail', {}, mapPropsToStyleNames)(Thumbnail)

export { StyledThumbnail as Thumbnail }

import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Text } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Title extends React.Component<any, any> {
  private _root: any
  render() {
    return <Text ref={(c) => (this._root = c)} numberOfLines={1} {...this.props} />
  }
}

// Title.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledTitle = connectStyle('NativeBase.Title', {}, mapPropsToStyleNames)(Title)
export { StyledTitle as Title }

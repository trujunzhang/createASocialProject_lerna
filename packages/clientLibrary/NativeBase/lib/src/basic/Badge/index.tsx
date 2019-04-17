import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'

import { IThemeVariables } from '@app/tools' // typings

import { platformVariables as variables } from '@appVariables/theme/variables/platform' // variables // [variables]
import { mapPropsToStyleNames } from '@app/tools'

import { BadgeProps } from './Badge'

class Badge extends React.Component<BadgeProps, any> {
  private _root: any
  render() {
    return (
      <View ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Badge.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledBadge = connectStyle('NativeBase.Badge', {}, mapPropsToStyleNames)(Badge)

export { StyledBadge as Badge }

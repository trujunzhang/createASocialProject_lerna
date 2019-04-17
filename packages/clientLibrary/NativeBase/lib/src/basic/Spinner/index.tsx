import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { IThemeVariables } from '@app/tools' // typings
import { platformVariables as variable } from '@appVariables/theme/variables/platform' // variables // [variable]

import { mapPropsToStyleNames } from '@app/tools'

class Spinner extends React.Component<any, any> {
  private _root: any
  static contextTypes = {
    theme: PropTypes.object
  }
  render() {
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    return (
      <ActivityIndicator
        ref={(c) => (this._root = c)}
        {...this.props}
        color={
          this.props.color
            ? this.props.color
            : this.props.inverse
            ? variables.inverseSpinnerColor
            : variables.defaultSpinnerColor
        }
        size={this.props.size ? this.props.size : 'large'}
      />
    )
  }
}

// Spinner.propTypes = {
//   ...ActivityIndicator.propTypes,
//   color: PropTypes.string,
//   inverse: PropTypes.bool
// }

const StyledSpinner = connectStyle('NativeBase.Spinner', {}, mapPropsToStyleNames)(Spinner)

export { StyledSpinner as Spinner }

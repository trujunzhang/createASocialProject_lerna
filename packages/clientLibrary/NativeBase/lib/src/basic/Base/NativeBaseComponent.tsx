import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
export interface INativeBaseComponentProps {
  theme?: any
}
export default class NativeBaseComponent extends React.Component<any, any> {
  static contextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string
  }

  static propTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string
  }

  static childContextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string
  }

  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.context.theme
    }
  }

  getContextForegroundColor() {
    return this.context.foregroundColor
  }
}

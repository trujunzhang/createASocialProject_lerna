import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { IThemeVariables } from '@app/tools' // typings
import { platformVariables as variable } from '@appVariables/theme/variables/platform' // variables // [variable]

import { Text } from '@appBasic/Text'
import computeProps from '@appUtils/computeProps'

import { mapPropsToStyleNames } from '@app/tools'

import { ButtonProps } from './Button'

class Button extends React.Component<ButtonProps, any> {
  static contextTypes = {
    theme: PropTypes.object
  }

  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: this.props.bordered ? 1 : undefined,
        borderRadius: this.props.rounded && this.props.bordered ? variable.borderRadiusLarge : 2
      }
    }
  }

  // _root: React$Element<TouchableOpacity | TouchableNativeFeedback>;
  _root: any

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn
    }

    if (Array.isArray(this.props.style)) {
      const flattenedStyle = this.props.style.reduce(
        (accumulator: any, currentValue) => accumulator.concat(currentValue),
        []
      )
      return computeProps({ ...this.props, style: flattenedStyle }, defaultProps)
    }

    return computeProps(this.props, defaultProps)
  }
  render() {
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    const children =
      Platform.OS === 'ios'
        ? this.props.children
        : React.Children.map(this.props.children, (child: any) =>
            child && child.type === Text
              ? React.cloneElement(child, {
                  uppercase: variables.btnUppercaseAndroidText,
                  ...child.props
                })
              : child
          )
    if (
      Platform.OS === 'ios' ||
      Platform.OS === 'web' ||
      variables.androidRipple === false ||
      Platform['Version'] < 21
    ) {
      return (
        <TouchableOpacity
          {...this.prepareRootProps()}
          ref={(c) => (this._root = c)}
          activeOpacity={this.props.activeOpacity > 0 ? this.props.activeOpacity : 0.5}>
          {children}
        </TouchableOpacity>
      )
    } else {
      if (this.props.rounded) {
        let buttonStyle = { ...this.prepareRootProps().style }
        let buttonFlex = this.props.full || this.props.block ? 1 : buttonStyle.flex
        return (
          <View
            style={[
              { maxHeight: buttonStyle.height },
              buttonStyle,
              { paddingTop: undefined, paddingBottom: undefined }
            ]}>
            <TouchableNativeFeedback
              ref={(c) => (this._root = c)}
              background={
                this.props.androidRippleColor
                  ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor, true)
                  : TouchableNativeFeedback.Ripple(variables.androidRippleColor, true)
              }
              {...this.prepareRootProps()}>
              <View
                style={[
                  styles.childContainer,
                  {
                    paddingTop: buttonStyle.paddingTop,
                    paddingBottom: buttonStyle.paddingBottom,
                    height: buttonStyle.height,
                    flexGrow: buttonFlex
                  }
                ]}>
                {children}
              </View>
            </TouchableNativeFeedback>
          </View>
        )
      } else {
        return (
          <TouchableNativeFeedback
            ref={(c) => (this._root = c)}
            onPress={this.props.onPress}
            background={
              this.props.transparent
                ? TouchableNativeFeedback.Ripple('transparent')
                : TouchableNativeFeedback.Ripple(variables.androidRippleColor, false)
            }
            {...this.prepareRootProps()}>
            <View {...this.prepareRootProps()}>{children}</View>
          </TouchableNativeFeedback>
        )
      }
    }
  }
}

// Button.propTypes = {
//   ...TouchableOpacity.propTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ]),
//   block: PropTypes.bool,
//   primary: PropTypes.bool,
//   transparent: PropTypes.bool,
//   success: PropTypes.bool,
//   danger: PropTypes.bool,
//   warning: PropTypes.bool,
//   info: PropTypes.bool,
//   bordered: PropTypes.bool,
//   disabled: PropTypes.bool,
//   rounded: PropTypes.bool,
//   large: PropTypes.bool,
//   small: PropTypes.bool,
//   active: PropTypes.bool
// };

const styles = StyleSheet.create({
  childContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button)
export { StyledButton as Button }

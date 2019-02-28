import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from '@app/react-native-keyboard-aware-scroll-view'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'
import { isIphoneX } from '@app/react-native-iphone-x-helper'

export interface IContentProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle> | any
  /**
     * The theme prop can be applied to any component of NativeBase.
     */
  refreshing?: boolean
  refreshControl?: object | any
  theme?: Object
  padder?: boolean
  disableKBDismissScroll?: boolean | any
  enableResetScrollToCoords?: boolean
  contentOffset?: Object | any
  scrollEnabled?: boolean
  contentContainerStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  keyboardShouldPersistTaps?: string | any
  keyboardDismissMode?: string | any
}
class Content extends React.Component<IContentProps, any> {
  private _root: any
  private _scrollview: any
  static contextTypes = {
    theme: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      orientation: 'portrait'
    }
  }
  layoutChange(val) {
    let maxComp = Math.max(variable.deviceWidth, variable.deviceHeight)
    if (val.width >= maxComp) this.setState({ orientation: 'landscape' })
    else {
      this.setState({ orientation: 'portrait' })
    }
  }

  calculateLeft(mode, inSet) {
    let inset: any = null
    if (inSet !== undefined) {
      inset = inSet
    } else {
      inset = variable.Inset
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape
    let leftPadder = null
    if (this.props.style[1] !== undefined) {
      if (
        this.props.style[1].padding !== undefined ||
        this.props.style[1].paddingLeft !== undefined
      ) {
        leftPadder =
          (this.props.style[1].paddingLeft
            ? this.props.style[1].paddingLeft
            : this.props.style[1].padding) + InsetValues.leftInset
      }
    } else if (
      this.props.style.padding !== undefined ||
      this.props.style.paddingLeft !== undefined
    ) {
      leftPadder =
        (this.props.style.paddingLeft ? this.props.style.paddingLeft : this.props.style.padding) +
        InsetValues.leftInset
    } else {
      leftPadder = InsetValues.leftInset
    }
    return leftPadder
  }
  calculateRight(mode, inSet) {
    let inset: any = null
    if (inSet !== undefined) {
      inset = inSet
    } else {
      inset = variable.Inset
    }
    const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape
    let rightPadder = null
    if (this.props.style[1] !== undefined) {
      if (
        this.props.style[1].padding !== undefined ||
        this.props.style[1].paddingRight !== undefined
      ) {
        rightPadder =
          (this.props.style[1].paddingRight
            ? this.props.style[1].paddingRight
            : this.props.style[1].padding) + InsetValues.rightInset
      }
    } else if (
      this.props.style.padding !== undefined ||
      this.props.style.paddingRight !== undefined
    ) {
      rightPadder =
        (this.props.style.paddingRight ? this.props.style.paddingRight : this.props.style.padding) +
        InsetValues.rightInset
    } else {
      rightPadder = InsetValues.rightInset
    }
    return rightPadder
  }
  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    return isIphoneX() ? (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={(this.props.disableKBDismissScroll ? null : { x: 0, y: 0 }) as any}
        keyboardShouldPersistTaps={
          this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'
        }
        ref={(c) => {
          this._scrollview = c
          this._root = c
        }}
        {...this.props}
        onLayout={(e) => this.layoutChange(e.nativeEvent.layout)}
        style={[
          this.props.style,
          {
            paddingLeft: this.calculateLeft(this.state.orientation, variables.Inset)
          }
        ]}
        contentContainerStyle={[
          { padding: this.props.padder ? variables.contentPadding : undefined },
          this.props.contentContainerStyle
        ]}>
        {this.props.children}
      </KeyboardAwareScrollView>
    ) : (
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={(this.props.disableKBDismissScroll ? null : { x: 0, y: 0 }) as any}
          keyboardShouldPersistTaps={
            this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'
          }
          ref={(c) => {
            this._scrollview = c
            this._root = c
          }}
          {...this.props}
          contentContainerStyle={[
            { padding: this.props.padder ? variables.contentPadding : undefined },
            this.props.contentContainerStyle
          ]}>
          {this.props.children}
        </KeyboardAwareScrollView>
      )
  }
}

// Content.propTypes = {
//     style: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.number,
//         PropTypes.array
//     ]),
//     padder: PropTypes.bool,
//     disableKBDismissScroll: PropTypes.bool,
//     enableResetScrollToCoords: PropTypes.bool,
//     keyboardShouldPersistTaps: PropTypes.string
// };

const StyledContent = connectStyle('NativeBase.Content', {}, mapPropsToStyleNames)(Content)

export { StyledContent as Content }

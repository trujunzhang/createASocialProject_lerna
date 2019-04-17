import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  // Animated,
  // PanResponder,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { Text } from '@appBasic/Text'
import { Left } from '@appBasic/Left'
import { Right } from '@appBasic/Right'
import { Body } from '@appBasic/Body'
import { ListItem } from '@appBasic/ListItem'
import { mapPropsToStyleNames } from '@app/tools'

import { SwipeRowProps, ISwipRowState } from './SwipeRow'

const PREVIEW_OPEN_DELAY = 700
const PREVIEW_CLOSE_DELAY = 300

class SwipeRow extends React.Component<SwipeRowProps, ISwipRowState> {
  private _root: any
  private horizontalSwipeGestureBegan: any
  private swipeInitialX: any
  private parentScrollEnabled: any
  private ranPreview: any
  // private _translateX: any
  // private _panResponder: any

  static defaultProps = {
    leftOpenValue: 0,
    rightOpenValue: 0,
    closeOnRowPress: true,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    recalculateHiddenLayout: false,
    preview: false,
    previewDuration: 300,
    directionalDistanceChangeThreshold: 2,
    swipeToOpenPercent: 50
  }
  constructor(props: SwipeRowProps) {
    super(props)
    this.horizontalSwipeGestureBegan = false
    this.swipeInitialX = null
    this.parentScrollEnabled = true
    this.ranPreview = false
    this.state = {
      dimensionsSet: false,
      hiddenHeight: 0,
      hiddenWidth: 0
    }
  }

  componentWillMount() {}

  onContentLayout(e) {
    this.setState({
      dimensionsSet: !this.props.recalculateHiddenLayout,
      hiddenHeight: e.nativeEvent.layout.height,
      hiddenWidth: e.nativeEvent.layout.width
    })

    if (this.props.preview && !this.ranPreview) {
      this.ranPreview = true
      let previewOpenValue = this.props.previewOpenValue || (this.props.rightOpenValue || 0) * 0.5
    }
  }

  handleOnMoveShouldSetPanResponder(e, gs) {
    const { dx } = gs
    return Math.abs(dx) > (this.props.directionalDistanceChangeThreshold || 0)
  }

  handlePanResponderMove(e, gestureState) {
    const { dx, dy } = gestureState
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)
  }

  handlePanResponderEnd(e, gestureState) {}

  /*
   * This method is called by SwipeListView
   */
  closeRow() {
    this.manuallySwipeRow(0)
  }

  openLeftRow() {
    // this.manuallySwipeRow(this.props.leftOpenValue)
  }

  openRightRow() {
    // this.manuallySwipeRow(this.props.rightOpenValue)
  }

  manuallySwipeRow(toValue) {
    if (toValue === 0) {
      this.props.onRowClose && this.props.onRowClose()
    } else {
      this.props.onRowOpen && this.props.onRowOpen(toValue)
    }

    // reset everything
    this.swipeInitialX = null
    this.horizontalSwipeGestureBegan = false
  }

  renderMainContent() {
    // We do this annoying if statement for performance.
    // We don't want the onLayout func to run after it runs once.
    if (this.state.dimensionsSet) {
      return (
        <View
          style={{
            zIndex: 2
          }}>
          {!this.props.list ? (
            <ListItem list style={[this.props.style]}>
              {this.props.body}
            </ListItem>
          ) : (
            <View style={[{ backgroundColor: '#FFF' }, this.props.style]}>{this.props.body}</View>
          )}
        </View>
      )
    } else {
      return (
        <View
          onLayout={(e) => this.onContentLayout(e)}
          style={{
            zIndex: 2
          }}>
          <View
            style={[
              {
                backgroundColor: '#FFF'
              },
              this.props.style
            ]}>
            {this.props.body}
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={this.props.style ? this.props.style : undefined}>
        <View
          style={
            [
              styles.hidden,
              {
                height: this.state.hiddenHeight,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            ] as any
          }>
          <Left style={{ width: this.props.leftOpenValue, zIndex: 1 }}>{this.props.left}</Left>
          <Body style={{ flex: 0 }} />
          <Right style={{ width: -this.props.rightOpenValue, zIndex: 1 }}>{this.props.right}</Right>
        </View>
        {this.renderMainContent()}
      </View>
    )
  }
}

const styles = {
  container: {
    // As of RN 0.29 flex: 1 is causing all rows to be the same height
    // flex: 1
  },
  hidden: {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0
  }
}

const StyledSwipeRow = connectStyle('NativeBase.SwipeRow', {}, mapPropsToStyleNames)(SwipeRow)
export { StyledSwipeRow as SwipeRow }

import * as React from 'react'

import { View, ViewProps, ViewStyle } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'

export interface IDeckSwiperProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  /**
   * Array<any>
   */
  dataSource?: Array<any> | any
  /**
   * Direction of iteration for elements
   * Default: iterates in backward direction
   */
  onSwipeLeft?: any
  /**
   * Direction of iteration for elements
   * Default: iterates in forward direction
   */
  onSwipeRight?: any
  /**
   * Takes a data entry from the data source and should return a renderable component to be rendered as the row.
   */
  renderItem?: any
  renderEmpty?: any
  renderTop?: any
  renderBottom?: any

  looping?: any
  onSwiping?: any
}
const SWIPE_THRESHOLD = 120

class DeckSwiper extends React.Component<IDeckSwiperProps, any> {
  private _root: any

  constructor(props) {
    super(props)
    this.state = {
      selectedItem: this.props.dataSource[0],
      selectedItem2: this.props.dataSource[1],
      card1Top: true,
      card2Top: false,
      looping: typeof this.props.looping === 'undefined' ? true : this.props.looping,
      disabled: this.props.dataSource.length === 0,
      lastCard: this.props.dataSource.length === 1
    }
  }

  componentWillReceiveProps({ dataSource }) {
    if (dataSource.length !== this.props.dataSource.length) {
      if (dataSource.length <= 1) {
        this.setState({
          ...this.state,
          selectedItem: dataSource[0],
          selectedItem2: undefined,
          disabled: dataSource.length === 0,
          lastCard: dataSource.length === 1
        })
        return
      }

      const visibleIndex = dataSource.indexOf(this.state.selectedItem)
      const currentIndex = visibleIndex < 0 ? visibleIndex + 1 : visibleIndex
      const nextIndex = currentIndex + 1 === dataSource.length ? 0 : currentIndex + 1

      this.setState({
        selectedItem: dataSource[currentIndex],
        selectedItem2: dataSource[nextIndex]
      })
    }
  }

  getInitialStyle() {
    return {
      topCard: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    }
  }

  findNextIndexes(currentIndex) {
    const newIdx = currentIndex + 1
    const newIdx2 = currentIndex + 2

    if (newIdx2 > this.props.dataSource.length - 1 && newIdx === this.props.dataSource.length - 1) {
      return [newIdx, 0]
    } else if (newIdx > this.props.dataSource.length - 1) {
      return [0, 1]
    }
    return [newIdx, newIdx2]
  }

  selectNext() {
    const dataSource = this.props.dataSource
    const currentIndex = dataSource.indexOf(this.state.selectedItem)

    // if not looping, check for these conditionals and if true return from selectNext()
    if (!this.state.looping) {
      // reached end -> only display static renderEmpty() -> no swiping
      if (currentIndex === dataSource.length - 1) {
        return this.setState({
          disabled: true
        })
      } else if (currentIndex === dataSource.length - 2) {
        // show last card with renderEmpty() component behind it
        return setTimeout(() => {
          this.setState({
            selectedItem: dataSource[currentIndex + 1]
          })
          setTimeout(() => {
            this.setState({
              lastCard: true
            })
          }, 350)
        }, 50)
      }
    }

    const nextIndexes = this.findNextIndexes(currentIndex)
    setTimeout(() => {
      this.setState({
        selectedItem: this.props.dataSource[nextIndexes[0]]
      })
      setTimeout(() => {
        this.setState({
          selectedItem2: this.props.dataSource[nextIndexes[1]]
        })
      }, 350)
    }, 50)
  }

  swipeRight() {}

  swipeLeft() {}

  componentWillMount() {}

  _resetState() {
    this.state.pan.setValue({ x: 0, y: 0 })
    this.state.enter.setValue(0.8)
    this.state.fadeAnim.setValue(0.8)
    this.setState({
      card1Top: !this.state.card1Top,
      card2Top: !this.state.card2Top
    })
    if (this.props.onSwiping) this.props.onSwiping(null)
  }

  getCardStyles() {
    const { pan, pan2, enter } = this.state

    const [translateX, translateY] = [pan.x, pan.y]
    // let [translateX, translateY] = [pan2.x, pan2.y];

    const rotate = pan.x.interpolate({
      inputRange: [-700, 0, 700],
      outputRange: ['-10deg', '0deg', '10deg']
    })

    const opacity = pan.x.interpolate({
      inputRange: [-320, 0, 320],
      outputRange: [0.9, 1, 0.9]
    })
    const scale = enter

    const animatedCardStyles = {
      transform: [{ translateX }, { translateY }, { rotate }],
      opacity
    }
    const animatedCardStyles2 = { transform: [{ scale }] }

    return [animatedCardStyles, animatedCardStyles2]
  }

  render() {
    if (this.state.disabled) {
      // disable swiping and renderEmpty
      return (
        <View style={{ position: 'relative', flexDirection: 'column' }}>
          {<View>{this.props.renderEmpty && this.props.renderEmpty()}</View>}
        </View>
      )
    } else if (this.state.lastCard) {
      // display renderEmpty underneath last viable card
      return (
        <View style={{ position: 'relative', flexDirection: 'column' }}>
          {this.state.selectedItem === undefined ? (
            <View />
          ) : (
            <View>
              <View
                style={
                  [
                    this.getCardStyles()[1],
                    this.getInitialStyle().topCard,
                    { opacity: this.state.fadeAnim }
                  ] as any
                }>
                {this.props.renderEmpty && this.props.renderEmpty()}
              </View>
              <View style={[this.getCardStyles()[0], this.getInitialStyle().topCard] as any}>
                {this.props.renderItem(this.state.selectedItem)}
              </View>
            </View>
          )}
        </View>
      )
    }
    return (
      <View style={{ position: 'relative', flexDirection: 'column' }}>
        {this.state.selectedItem === undefined ? (
          <View />
        ) : (
          <View>
            <View
              style={
                [
                  this.getCardStyles()[1],
                  this.getInitialStyle().topCard,
                  { opacity: this.state.fadeAnim }
                ] as any
              }>
              {this.props.renderBottom
                ? this.props.renderBottom(this.state.selectedItem2)
                : this.props.renderItem(this.state.selectedItem2)}
            </View>
            <View style={[this.getCardStyles()[0], this.getInitialStyle().topCard] as any}>
              {this.props.renderTop
                ? this.props.renderTop(this.state.selectedItem)
                : this.props.renderItem(this.state.selectedItem)}
            </View>
          </View>
        )}
      </View>
    )
  }
}

// DeckSwiper.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ]),
//   dataSource: PropTypes.array
// };

const StyledDeckSwiper = connectStyle('NativeBase.DeckSwiper', {}, mapPropsToStyleNames)(DeckSwiper)

export { StyledDeckSwiper as DeckSwiper }

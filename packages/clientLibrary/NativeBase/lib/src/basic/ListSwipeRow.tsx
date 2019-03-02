import * as React from 'react'

import {
  ViewStyle,
} from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'

import { SwipeRow } from './SwipeRow'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

import { ListSwipeHelper } from '../utils'

export interface ISwipeRow {
  leftOpenValue?: number
  rightOpenValue?: number
  closeOnRowPress?: boolean
  disableLeftSwipe?: boolean
  disableRightSwipe?: boolean
  recalculateHiddenLayout?: boolean
  preview?: boolean
  previewDuration?: number
  directionalDistanceChangeThreshold?: number
  swipeToOpenPercent?: number
  stopLeftSwipe?: number
  stopRightSwipe?: number
  onRowOpen?: Function
  onRowClose?: Function
  left?: React.ReactElement<any>
  // body?: React.ReactElement<any>
  body?: any
  right?: React.ReactElement<any>
  style?: ViewStyle
}

interface IListSwipeRowProps extends ISwipeRow {
  listSwipeHelper: ListSwipeHelper
  closeOnRowBeginSwipe: boolean
  list: boolean
  cellIdentifier: string
  onRowOpen: any
  onRowClose: any
  previewOpenValue: any
  tension: any
  friction: any
  onRowDidOpen: any
  onRowDidClose: any
}

interface IListSwipeRowState { }

class ListSwipeRow extends React.Component<IListSwipeRowProps, IListSwipeRowState> {
  constructor(props) {
    super(props)
  }

  rowSwipeGestureBegan(cellIdentifier) {
    const { listSwipeHelper } = this.props
    if (this.props.closeOnRowBeginSwipe && listSwipeHelper.swipedIdIsOpenCellId(cellIdentifier)) {
      listSwipeHelper.safeCloseOpenRow()
    }
  }

  onRowOpen(cellIdentifier) {
    const { listSwipeHelper } = this.props
    listSwipeHelper.onRowOpen(cellIdentifier)
  }

  onRowPress(cellIdentifier) {
    const { listSwipeHelper } = this.props
    listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress)
  }

  closeRow(cellIdentifier) {
    const { listSwipeHelper } = this.props
    listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress)
  }

  render() {
    const { listSwipeHelper, cellIdentifier, list } = this.props
    return (
      <SwipeRow
        list={list}
        ref={(rowRef) => {
          listSwipeHelper.pushRowIds(cellIdentifier, rowRef)
        }}
        swipeGestureBegan={(_) => this.rowSwipeGestureBegan(cellIdentifier)}
        onRowOpen={(_) => this.onRowOpen(cellIdentifier)}
        onRowDidOpen={this.props.onRowDidOpen}
        onRowClose={this.props.onRowClose}
        onRowDidClose={this.props.onRowDidClose}
        onRowPress={(_) => this.onRowPress(cellIdentifier)}
        closeRow={(_) => this.closeRow(cellIdentifier)}
        setScrollEnabled={(enable) => listSwipeHelper.setScrollEnabled(enable)}
        leftOpenValue={this.props.leftOpenValue}
        rightOpenValue={this.props.rightOpenValue}
        closeOnRowPress={this.props.closeOnRowPress}
        disableLeftSwipe={this.props.disableLeftSwipe}
        disableRightSwipe={this.props.disableRightSwipe}
        stopLeftSwipe={this.props.stopLeftSwipe}
        stopRightSwipe={this.props.stopRightSwipe}
        recalculateHiddenLayout={this.props.recalculateHiddenLayout}
        style={this.props.style}
        preview={this.props.preview}
        previewDuration={this.props.previewDuration}
        previewOpenValue={this.props.previewOpenValue}
        tension={this.props.tension}
        friction={this.props.friction}
        directionalDistanceChangeThreshold={this.props.directionalDistanceChangeThreshold}
        swipeToOpenPercent={this.props.swipeToOpenPercent}
        left={this.props.left}
        right={this.props.right}
        body={this.props.body}
      />
    )
  }
}

const StyledListSwipeRow = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(ListSwipeRow)

export { StyledListSwipeRow as ListSwipeRow }

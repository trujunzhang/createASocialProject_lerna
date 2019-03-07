import * as React from 'react'
import { ListView, View } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { ListSwipeRow } from './ListSwipeRow'
import { ListSwipeHelper } from '../utils/listSwipeHelper'
import { IListBaseProperty } from './listTypes'

interface IListProps extends IListBaseProperty {
  closeOnRowBeginSwipe: boolean
  onRowOpen: (secId, rowId, rowMap) => any
  onScroll: any
  dataSource: any
  listViewRef: (ref) => any
  previewRowIndex: number
  closeOnRowPress: any
  closeOnScroll: boolean

  stopLeftSwipe: any
  stopRightSwipe: any
  recalculateHiddenLayout: any
  swipeRowStyle: any

  previewOpenValue: any
  previewFirstRow: any
  directionalDistanceChangeThreshold: any
  previewDuration: any
  tension: any
  friction: any

  shoulderRenderSwiperRowsAsChildren: boolean

  renderRow: any
}

interface IListState {
  dataSource: any
}

interface IListDefaultProps { }

type ListPropsWithDefaults = IListProps & IListDefaultProps

class List extends React.Component<IListProps, IListState> {
  static defaultProps = {
    leftOpenValue: 0,
    rightOpenValue: 0,
    closeOnRowBeginSwipe: false,
    closeOnScroll: true,
    closeOnRowPress: true,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    recalculateHiddenLayout: false,
    previewFirstRow: false,
    directionalDistanceChangeThreshold: 2,
    swipeToOpenPercent: 50,
    shoulderRenderSwiperRowsAsChildren: false
  }

  private _root: any
  private _listView: any
  private listSwipeHelper = new ListSwipeHelper({
    onScrollEnableChanged: (enable) => {
      if (!!this._listView) {
        this._listView.setNativeProps({ scrollEnabled: enable })
      }
    }
  })

  constructor(props) {
    super(props)
    if (props.dataArray && props.renderRow) {
      let rowHasChanged = props.rowHasChanged || ((r1, r2) => r1 !== r2)
      const ds = new ListView.DataSource({ rowHasChanged: rowHasChanged })
      this.state = {
        dataSource: ds.cloneWithRows(props.dataArray)
      }
    } else {
      this.state = {
        dataSource: null
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
      })
    }
  }
  renderChildren() {
    const childrenArray = React.Children.map(this.props.children, (child) => child)

    return childrenArray
  }

  rowSwipeGestureBegan(cellIdentifier) {
    if (
      this.props.closeOnRowBeginSwipe &&
      this.listSwipeHelper.swipedIdIsOpenCellId(cellIdentifier)
    ) {
      this.listSwipeHelper.safeCloseOpenRow()
    }
  }

  onRowOpen(secId, rowId, rowMap) {
    const cellIdentifier = `${secId}${rowId}`

    this.listSwipeHelper.onRowOpen(cellIdentifier)
    this.props.onRowOpen && this.props.onRowOpen(secId, rowId, rowMap)
  }

  onRowPress(cellIdentifier) {
    this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress)
  }

  closeRow(cellIdentifier) {
    this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress)
  }

  onScroll(e) {
    this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnScroll)
    this.props.onScroll && this.props.onScroll(e)
  }

  setRefs(ref) {
    this._listView = ref
    this.props.listViewRef && this.props.listViewRef(ref)
  }

  renderRow(rowData, secId, rowId, rowMap) {
    const previewRowId =
      this.props.dataSource &&
      this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex || 0)
    const cellIdentifier = `${secId}${rowId}`
    return (
      <ListSwipeRow
        list={true}
        cellIdentifier={cellIdentifier}
        listSwipeHelper={this.listSwipeHelper}
        closeOnRowBeginSwipe={this.props.closeOnRowBeginSwipe}
        onRowOpen={(_) => this.onRowOpen(secId, rowId, this.listSwipeHelper.rows)}
        onRowDidOpen={(_) =>
          this.props.onRowDidOpen &&
          this.props.onRowDidOpen(secId, rowId, this.listSwipeHelper.rows)
        }
        onRowClose={(_) =>
          this.props.onRowClose && this.props.onRowClose(secId, rowId, this.listSwipeHelper.rows)
        }
        onRowDidClose={(_) =>
          this.props.onRowDidClose &&
          this.props.onRowDidClose(secId, rowId, this.listSwipeHelper.rows)
        }
        leftOpenValue={this.props.leftOpenValue}
        rightOpenValue={this.props.rightOpenValue}
        closeOnRowPress={this.props.closeOnRowPress}
        disableLeftSwipe={this.props.disableLeftSwipe}
        disableRightSwipe={this.props.disableRightSwipe}
        stopLeftSwipe={this.props.stopLeftSwipe}
        stopRightSwipe={this.props.stopRightSwipe}
        recalculateHiddenLayout={this.props.recalculateHiddenLayout}
        style={this.props.swipeRowStyle}
        preview={
          (this.props.previewFirstRow || this.props.previewRowIndex) && rowId === previewRowId
        }
        previewDuration={this.props.previewDuration}
        previewOpenValue={this.props.previewOpenValue}
        tension={this.props.tension}
        friction={this.props.friction}
        directionalDistanceChangeThreshold={this.props.directionalDistanceChangeThreshold}
        swipeToOpenPercent={this.props.swipeToOpenPercent}
        left={
          this.props.renderLeftHiddenRow &&
          this.props.renderLeftHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows)
        }
        right={
          this.props.renderRightHiddenRow &&
          this.props.renderRightHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows)
        }
        body={
          this.props.renderRow &&
          this.props.renderRow(rowData, secId, rowId, this.listSwipeHelper.rows)
        }
      />
    )
  }

  // renderRowxxx(rowData, secId, rowId, rowMap) {
  //   const previewRowId =
  //     this.props.dataSource &&
  //     this.props.dataSource.getRowIDForFlatIndex(
  //       this.props.previewRowIndex || 0
  //     );
  //   const cellIdentifier = `${secId}${rowId}`;
  //   return (
  //     <SwipeRow
  //       list={true}
  //       ref={(rowRef) => {
  //         this.listSwipeHelper.pushRowIds(cellIdentifier, rowRef)
  //       }}
  //       swipeGestureBegan={_ => this.rowSwipeGestureBegan(cellIdentifier)}
  //       onRowOpen={_ => this.onRowOpen(secId, rowId, this.listSwipeHelper.rows)}
  //       onRowDidOpen={_ =>
  //         this.props.onRowDidOpen &&
  //         this.props.onRowDidOpen(secId, rowId, this.listSwipeHelper.rows)
  //       }
  //       onRowClose={_ =>
  //         this.props.onRowClose &&
  //         this.props.onRowClose(secId, rowId, this.listSwipeHelper.rows)
  //       }
  //       onRowDidClose={_ =>
  //         this.props.onRowDidClose &&
  //         this.props.onRowDidClose(secId, rowId, this.listSwipeHelper.rows)
  //       }
  //       onRowPress={_ => this.onRowPress(cellIdentifier)}
  //       closeRow={_ => this.closeRow(cellIdentifier)}
  //       setScrollEnabled={enable => this.listSwipeHelper.setScrollEnabled(enable)}
  //       leftOpenValue={this.props.leftOpenValue}
  //       rightOpenValue={this.props.rightOpenValue}
  //       closeOnRowPress={this.props.closeOnRowPress}
  //       disableLeftSwipe={this.props.disableLeftSwipe}
  //       disableRightSwipe={this.props.disableRightSwipe}
  //       stopLeftSwipe={this.props.stopLeftSwipe}
  //       stopRightSwipe={this.props.stopRightSwipe}
  //       recalculateHiddenLayout={this.props.recalculateHiddenLayout}
  //       style={this.props.swipeRowStyle}
  //       preview={
  //         (this.props.previewFirstRow || this.props.previewRowIndex) &&
  //         rowId === previewRowId
  //       }
  //       previewDuration={this.props.previewDuration}
  //       previewOpenValue={this.props.previewOpenValue}
  //       tension={this.props.tension}
  //       friction={this.props.friction}
  //       directionalDistanceChangeThreshold={
  //         this.props.directionalDistanceChangeThreshold
  //       }
  //       swipeToOpenPercent={this.props.swipeToOpenPercent}
  //       left={
  //         this.props.renderLeftHiddenRow &&
  //         this.props.renderLeftHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows)
  //       }
  //       right={
  //         this.props.renderRightHiddenRow &&
  //         this.props.renderRightHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows)
  //       }
  //       body={
  //         this.props.renderRow &&
  //         this.props.renderRow(rowData, secId, rowId, this.listSwipeHelper.rows)
  //       }
  //     />
  //   );
  // }

  checkRenderAsListRows() {
    if (this.props.renderLeftHiddenRow || this.props.renderRightHiddenRow) {
      if (this.props.shoulderRenderSwiperRowsAsChildren === false) {
        return true
      }
    }

    return false
  }

  render() {
    if (this.checkRenderAsListRows()) {
      return (
        <ListView
          name="listView"
          {...this.props}
          ref={(ref) => {
            this.setRefs(ref)
            this._root = ref
          }}
          enableEmptySections
          onScroll={(e) => this.onScroll(e)}
          renderRow={(rowData, secId, rowId) =>
            this.renderRow(rowData, secId, rowId, this.listSwipeHelper.rows)
          }
        />
      )
    } else if (this.state.dataSource) {
      return (
        <ListView
          name="listView"
          {...this.props}
          ref={(ref) => (this._root = ref)}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.props.renderRow}
        />
      )
    }
    return (
      <View name="list" ref={(c) => (this._root = c)} {...this.props}>
        {this.renderChildren()}
      </View>
    )
  }
}
const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(List)

export { StyledList as List }

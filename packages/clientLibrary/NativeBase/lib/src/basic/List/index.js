import * as React from 'react';
import { ListView, View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { SwipeRow } from '@appBasic/SwipeRow';
import { mapPropsToStyleNames } from '@app/tools';
import { ListSwipeHelper } from '@app/tools';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.listSwipeHelper = new ListSwipeHelper({
            onScrollEnableChanged: (enable) => {
                if (!!this._listView) {
                    this._listView.setNativeProps({ scrollEnabled: enable });
                }
            }
        });
        this.openCellId = null;
        if (props.dataArray && props.renderRow) {
            let rowHasChanged = props.rowHasChanged || ((r1, r2) => r1 !== r2);
            const ds = new ListView.DataSource({ rowHasChanged: rowHasChanged });
            this.state = {
                dataSource: ds.cloneWithRows(props.dataArray)
            };
        }
        else {
            this.state = {};
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.dataSource) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
            });
        }
    }
    renderChildren() {
        const childrenArray = React.Children.map(this.props.children, (child) => child);
        return childrenArray;
    }
    setScrollEnabled(enable) {
        this._listView.setNativeProps({ scrollEnabled: enable });
    }
    rowSwipeGestureBegan(id) {
        if (this.props.closeOnRowBeginSwipe && this.listSwipeHelper.swipedIdIsOpenCellId(id)) {
            this.listSwipeHelper.safeCloseOpenRow();
        }
    }
    onRowOpen(secId, rowId, rowMap) {
        const cellIdentifier = `${secId}${rowId}`;
        this.listSwipeHelper.onRowOpen(cellIdentifier);
        this.props.onRowOpen && this.props.onRowOpen(secId, rowId, rowMap);
    }
    onRowPress(id) {
        this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress);
    }
    closeRow(id) {
        this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnRowPress);
    }
    openLeftRow(id) {
        // this._rows[id]._root.openLeftRow()
    }
    openRightRow(id) {
        // this._rows[id]._root.openRightRow()
    }
    onScroll(e) {
        // if (this.openCellId) {
        //   if (this.props.closeOnScroll) {
        //     this.safeCloseOpenRow()
        //     this.openCellId = null
        //   }
        // }
        this.listSwipeHelper.onRowCloseOrPressOrScroll(this.props.closeOnScroll);
        this.props.onScroll && this.props.onScroll(e);
    }
    setRefs(ref) {
        this._listView = ref;
        this.props.listViewRef && this.props.listViewRef(ref);
    }
    renderRow(rowData, secId, rowId, rowMap) {
        const previewRowId = this.props.dataSource &&
            this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex || 0);
        const cellIdentifier = `${secId}${rowId}`;
        return (React.createElement(SwipeRow, { list: true, cellIdentifier: cellIdentifier, listSwipeHelper: this.listSwipeHelper, closeOnRowBeginSwipe: this.props.closeOnRowBeginSwipe, onRowOpen: (_) => this.onRowOpen(secId, rowId, this.listSwipeHelper.rows), onRowDidOpen: (_) => this.props.onRowDidOpen &&
                this.props.onRowDidOpen(secId, rowId, this.listSwipeHelper.rows), onRowClose: (_) => this.props.onRowClose && this.props.onRowClose(secId, rowId, this.listSwipeHelper.rows), onRowDidClose: (_) => this.props.onRowDidClose &&
                this.props.onRowDidClose(secId, rowId, this.listSwipeHelper.rows), onRowPress: (_) => this.onRowPress(`${secId}${rowId}`), openLeftRow: (_) => this.openLeftRow(`${secId}${rowId}`), openRightRow: (_) => this.openRightRow(`${secId}${rowId}`), closeRow: (_) => this.closeRow(`${secId}${rowId}`), setScrollEnabled: (enable) => this.setScrollEnabled(enable), leftOpenValue: this.props.leftOpenValue, rightOpenValue: this.props.rightOpenValue, closeOnRowPress: this.props.closeOnRowPress, disableLeftSwipe: this.props.disableLeftSwipe, disableRightSwipe: this.props.disableRightSwipe, stopLeftSwipe: this.props.stopLeftSwipe, stopRightSwipe: this.props.stopRightSwipe, recalculateHiddenLayout: this.props.recalculateHiddenLayout, style: this.props.swipeRowStyle, preview: (this.props.previewFirstRow || this.props.previewRowIndex) &&
                rowId === previewRowId, previewDuration: this.props.previewDuration, previewOpenValue: this.props.previewOpenValue, tension: this.props.tension, friction: this.props.friction, directionalDistanceChangeThreshold: this.props.directionalDistanceChangeThreshold, swipeToOpenPercent: this.props.swipeToOpenPercent, left: this.props.renderLeftHiddenRow &&
                this.props.renderLeftHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows), right: this.props.renderRightHiddenRow &&
                this.props.renderRightHiddenRow(rowData, secId, rowId, this.listSwipeHelper.rows), body: this.props.renderRow &&
                this.props.renderRow(rowData, secId, rowId, this.listSwipeHelper.rows) }));
    }
    // renderRow(rowData, secId, rowId, rowMap) {
    //   const previewRowId =
    //     this.props.dataSource &&
    //     this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex || 0)
    //   return (
    //     <SwipeRow
    //       list={true}
    //       ref={(row) => (this._rows[`${secId}${rowId}`] = row)}
    //       swipeGestureBegan={(_) => this.rowSwipeGestureBegan(`${secId}${rowId}`)}
    //       onRowOpen={(_) => this.onRowOpen(secId, rowId, this._rows)}
    //       onRowDidOpen={(_) =>
    //         this.props.onRowDidOpen && this.props.onRowDidOpen(secId, rowId, this._rows)
    //       }
    //       onRowClose={(_) => this.props.onRowClose && this.props.onRowClose(secId, rowId, this._rows)}
    //       onRowDidClose={(_) =>
    //         this.props.onRowDidClose && this.props.onRowDidClose(secId, rowId, this._rows)
    //       }
    //       onRowPress={(_) => this.onRowPress(`${secId}${rowId}`)}
    //       openLeftRow={(_) => this.openLeftRow(`${secId}${rowId}`)}
    //       openRightRow={(_) => this.openRightRow(`${secId}${rowId}`)}
    //       closeRow={(_) => this.closeRow(`${secId}${rowId}`)}
    //       setScrollEnabled={(enable) => this.setScrollEnabled(enable)}
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
    //         (this.props.previewFirstRow || this.props.previewRowIndex) && rowId === previewRowId
    //       }
    //       previewDuration={this.props.previewDuration}
    //       previewOpenValue={this.props.previewOpenValue}
    //       tension={this.props.tension}
    //       friction={this.props.friction}
    //       directionalDistanceChangeThreshold={this.props.directionalDistanceChangeThreshold}
    //       swipeToOpenPercent={this.props.swipeToOpenPercent}
    //       left={
    //         this.props.renderLeftHiddenRow &&
    //         this.props.renderLeftHiddenRow(rowData, secId, rowId, this._rows)
    //       }
    //       right={
    //         this.props.renderRightHiddenRow &&
    //         this.props.renderRightHiddenRow(rowData, secId, rowId, this._rows)
    //       }
    //       body={this.props.renderRow && this.props.renderRow(rowData, secId, rowId, this._rows)}
    //     />
    //   )
    // }
    checkRenderAsListRows() {
        if (this.props.renderLeftHiddenRow || this.props.renderRightHiddenRow) {
            if (this.props.shoulderRenderSwiperRowsAsChildren === false) {
                return true;
            }
        }
        return false;
    }
    render() {
        const RNListView = ListView;
        if (this.checkRenderAsListRows()) {
            return (React.createElement(RNListView, Object.assign({}, this.props, { ref: (ref) => {
                    this.setRefs(ref);
                    this._root = ref;
                }, enableEmptySections: true, onScroll: (e) => this.onScroll(e), renderRow: (rowData, secId, rowId) => this.renderRow(rowData, secId, rowId, this.listSwipeHelper.rows) })));
        }
        else if (this.state.dataSource) {
            return (React.createElement(RNListView, Object.assign({}, this.props, { ref: (ref) => (this._root = ref), enableEmptySections: true, dataSource: this.state.dataSource, renderRow: this.props.renderRow })));
        }
        return (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.renderChildren()));
    }
}
List.defaultProps = {
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
    swipeToOpenPercent: 50
};
const StyledList = connectStyle('NativeBase.List', {}, mapPropsToStyleNames)(List);
export { StyledList as List };
//# sourceMappingURL=index.js.map
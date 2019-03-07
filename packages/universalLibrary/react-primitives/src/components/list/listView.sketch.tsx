import {
  ListViewProps,
  // ListView
  SwipeableListViewDataSource,
  DataSourceAssetCallback
} from '../../models/iListProps'

import * as React from 'react'

interface ISketchListViewState {}

class ListViewDataSource {
  private onAsset: DataSourceAssetCallback
  constructor(onAsset: DataSourceAssetCallback) {
    this.onAsset = onAsset
  }

  rowHasChanged?(r1: any, r2: any): boolean {
    return true
  }

  cloneWithRows(dataBlob: any, rowIdentities?: Array<string | number>): ListViewDataSource {
    return this
  }
}

export class ListView extends React.Component<ListViewProps, ISketchListViewState> {
  static DataSource: ListViewDataSource

  private enableEmptySections: boolean = true
  private scrollEnabled: boolean = true
  /**
   * Use `SwipeableListView.getNewDataSource()` to get a data source to use,
   * then use it just like you would a normal ListView data source
   */
  private dataSource: SwipeableListViewDataSource | null = null

  setNativeProps(scrollEnabled: boolean) {
    this.scrollEnabled = scrollEnabled
  }

  onScroll?: (event: any) => {}

  renderRow(
    rowData: any,
    sectionID: string | number,
    rowID: string | number,
    highlightRow?: boolean
  ) {}

  render() {
    return null
  }
}

import {
  ListViewProps,
  // ListView
  ListViewDataSource,
  SwipeableListViewDataSource,
  DataSourceAssetCallback
} from '../../models/iListProps'
import {
  IListViewProps
} from '../../models/iList'

import {
  View,
  Text
} from 'react-sketchapp'

import {
  SketchListViewDataSource
} from './listViewDataSource.sketch'

import * as React from 'react'

interface ISketchListViewState { }


export class ListView extends React.Component<IListViewProps, ISketchListViewState> {
  public static DataSource: ListViewDataSource | any = SketchListViewDataSource

  private enableEmptySections: boolean = true
  private scrollEnabled: boolean = true

  private rowViews: any[] = []

  setNativeProps(scrollEnabled: boolean) {
    this.scrollEnabled = scrollEnabled
  }

  onScroll?: (event: any) => {}

  // renderRow(
  //   rowData: any,
  //   sectionID: string | number,
  //   rowID: string | number,
  //   highlightRow?: boolean
  // ) { }

  generatorRowViews() {
    const {
      renderRow
    } = this.props
    const ds = this.props.dataSource as ListViewDataSource
    const rowCount = ds.getRowCount()


    for (var i = 0; i < rowCount; i++) {
      const sectionIndex: number = 0
      const rowIndex: number = i
      const rowData: any = ds.getRowData(sectionIndex, rowIndex)

      console.log('listView, rowData: ', JSON.stringify(rowData))

      const rowView = renderRow(rowData, '', '')
      this.rowViews.push(rowView)
    }
  }

  render() {
    const {
      name
    } = this.props
    this.generatorRowViews()

    return (
      <View name={name}>
        {this.rowViews}

      </View>
    )
  }
}


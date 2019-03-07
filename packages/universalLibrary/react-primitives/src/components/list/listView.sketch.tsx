import {
  ListViewProps,
  // ListView
  ListViewDataSource,
  SwipeableListViewDataSource,
  DataSourceAssetCallback
} from '../../models/iListProps'

import {
  Text
} from 'react-sketchapp'

import {
  SketchListViewDataSource
} from './listViewDataSource.sketch'

import * as React from 'react'

interface ISketchListViewState { }


export class ListView extends React.Component<ListViewProps, ISketchListViewState> {
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
    for (var i; i < rowCount; i++) {
      const sectionIndex: number = 0
      const rowIndex: number = i
      const rowData: any = ds.getRowData(sectionIndex, rowIndex)
      const rowView = renderRow(rowData, '', '')
      this.rowViews.push(rowView)
    }
  }

  render() {
    this.generatorRowViews()

    return (
      <React.Fragment>
        <Text>{'sketch ListView'}</Text>
        {this.rowViews}

      </React.Fragment>
    )
  }
}


import * as React from 'react' // So important
import { SketchListViewDataSource } from '../listViewDataSource.sketch'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const dataArray: any[] = [
    {
      route: 'Default',
      text: 'Default Button'
    },
    {
      route: 'Outline',
      text: 'Outline Button'
    }
  ]
  const rowHasChanged = (r1: any, r2: any) => r1 !== r2
  const ds = new SketchListViewDataSource({ rowHasChanged: rowHasChanged })
  const dataSource = ds.cloneWithRows(dataArray)

  expect(dataSource).toBeDefined()
})

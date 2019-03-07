import * as React from 'react' // So important
import { ListView } from '../listView.sketch'

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
  const ds = new ListView.DataSource({ rowHasChanged: rowHasChanged })
  const dataSource = ds.cloneWithRows(dataArray)

  expect(dataSource).toBeDefined()
})

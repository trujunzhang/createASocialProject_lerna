import * as React from 'react'
import { StyleSheet, Text, View } from 'react-primitives'

export const ColorListView = () => {
  const views: any = Object.keys([]).map((color) => <View />)

  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: (96 + 8) * 4
        }}>
        {views}
      </View>
    </React.Fragment>
  )
}

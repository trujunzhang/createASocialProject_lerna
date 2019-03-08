import * as React from 'react'
import { Dimensions } from 'react-primitives'
import { render, Artboard, View, Text } from 'react-sketchapp'

import { Setup } from './layouts/boot/setup'

import { Root } from '@app/native-base'

import { CurrentPage } from './pages'

// console.log('Dimensions(screen): ', JSON.stringify(Dimensions.get('window')))

const App = () => {
  // return null
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red'
      }}>
      <Setup>
        <Root>
          <CurrentPage />
        </Root>
      </Setup>
    </View>
  )
}

const Document = () => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
      backgroundColor: 'blue'
    }}>
    <App />
  </Artboard>
)

export default (context: any) => {
  render(<Document />, context.document.currentPage())
}

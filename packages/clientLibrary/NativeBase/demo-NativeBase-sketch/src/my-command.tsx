import * as React from 'react';
import {
  Dimensions
} from 'react-primitives'
import { render, Artboard, View, Text } from 'react-sketchapp';

import {
  ColorListView
} from './artboard'

import { Setup } from './layouts/boot/setup'

import { Root } from '@app/native-base'

const CurrentPage = ColorListView

console.log('Dimensions(screen): ', JSON.stringify(Dimensions.get('window')))

const App = () => {
  // return null
  return (
    <View
      style={
        {
          flex: 1,
          height: 96,
          width: 96,
          backgroundColor: 'red'
        }
      }>
      <Setup>
        <Text
          name="Swatch Name"
          style={{ color: '#ccc', fontWeight: 'bold' }}
        >
          {'wh(screen): ' + JSON.stringify(Dimensions.get('window'))}
        </Text>
        <Text name="Swatch Hex" style={{ color: '#ccc' }}>
          {'djzhang'}
        </Text>
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
    }}
  >
    <App />
  </Artboard>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};

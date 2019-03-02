import * as React from 'react';
import { render, Artboard, View, Text } from 'react-sketchapp';

import {
  ColorListView
} from './artboard'

import { Setup } from './layouts/boot/setup'

import { Root } from '@app/native-base'

const CurrentPage = ColorListView

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
      <Text
        name="Swatch Name"
        style={{ color: '#ccc', fontWeight: 'bold' }}
      >
        {name}
      </Text>
      <Text name="Swatch Hex" style={{ color: '#ccc' }}>
        {'djzhang'}
      </Text>
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

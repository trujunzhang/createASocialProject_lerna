import * as React from 'react';
import { render, Artboard, View } from 'react-sketchapp';

import {
  ColorListView
} from './artboard'

import { Setup } from './layouts/boot/setup'

import { Root } from '@app/native-base'

const CurrentPage = ColorListView

const App = () => {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: 200,
          backgroundColor: 'red'
        }
      ] as any}>
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
    }}
  >
    <App />
  </Artboard>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};

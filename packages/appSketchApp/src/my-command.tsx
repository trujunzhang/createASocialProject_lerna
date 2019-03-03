import * as React from 'react';
import {
  Dimensions
} from 'react-primitives'
const { height, width } = Dimensions.get('window')

import { render, Artboard } from 'react-sketchapp';

import {
  ColorListView
} from './artboard'

const CurrentPage = ColorListView

const Document = () => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'red',
      width: (96 + 8) * 4,
      height
    }}
  >
    <CurrentPage />
  </Artboard>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};

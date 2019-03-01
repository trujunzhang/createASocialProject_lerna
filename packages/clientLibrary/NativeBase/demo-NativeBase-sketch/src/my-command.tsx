import * as React from 'react';
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
      width: (96 + 8) * 4,
    }}
  >
    <CurrentPage />
  </Artboard>
);

export default (context: any) => {
  render(<Document />, context.document.currentPage());
};

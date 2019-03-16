import * as React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

import * as SvgPage from './icons'

// const CurrentPage: any = SvgPage.SvgExample
const CurrentPage: any = SvgPage.IosArrowBack


const Document = () => (
  <Artboard
    name="SVG Icons"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 600,
      height: 800
    }}
  >
    <CurrentPage />
  </Artboard>
);


export default (context: any) => {
  render(<Document />, context.document.currentPage())
}
import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import {
  Swatch,
  colorList
} from './shared-components'

interface SwatchProps {
  name: string,
  hex: string,
}

interface DocumentProps {
  colors: { [key: string]: string }
}
const Document = ({ colors }: DocumentProps) => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }}
  >
    {Object.keys(colors).map(color => (
      <Swatch name={color} hex={colors[color]} key={color} />
    ))}
  </Artboard>
);


export default () => {
  render(<Document colors={colorList} />, context.document.currentPage());
};

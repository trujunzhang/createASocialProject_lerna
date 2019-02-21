import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import {
  Swatch
} from '@app/shared-components'

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
  const colorList = {
    Haus: '#F3F4F4',
    Night: '#333',
    Sur: '#96DBE4',
    'Sur Dark': '#24828F',
    Peach: '#EFADA0',
    'Peach Dark': '#E37059',
    Pear: '#93DAAB',
    'Pear Dark': '#2E854B',
    'TypeScript Blue': '#007ACC',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};

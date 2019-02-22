import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import {
  Swatch,
  colorList,
  textColorList
} from './shared-components'

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
      <Swatch name={color} hex={colors[color]}
        textColor={textColorList[color]}
        key={color} />
    ))}
  </Artboard>
);

export default (context: any) => {
  render(<Document colors={colorList} />, context.document.currentPage());
};

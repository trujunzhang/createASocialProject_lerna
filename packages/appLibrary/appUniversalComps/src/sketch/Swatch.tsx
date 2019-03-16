import * as React from 'react'

import { View, Text } from 'react-primitives'

interface ISwatchProps {
  name: string
  hex: string
  textColor: string
}

export const Swatch = ({ name, hex, textColor }: ISwatchProps) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8
    }}>
    <Text name="Swatch Name" style={{ color: textColor, fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text
      // name="Swatch Hex"
      style={{ color: textColor }}>
      {hex}
    </Text>
  </View>
)

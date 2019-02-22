import * as React from 'react'

import { View, Text } from 'react-primitives'

interface SwatchProps {
  name: string
  hex: string
}

// name={`Swatch ${name}`}
export const Swatch = ({ name, hex }: SwatchProps) => (
  <View
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8
    }}>
    <Text style={{ color: hex, fontWeight: 'bold' }}>{name}</Text>
    <Text style={{ color: hex }}>{hex}</Text>
  </View>
)

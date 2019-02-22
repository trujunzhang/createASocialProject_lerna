import * as React from 'react'

import { View, Text } from 'react-native'

interface SwatchProps {
  name: string
  hex: string
  textColor: string
}

// name={`Swatch ${name}`}
export const Swatch = ({ name, hex, textColor }: SwatchProps) => (
  <View
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8
    }}>
    <Text style={{ color: textColor, fontWeight: 'bold' }}>{name}</Text>
    <Text style={{ color: textColor }}>{hex}</Text>
  </View>
)

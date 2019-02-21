
import * as React from 'react';

// import {   Text, View } from 'react-sketchapp';
import { View, Text } from 'react-primitives';

import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const textColor = (hex: string) => {
    const vsWhite = chroma.contrast(hex, 'white');
    if (vsWhite > 4) {
        return '#FFF';
    }
    return chroma(hex)
        .darken(3)
        .hex();
};

interface SwatchProps {
    name: string,
    hex: string,
}

export const Swatch = ({ name, hex }: SwatchProps) => (
    <View
        style={{
            height: 96,
            width: 96,
            margin: 4,
            backgroundColor: hex,
            padding: 8,
        }}
    >
        <Text
            style={{ color: textColor(hex), fontWeight: 'bold' }}
        >
            {name}
        </Text>
        <Text style={{ color: textColor(hex) }}>
            {hex}
        </Text>
    </View>
);

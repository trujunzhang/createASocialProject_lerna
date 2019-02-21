
import * as React from 'react';

// import {   Text, View } from 'react-sketchapp';
import { View, Text } from 'react-primitives';
// import { View, Text } from 'react-native';
// import { View, Text } from 'react-native-web';

// take a hex and give us a nice text color to put over it
const textColor = (hex: string) => {
    return '#FFF';
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

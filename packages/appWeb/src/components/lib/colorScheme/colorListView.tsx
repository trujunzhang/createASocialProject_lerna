
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    Swatch,
    colorList,
    textColorList
} from '../../../shared-components'

export const ColorListView = () => {
    const views: any = Object.keys(colorList).map(color => (
        <Swatch name={color} hex={colorList[color]}
            textColor={textColorList[color]}
            key={color} />
    ))

    return (
        <React.Fragment>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: (96 + 8) * 4,
                }}
            >
                {views}
            </View>
        </React.Fragment>
    )
}
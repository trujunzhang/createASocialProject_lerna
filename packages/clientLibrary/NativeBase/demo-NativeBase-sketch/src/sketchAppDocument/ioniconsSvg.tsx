import * as React from 'react'
import { View, Text } from 'react-primitives'
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    // FontAwesome5,
    Foundation,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from '@app/react-sketch-vector-icons'

export class IoniconsSvg extends React.Component<any, any> {
    renderContent() {
        return <Text>Hello World!</Text>
    }

    render() {
        return (
            <View
                name="Sketch Layer name"
                style={{
                    flexDirection: 'row',
                    width: 480,
                    height: 50,
                    backgroundColor: 'red'
                }}>

                <Ionicons name="ios-arrow-back" size={22} color={'blue'} />

            </View>
        )
    }
}

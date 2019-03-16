import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import { UpperCaseStringUtils } from '@app/tools'
import { IonIcon } from '../generate/ionicons'
import { IonIconFixSize } from './utils'

const ICONNAME = 'ionicons'
export class Ionicons extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props as any

    // console.log('Ionicons(lastSize): ', lastSize)

    // console.log('Ionicons(icon): ', JSON.stringify(Icon))
    // console.log('Ionicons(IoniconsIcon): ', JSON.stringify(IoniconsIcon))

    const {
      width,
      height
    } = IonIconFixSize(lastSize as any, name)

    return (
      <View
        style={{
          width: lastSize,
          height: lastSize,
        }
        }>
        <View style={{
          flex: 1,
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <IonIcon name={name as any}
            width={width}
            height={height}
            color={color} />
        </View>
      </View>
    )
  }
}

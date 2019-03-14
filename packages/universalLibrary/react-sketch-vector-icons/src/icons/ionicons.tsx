import * as React from 'react'
import { View, Text } from 'react-sketchapp'
import { IconProps } from 'react-native-vector-icons/Icon'
import { UpperCaseStringUtils } from '@app/tools'
import { IonIcon } from '../generate/ionicons'

const ICONNAME = 'ionicons'
export class Ionicons extends React.Component<IconProps, any> {
  render() {
    const { name, size: lastSize, color, style } = this.props

    // console.log('Ionicons(lastSize): ', lastSize)

    // console.log('Ionicons(icon): ', JSON.stringify(Icon))
    // console.log('Ionicons(IoniconsIcon): ', JSON.stringify(IoniconsIcon))

    return (
      <View name={ICONNAME + '-' + name}>
        <IonIcon name={name as any} size={lastSize} color={color} />
      </View>
    )
  }
}

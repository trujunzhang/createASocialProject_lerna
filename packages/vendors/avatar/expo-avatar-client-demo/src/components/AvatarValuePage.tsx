import * as React from 'react'

import { View, Text } from 'react-native'

import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarValuePageProps {}

interface IAvatarValuePageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarValuePage extends React.Component<IAvatarValuePageProps, IAvatarValuePageState> {
  constructor(props: IAvatarValuePageProps) {
    super(props)

    this.state = {
      name: 'Wim Mostmans',
      skypeId: null,
      toggle: true
    }
  }

  public render() {
    return (
      <View style={[baseStyles.verticalTop, {}]}>
        <View style={[baseStyles.verticalCenter]}>
          <Text style={[baseStyles.textCenter]}>Value</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar value="86%" size={40} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar value="86%" size={100} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar value="86%" size={150} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar value="86%" size={200} />
          </View>
        </View>
      </View>
    )
  }
}

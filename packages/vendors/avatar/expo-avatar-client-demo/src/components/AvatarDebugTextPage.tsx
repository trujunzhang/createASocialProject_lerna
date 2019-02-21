import * as React from 'react'

import { View, Text } from 'react-native'
import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarDebugTextPageProps {}

interface IAvatarDebugTextPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarDebugTextPage extends React.Component<
  IAvatarDebugTextPageProps,
  IAvatarDebugTextPageState
> {
  constructor(props: IAvatarDebugTextPageProps) {
    super(props)

    this.state = {
      name: 'Wim Mostmans',
      skypeId: null,
      toggle: true
    }
  }

  public render() {
    // <AppAvatar email="bla" name="Jim Jones" size={80} />
    return (
      <View style={[baseStyles.verticalTop, {}]}>
        <View style={[baseStyles.verticalCenter]}>
          <Text style={[baseStyles.textCenter]}>Invalid gravatar</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar googleId="116933859726289749306" size={40} />
          </View>
        </View>
      </View>
    )
  }
}

import * as React from 'react'

import { View, Text } from 'react-primitives'

import { AppAvatar } from './shared'

import { baseStyles } from 'react-primitives'

// tslint:disable-next-line:no-empty-interface
interface IAvatarGooglePageProps {}

interface IAvatarGooglePageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarGooglePage extends React.Component<
  IAvatarGooglePageProps,
  IAvatarGooglePageState
> {
  constructor(props: IAvatarGooglePageProps) {
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
          <Text style={[baseStyles.textCenter]}>Google+</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar googleId="116933859726289749306" size={40} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar googleId="116933859726289749306" size={100} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar googleId="116933859726289749306" size={150} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar googleId="116933859726289749306" size={200} />
          </View>
        </View>
      </View>
    )
  }
}

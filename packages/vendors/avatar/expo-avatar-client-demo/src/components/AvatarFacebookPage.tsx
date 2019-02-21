import * as React from 'react'

import { View, Text } from 'react-native'

import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarFacebookPageProps {}

interface IAvatarFacebookPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarFacebookPage extends React.Component<
  IAvatarFacebookPageProps,
  IAvatarFacebookPageState
> {
  constructor(props: IAvatarFacebookPageProps) {
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
          <Text style={[baseStyles.textCenter]}>Facebook</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar facebookId="100008343750912" size={40} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar facebookId="100008343750912" size={100} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar facebookId="100008343750912" size={150} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar facebookId="100008343750912" size={200} />
          </View>
        </View>
      </View>
    )
  }
}

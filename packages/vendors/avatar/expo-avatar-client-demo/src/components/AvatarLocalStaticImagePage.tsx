import * as React from 'react'

import { View, Text } from 'react-native'
import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarLocalStaticImagePageProps {}

interface IAvatarLocalStaticImagePageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarLocalStaticImagePage extends React.Component<
  IAvatarLocalStaticImagePageProps,
  IAvatarLocalStaticImagePageState
> {
  constructor(props: IAvatarLocalStaticImagePageProps) {
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
            <AppAvatar clientStaticImageSource={require('./images/crawler_200.jpg')} size={40} />
          </View>
        </View>
      </View>
    )
  }
}

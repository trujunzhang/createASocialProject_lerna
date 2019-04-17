import * as React from 'react'

import { View, Text } from 'react-primitives'
import { AppAvatar } from '../shared'

import { clientStaticImageSource } from './clientStaticImageSource'

import { baseStyles } from 'react-primitives'

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
            <AppAvatar clientStaticImageSource={clientStaticImageSource} size={40} />
          </View>
        </View>
      </View>
    )
  }
}

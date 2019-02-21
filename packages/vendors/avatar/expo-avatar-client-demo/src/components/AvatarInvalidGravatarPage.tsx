import * as React from 'react'

import { View, Text } from 'react-native'
import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarInvalidGravatarPageProps {}

interface IAvatarInvalidGravatarPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarInvalidGravatarPage extends React.Component<
  IAvatarInvalidGravatarPageProps,
  IAvatarInvalidGravatarPageState
> {
  constructor(props: IAvatarInvalidGravatarPageProps) {
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
          <Text style={[baseStyles.textCenter]}>Invalid gravatar</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar email="bla" name="Jim Jones" size={80} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar email="foo" name="Jamie Jones" size={80} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar name="Jessica Jones" size={80} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar name="Jeronimo Jones" size={80} />
          </View>
        </View>
      </View>
    )
  }
}

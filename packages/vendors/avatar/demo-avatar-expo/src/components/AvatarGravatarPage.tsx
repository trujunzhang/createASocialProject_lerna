import * as React from 'react'

import { View, Text } from 'react-primitives'

import { baseStyles } from 'react-primitives'

import { AppAvatar } from './shared'

// tslint:disable-next-line:no-empty-interface
interface IAvatarGravatarPageProps {}

interface IAvatarGravatarPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarGravatarPage extends React.Component<
  IAvatarGravatarPageProps,
  IAvatarGravatarPageState
> {
  constructor(props: IAvatarGravatarPageProps) {
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
        <Text style={[baseStyles.textCenter]}>Gravatar</Text>
        <View style={[baseStyles.verticalCenter]}>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar
              className="myCustomClass"
              md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be"
              size={40}
              style={[baseStyles.horizontalMiddle]}
            />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={100} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={200} />
          </View>
        </View>
      </View>
    )
  }
}

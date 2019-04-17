import * as React from 'react'

import { View, Text } from 'react-primitives'

import { AppAvatar } from './shared'

import { baseStyles } from 'react-primitives'

// tslint:disable-next-line:no-empty-interface
interface IAvatarTwitterPageProps {}

interface IAvatarTwitterPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarTwitterPage extends React.Component<
  IAvatarTwitterPageProps,
  IAvatarTwitterPageState
> {
  constructor(props: IAvatarTwitterPageProps) {
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
          <Text style={[baseStyles.textCenter]}>Twitter using Avatar Redirect</Text>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar twitterHandle="sitebase" size={40} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar twitterHandle="sitebase" size={100} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar twitterHandle="sitebase" size={150} round={true} />
          </View>
          <View style={[baseStyles.horizontalMiddle]}>
            <AppAvatar twitterHandle="sitebase" size={200} />
          </View>
        </View>
      </View>
    )
  }
}

import * as React from 'react'

import { View, Text } from 'react-native'

import { AppAvatar } from './shared'

import { baseStyles } from './base'

// tslint:disable-next-line:no-empty-interface
interface IAvatarFallbackToStaticSrcPageProps {}

interface IAvatarFallbackToStaticSrcPageState {
  name: string
  skypeId: string | null
  toggle: boolean
}

export class AvatarFallbackToStaticSrcPage extends React.Component<
  IAvatarFallbackToStaticSrcPageProps,
  IAvatarFallbackToStaticSrcPageState
> {
  constructor(props: IAvatarFallbackToStaticSrcPageProps) {
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
          <Text style={[baseStyles.textCenter]}>Fallback to static src</Text>
          <View
            style={[
              baseStyles.horizontalMiddle,
              {
                flex: 1,
                height: 40,
                backgroundColor: 'red'
              }
            ]}>
            <AppAvatar
              containerStyle={{
                backgroundColor: 'blue'
              }}
              size={150}
              facebookId="invalidfacebookusername"
              src="https://thumbs.dreamstime.com/m/cute-monster-avatar-smiling-face-yellow-color-52010608.jpg"
              name="Foo Bar"
            />
          </View>
        </View>
      </View>
    )
  }
}

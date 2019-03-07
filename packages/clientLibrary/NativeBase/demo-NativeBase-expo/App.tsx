import * as React from 'react'
import { View } from 'react-native'
import { AppLoading, Asset, Permissions } from 'expo'
import * as Font from 'expo-font'

import { Setup } from './src/layouts/boot/setup'
import { appConfig } from './src/utils/appSetup'
import { Root } from '@app/native-base'

import { AppContainer } from './src/root/rootNavigator'

import { fontProxima } from '@app/native-base-variables'

const CurrentPage = AppContainer

appConfig()

interface IAppState {
  isReady: boolean
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isReady: false
    }
  }

  get fontObject() {
    const fontSource = {
      FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf'),
      MaterialIcons: require('@expo/vector-icons/fonts/MaterialIcons.ttf')
    }
    fontSource[fontProxima] = require('./static/fonts/proxima/proxima-nova-600.ttf')
    return fontSource
  }

  loadResourcesAsync = async (): Promise<any> => {
    return Promise.all([Font.loadAsync(this.fontObject)])
  }

  renderxxx() {
    return (
      <Setup>
        <Root>
          <View
            style={[
              {
                flex: 1,
                backgroundColor: 'red'
              }
            ]}
          />
        </Root>
      </Setup>
    )
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <View
        style={[
          {
            flex: 1
            // paddingTop: 200,
            // backgroundColor: 'red'
          }
        ]}>
        <Setup>
          <Root>
            <CurrentPage />
          </Root>
        </Setup>
      </View>
    )
  }
}

import * as React from 'react'
import { View } from 'react-native'
import { AppLoading, Asset, Permissions } from 'expo'
import * as Font from 'expo-font'

import { Setup } from './src/layouts/boot/setup'
import { appConfig } from './src/utils/appSetup'
import { Root } from '@app/native-base'

import { AppContainer } from './src/root/rootNavigator'

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

  loadResourcesAsync = async (): Promise<any> => {
    return Promise.all([
      Font.loadAsync({
        proxima: require('./static/fonts/proxima/proxima-nova-600.ttf'),
        FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf'),
        MaterialIcons: require('@expo/vector-icons/fonts/MaterialIcons.ttf')
      })
    ])
  }

  renderxxx() {
    return (
      <Setup>
        <Root>
          <View style={[{
            flex: 1,
            backgroundColor: 'red'
          }]}>

          </View>
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
      <View style={[{
        flex: 1,
        paddingTop: 200,
        backgroundColor: 'red'
      }]}>
        <Setup>
          <Root>
            <CurrentPage />
          </Root>
        </Setup>
      </View>
    )
  }
}

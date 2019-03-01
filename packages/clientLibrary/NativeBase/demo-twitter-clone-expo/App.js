import * as Expo from 'expo'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Provider } from 'react-redux'

import { StackNavigator } from 'react-navigation'
import { Root } from 'native-base'

import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
import material from './native-base-theme/variables/material'

import LoginScreen from './src/screens/login'
import HomeScreen from './src/screens/home'
import ProfileScreen from './src/screens/profile'
import TweetDetailsScreen from './src/screens/tweetDetails'

import store from './src/store'

import 'regenerator-runtime/runtime'
console.disableYellowBox = true

const AppNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    TweetDetails: { screen: TweetDetailsScreen }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentWillMount() {
    this.loadFonts()
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('./fonts/Roboto-Regular.ttf'),
      Roboto_medium: require('./fonts/Roboto-Medium.ttf')
    })
    this.setState({ isLoading: false })
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />
    } else
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      )
  }
}

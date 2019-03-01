import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Setup } from './layouts'
import { Button, Toast, Root } from '@app/native-base'

import { NHBadge, ToastButton } from './screens'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
})

interface IMainScreenProps {
  screenTag: string
}

export default class MainScreen extends React.Component<any, any> {
  renderNHBadge() {
    return <NHBadge />
  }

  renderNormal() {
    // <Icon name="menu" />
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Main Screen in the React Native!</Text>
        <Text style={styles.instructions}>To get started, edit MainScreen.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={[styles.horizontalMiddle]}>
          <Button
            primary
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
                buttonTextStyle: { color: '#008000' },
                buttonStyle: { backgroundColor: '#5cb85c' }
              })
            }>
            <Text>{'Native Base!'}</Text>
          </Button>
        </View>
      </View>
    )
  }

  render() {
    const screenTag = this.props.screenTag || 'normal'
    const currentScreen = screenTag === 'normal' ? this.renderNormal() : this.renderNHBadge()
    /* const currentScreen = <ToastButton /> */

    return (
      <Setup>
        <Root>{currentScreen}</Root>
      </Setup>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  horizontalMiddle: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

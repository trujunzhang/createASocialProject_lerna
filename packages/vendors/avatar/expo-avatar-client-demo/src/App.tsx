import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading, /* Asset, Font, */ Constants } from 'expo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MaterialIcons } from '@expo/vector-icons'
//import { version as reactNativeVersion } from './../node_modules/react-native/package.json'
import { CurrentAvatarPage } from './components'

export default class App extends React.Component<any, any> {
  state = {
    isLoadingComplete: false
  }

  async componentWillMount() {
    console.log('Expo', Constants)
    //console.log('React Native Version: ', reactNativeVersion)

    /* const [ignoredAssets, ignoredFonts] = await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]); */
    this.setState({
      isLoadingComplete: true
    })
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Icon name="book" size={30} color="#900" />
        <MaterialIcons name="developer-board" size={32} color="green" />
        <CurrentAvatarPage />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

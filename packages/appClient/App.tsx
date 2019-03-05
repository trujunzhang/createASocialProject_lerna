import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ColorListView } from './src/components/lib/colorScheme/colorListView'

const barHeight = StatusBar.currentHeight || 0

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{barHeight}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <ColorListView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

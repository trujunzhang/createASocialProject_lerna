import * as React from 'react'
import { StyleSheet, Text, View } from 'react-primitives'
import {
  ColorListView
} from '../src/components/lib/colorScheme/colorListView'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})

export default (props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}> {'Welcome to Next.js with react - native - web, with typescript! '} </Text>
      <ColorListView />
    </View>
  )
}

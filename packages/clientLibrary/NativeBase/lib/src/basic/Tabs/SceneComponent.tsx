import * as React from 'react'
// const React = require('react')
// const ReactNative = require('react-native')
const { Component } = React
import { View, StyleSheet } from 'react-primitives'

import { StaticContainer } from '@appBasic/Tabs/StaticContainer'

// const StaticContainer = require('./StaticContainer')

const SceneComponent = (Props) => {
  const { shouldUpdated, ...props } = Props
  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>{props.children}</StaticContainer>
    </View>
  )
}

module.exports = SceneComponent
//export default SceneComponent;

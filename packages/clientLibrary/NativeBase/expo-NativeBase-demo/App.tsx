import React from 'react'
import Setup from './src/boot/setup'
import { appConfig } from './src/utils/appSetup'

appConfig()

export default class App extends React.Component {
  render() {
    return <Setup />
  }
}

import * as React from 'react'
import { Dimensions } from 'react-primitives'
import { render, Artboard, View, Text } from 'react-sketchapp'

import { CurrentPage } from './pages'

import * as Sentry from '@sentry/browser'
Sentry.init({ dsn: 'https://0026c5a58b7748d4befb902e59a2a2f9@sentry.io/165521' })
// console.log('Dimensions(screen): ', JSON.stringify(Dimensions.get('window')))

class App extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
      // Sentry.showReportDialog();
    })
  }
  render() {
    // return null
    if (this.state.error) {
      //render fallback UI
      return (
        <Text>{'error!'}</Text>
        // <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      )
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red'
        }}>
        <CurrentPage />
      </View>
    )
  }
}

const Document = () => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4
      // backgroundColor: 'blue'
    }}>
    <App />
  </Artboard>
)

export default (context: any) => {
  render(<Document />, context.document.currentPage())
}

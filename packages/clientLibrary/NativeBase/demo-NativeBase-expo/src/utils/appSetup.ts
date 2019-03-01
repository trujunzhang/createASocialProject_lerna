import { YellowBox } from 'react-native'

export function appConfig() {
  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated'
  ])
  console.disableYellowBox = true
}

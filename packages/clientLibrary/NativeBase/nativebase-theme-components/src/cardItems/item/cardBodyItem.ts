import { themeVariables } from '@app/native-base-variables'

export function getCardBodyItem(variables: themeVariables, platform) {
  return {
    padding: -5,
    'NativeBase.Text': {
      marginTop: 5
    }
  }
}

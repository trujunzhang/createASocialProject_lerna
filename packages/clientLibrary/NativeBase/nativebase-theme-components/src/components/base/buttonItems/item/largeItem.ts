import { themeVariables } from '@app/native-base-variables'

export function getLargeItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    height: 60,
    'NativeBase.Text': {
      fontSize: 22
    }
  }
}

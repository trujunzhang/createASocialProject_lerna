import { themeVariables } from '@app/native-base-variables'

export function getNoLeftItem(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Left': {
      width: platform === 'ios' ? undefined : 0,
      flex: platform === 'ios' ? 1 : 0
    },
    'NativeBase.Body': {
      'NativeBase.Title': {
        paddingLeft: platform === 'ios' ? undefined : 10
      },
      'NativeBase.Subtitle': {
        paddingLeft: platform === 'ios' ? undefined : 10
      }
    }
  }
}

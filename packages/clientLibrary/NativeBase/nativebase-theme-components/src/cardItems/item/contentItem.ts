import { themeVariables } from '@app/native-base-variables'

export function getContentItem(variables: themeVariables, platform) {
  return {
    'NativeBase.Text': {
      color: platform === 'ios' ? '#555' : '#222',
      fontSize: variables.DefaultFontSize - 2
    }
  }
}

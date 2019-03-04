import { themeVariables } from '@app/native-base-variables'

export function getPickerItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Text': {
      '.note': {
        fontSize: 16,
        lineHeight: null
      }
    }
  }
}

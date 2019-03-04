import { themeVariables } from '@app/native-base-variables'

export function getRoundedItem(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Item': {
      borderRadius: platform === 'ios' && platformStyle !== 'material' ? 25 : 3
    }
  }
}

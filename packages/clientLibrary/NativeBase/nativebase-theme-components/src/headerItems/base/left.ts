import { getButtonBase } from './leftBase'

import { themeVariables } from '@app/native-base-variables'

export function getLeftBase(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Button': getButtonBase(variables, platform, platformStyle),

    flex: platform === 'ios' && platformStyle !== 'material' ? 1 : 1,
    alignSelf: 'center',
    alignItems: 'flex-start'
  }
}

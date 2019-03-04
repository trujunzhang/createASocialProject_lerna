function getIconBase(variables: themeVariables, platform, platformStyle) {
  return {
    color: variables.toolbarBtnColor,
    fontSize:
      platform === 'ios' && variables.platformStyle !== 'material'
        ? variables.iconHeaderSize + 1
        : variables.iconHeaderSize,
    marginTop: 0,
    marginRight: 2,
    marginLeft: 1,
    paddingTop: 1
  }
}

function getIconNBBase(variables: themeVariables, platform, platformStyle) {
  return {
    color: variables.toolbarBtnColor,
    fontSize:
      platform === 'ios' && variables.platformStyle !== 'material'
        ? variables.iconHeaderSize + 1
        : variables.iconHeaderSize - 2,
    marginTop: 0,
    marginRight: 2,
    marginLeft: 1,
    paddingTop: 1
  }
}

function getTextBase(variables: themeVariables, platform, platformStyle) {
  return {
    color: variables.toolbarBtnTextColor,
    fontSize: platform === 'ios' ? 17 : 0,
    top: platform === 'ios' ? 1 : -1.5,
    paddingLeft: platform === 'ios' && platformStyle !== 'material' ? 2 : 5,
    paddingRight: platform === 'ios' && platformStyle !== 'material' ? undefined : 10
  }
}

import { themeVariables } from '@app/native-base-variables'

export function getTransparentItem(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Icon': getIconBase(variables, platform, platformStyle),
    'NativeBase.IconNB': getIconNBBase(variables, platform, platformStyle),
    'NativeBase.Text': getTextBase(variables, platform, platformStyle),

    backgroundColor: 'transparent',
    borderColor: null,
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null
  }
}

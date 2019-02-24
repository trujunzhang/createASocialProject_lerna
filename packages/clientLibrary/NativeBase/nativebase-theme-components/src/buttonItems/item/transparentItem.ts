import { themeVariables } from '@app/native-base-variables'

export function getTransparentItem(
  {
    dangerCommon,
    darkCommon,
    infoCommon,
    lightCommon,

    primaryCommon,
    successCommon,
    warningCommon
  },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    // backgroundColor: 'transparent',
    backgroundColor: 'black',
    flex: 1,
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
    ...primaryCommon,
    '.dark': {
      ...darkCommon,
      backgroundColor: null
    },
    '.danger': {
      ...dangerCommon,
      backgroundColor: null
    },
    '.warning': {
      ...warningCommon,
      backgroundColor: null
    },
    '.info': {
      ...infoCommon,
      backgroundColor: null
    },
    '.primary': {
      ...primaryCommon,
      backgroundColor: null
    },
    '.success': {
      ...successCommon,
      backgroundColor: null
    },
    '.light': {
      ...lightCommon,
      backgroundColor: null
    },
    '.disabled': {
      backgroundColor: 'transparent',
      borderColor: variables.btnDisabledBg,
      borderWidth: variables.borderWidth * 2,
      'NativeBase.Text': {
        color: variables.btnDisabledBg
      },
      'NativeBase.Icon': {
        color: variables.btnDisabledBg
      },
      'NativeBase.IconNB': {
        color: variables.btnDisabledBg
      }
    }
  }
}

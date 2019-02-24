import { themeVariables } from '@app/native-base-variables'

export function getBorderedItem(
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
    '.dark': {
      ...darkCommon,
      backgroundColor: 'transparent',
      borderColor: variables.brandDark,
      borderWidth: variables.borderWidth * 2
    },
    '.light': {
      ...lightCommon,
      backgroundColor: 'transparent',
      borderColor: variables.brandLight,
      borderWidth: variables.borderWidth * 2
    },
    '.primary': {
      ...primaryCommon,
      backgroundColor: 'transparent',
      borderColor: variables.btnPrimaryBg(),
      borderWidth: variables.borderWidth * 2
    },
    '.success': {
      ...successCommon,
      backgroundColor: 'transparent',
      borderColor: variables.btnSuccessBg(),
      borderWidth: variables.borderWidth * 2
    },
    '.info': {
      ...infoCommon,
      backgroundColor: 'transparent',
      borderColor: variables.btnInfoBg(),
      borderWidth: variables.borderWidth * 2
    },
    '.warning': {
      ...warningCommon,
      backgroundColor: 'transparent',
      borderColor: variables.btnWarningBg(),
      borderWidth: variables.borderWidth * 2
    },
    '.danger': {
      ...dangerCommon,
      backgroundColor: 'transparent',
      borderColor: variables.btnDangerBg(),
      borderWidth: variables.borderWidth * 2
    },
    '.disabled': {
      backgroundColor: null,
      borderColor: variables.btnDisabledBg,
      borderWidth: variables.borderWidth * 2,
      'NativeBase.Text': {
        color: variables.btnDisabledBg
      }
    },
    ...primaryCommon,
    borderWidth: variables.borderWidth * 2,
    elevation: null,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    backgroundColor: 'transparent'
  }
}

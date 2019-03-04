import { themeVariables } from '@app/native-base-variables'

export function getRightBase(transparentBtnCommon, variables: themeVariables, platform) {
  return {
    'NativeBase.Badge': {
      alignSelf: null
    },
    'NativeBase.Button': {
      '.transparent': {
        ...transparentBtnCommon
      },
      alignSelf: null
    },
    'NativeBase.Icon': {
      alignSelf: null,
      fontSize: variables.iconFontSize - 8,
      color: variables.cardBorderColor
    },
    'NativeBase.IconNB': {
      alignSelf: null,
      fontSize: variables.iconFontSize - 8,
      color: variables.cardBorderColor
    },
    'NativeBase.Text': {
      fontSize: variables.DefaultFontSize - 1,
      alignSelf: null
    },
    'NativeBase.Thumbnail': {
      alignSelf: null
    },
    'NativeBase.Image': {
      alignSelf: null
    },
    'NativeBase.Radio': {
      alignSelf: null
    },
    'NativeBase.Checkbox': {
      alignSelf: null
    },
    'NativeBase.Switch': {
      alignSelf: null
    },
    flex: 0.8
  }
}

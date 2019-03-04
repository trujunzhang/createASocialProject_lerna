import { themeVariables } from '@app/native-base-variables'

export function getLeftBase(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Body': {
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200'
        },
        fontWeight: '600'
      },
      marginLeft: 10,
      alignItems: null,
      alignSelf: null
    },
    'NativeBase.Icon': {
      width: variables.iconFontSize - 10,
      fontSize: variables.iconFontSize - 10
    },
    'NativeBase.IconNB': {
      width: variables.iconFontSize - 10,
      fontSize: variables.iconFontSize - 10
    },
    'NativeBase.Text': {
      alignSelf: 'center'
    },
    flexDirection: 'row'
  }
}

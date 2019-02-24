import { themeVariables } from '@app/native-base-variables'

export function getLeftBase(transparentBtnCommon, variables: themeVariables, platform) {
  return {
    'NativeBase.Body': {
      'NativeBase.Text': {
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '400',
          marginRight: 20
        }
      },
      flex: 1,
      marginLeft: 10,
      alignItems: null
    },
    'NativeBase.Icon': {
      fontSize: variables.iconFontSize
    },
    'NativeBase.IconNB': {
      fontSize: variables.iconFontSize
    },
    'NativeBase.Text': {
      marginLeft: 10,
      alignSelf: 'center'
    },
    'NativeBase.Button': {
      '.transparent': {
        ...transparentBtnCommon,
        paddingRight: variables.cardItemPadding + 5
      }
    },
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

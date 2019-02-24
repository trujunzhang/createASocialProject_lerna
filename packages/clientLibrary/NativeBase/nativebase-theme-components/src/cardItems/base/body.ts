import { themeVariables } from '@app/native-base-variables'

export function getBodyBase(transparentBtnCommon, variables: themeVariables, platform) {
  return {
    'NativeBase.Text': {
      '.note': {
        color: variables.listNoteColor,
        fontWeight: '200',
        marginRight: 20
      }
    },
    'NativeBase.Button': {
      '.transparent': {
        ...transparentBtnCommon,
        paddingRight: variables.cardItemPadding + 5,
        alignSelf: 'stretch'
      }
    },
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start'
  }
}

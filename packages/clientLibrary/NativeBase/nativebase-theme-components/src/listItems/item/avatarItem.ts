import { themeVariables } from '@app/native-base-variables'

export function getAvatarItem(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Left': {
      flex: 0,
      alignSelf: 'flex-start',
      paddingTop: 14
    },
    'NativeBase.Body': {
      'NativeBase.Text': {
        marginLeft: null
      },
      flex: 1,
      paddingVertical: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      borderColor: variables.listBorderColor,
      marginLeft: variables.listItemPadding + 5
    },
    'NativeBase.Right': {
      'NativeBase.Text': {
        '.note': {
          fontSize: variables.noteFontSize - 2
        }
      },
      flex: 0,
      paddingRight: variables.listItemPadding + 5,
      alignSelf: 'stretch',
      paddingVertical: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      borderColor: variables.listBorderColor
    },
    '.noBorder': {
      'NativeBase.Body': {
        borderBottomWidth: null
      },
      'NativeBase.Right': {
        borderBottomWidth: null
      }
    },
    borderBottomWidth: null,
    paddingVertical: null,
    paddingRight: null
  }
}

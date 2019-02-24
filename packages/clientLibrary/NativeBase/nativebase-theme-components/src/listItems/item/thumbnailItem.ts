import { themeVariables } from '@app/native-base-variables'

export function getThumbnailItem(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Left': {
      flex: 0
    },
    'NativeBase.Body': {
      'NativeBase.Text': {
        marginLeft: null
      },
      flex: 1,
      paddingVertical: variables.listItemPadding + 5,
      borderBottomWidth: variables.borderWidth,
      borderColor: variables.listBorderColor,
      marginLeft: variables.listItemPadding + 5
    },
    'NativeBase.Right': {
      'NativeBase.Button': {
        '.transparent': {
          'NativeBase.Text': {
            fontSize: variables.listNoteSize,
            color: variables.sTabBarActiveTextColor
          }
        },
        height: null
      },
      flex: 0,
      justifyContent: 'center',
      alignSelf: 'stretch',
      paddingRight: variables.listItemPadding + 5,
      paddingVertical: variables.listItemPadding + 5,
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

import { themeVariables } from '@app/native-base-variables'
export const separatorTheme = (variables: themeVariables) => {
  const theme = {
    '.group': {
      height: 50,
      paddingVertical: variables.listItemPadding - 8,
      paddingTop: variables.listItemPadding + 12,
      '.bordered': {
        height: 50,
        paddingVertical: variables.listItemPadding - 8,
        paddingTop: variables.listItemPadding + 12
      }
    },
    '.bordered': {
      '.noTopBorder': {
        borderTopWidth: 0
      },
      '.noBottomBorder': {
        borderBottomWidth: 0
      },

      height: 35,
      paddingTop: variables.listItemPadding + 2,
      paddingBottom: variables.listItemPadding,
      borderBottomWidth: variables.borderWidth,
      borderTopWidth: variables.borderWidth,
      borderColor: variables.listBorderColor
    },
    '.divider': {
      borderTopWidth: 0,
      borderBottomWidth: variables.borderWidth,
      borderColor: variables.listBorderColor,
      height: variables.borderWidth,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0
      // backgroundColor:'red'
    },
    'NativeBase.Text': {
      fontSize: variables.tabBarTextSize - 2,
      color: '#777'
    },
    '.noTopBorder': {
      borderTopWidth: 0
    },
    '.noBottomBorder': {
      borderBottomWidth: 0
    },
    height: 38,
    backgroundColor: '#F0EFF5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: variables.listItemPadding + 5
  }

  return theme
}

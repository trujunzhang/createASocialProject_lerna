import { themeVariables } from '@app/native-base-variables'

export function getSearchBarItem(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Item': {
      'NativeBase.Icon': {
        backgroundColor: 'transparent',
        color: variables.dropdownLinkColor,
        fontSize: platform === 'ios' ? variables.iconFontSize - 10 : variables.iconFontSize - 5,
        alignItems: 'center',
        marginTop: 2,
        paddingRight: 8
      },
      'NativeBase.IconNB': {
        backgroundColor: 'transparent',
        color: null,
        alignSelf: 'center'
      },
      'NativeBase.Input': {
        alignSelf: 'center'
      },
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      height: platform === 'ios' ? 30 : 40,
      borderColor: 'transparent',
      backgroundColor: '#fff',
      borderRadius: 5
    },
    'NativeBase.Button': {
      '.transparent': {
        'NativeBase.Text': {
          fontWeight: '500'
        },
        paddingHorizontal: null,
        paddingLeft: platform === 'ios' ? 10 : null
      },
      paddingHorizontal: platform === 'ios' ? undefined : null,
      width: platform === 'ios' ? undefined : 0,
      height: platform === 'ios' ? undefined : 0
    },
    backgroundColor: variables.toolbarInputColor,
    padding: 10,
    marginLeft: null
  }
}

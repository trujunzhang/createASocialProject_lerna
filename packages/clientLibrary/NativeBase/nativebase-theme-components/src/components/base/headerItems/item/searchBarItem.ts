import { themeVariables } from '@app/native-base-variables'

export function getSearchBarItem(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Item': {
      'NativeBase.Icon': {
        backgroundColor: 'transparent',
        color: variables.dropdownLinkColor,
        fontSize: variables.toolbarSearchIconSize,
        alignItems: 'center',
        marginTop: 2,
        paddingRight: 10,
        paddingLeft: 10
      },
      'NativeBase.IconNB': {
        backgroundColor: 'transparent',
        color: null,
        alignSelf: 'center'
      },
      'NativeBase.Input': {
        alignSelf: 'center',
        lineHeight: null,
        height: variables.searchBarInputHeight
      },
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      height: variables.searchBarHeight,
      borderColor: 'transparent',
      backgroundColor: variables.toolbarInputColor
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
    }
  }
}

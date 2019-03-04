import { themeVariables } from '@app/native-base-variables'

export function getFixRightBase(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Button': {
      '.hasText': {
        height: 30,
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize - 2,
          marginTop: 2,
          marginRight: 2,
          marginLeft: 5
        },
        'NativeBase.Text': {
          color: variables.toolbarBtnTextColor,
          fontSize: platform === 'ios' ? 17 : 14,
          lineHeight: 19.5
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize - 2,
          marginTop: 2,
          marginRight: 2,
          marginLeft: 5
        }
      },
      '.transparent': {
        marginRight: platform === 'ios' ? -9 : -5,
        paddingLeft: 15,
        paddingRight: 12,
        paddingHorizontal: 15,
        borderRadius: 50,
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize - 2,
          marginTop: 0,
          marginLeft: 2,
          marginRight: 0
          // paddingTop: 0
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize - 2,
          marginTop: 0,
          marginLeft: 2,
          marginRight: 0
          // paddingTop: 0
        },
        'NativeBase.Text': {
          color: variables.toolbarBtnTextColor,
          fontSize: platform === 'ios' ? 17 : 14,
          top: platform === 'ios' ? 1 : -1.5,
          paddingRight: platform === 'ios' && variables.platformStyle !== 'material' ? 0 : undefined
        },
        backgroundColor: 'transparent',
        borderColor: null,
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null
      },
      'NativeBase.Icon': {
        color: variables.toolbarBtnColor
      },
      'NativeBase.IconNB': {
        color: variables.toolbarBtnColor
      },
      alignSelf: null,
      paddingHorizontal: variables.buttonPadding
    },
    // flex: 1,
    // backgroundColor:'black',
    alignSelf: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}

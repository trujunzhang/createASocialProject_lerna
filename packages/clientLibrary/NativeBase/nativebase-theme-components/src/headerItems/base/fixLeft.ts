import { themeVariables } from '@app/native-base-variables'

export function getFixLeftBase(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Button': {
      '.hasText': {
        marginLeft: -10,
        height: 30,
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize,
          marginTop: 2,
          marginRight: 5,
          marginLeft: 2
        },
        'NativeBase.Text': {
          color: variables.toolbarBtnTextColor,
          fontSize: platform === 'ios' ? 17 : 0,
          marginLeft: 7,
          lineHeight: 19.5
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
          fontSize: variables.iconHeaderSize,
          marginTop: 2,
          marginRight: 5,
          marginLeft: 2
        }
      },
      '.transparent': {
        marginLeft: platform === 'ios' && platformStyle !== 'material' ? -3 : 0,
        'NativeBase.Icon': {
          color: variables.toolbarBtnColor,
          fontSize:
            platform === 'ios' && variables.platformStyle !== 'material'
              ? variables.iconHeaderSize + 1
              : variables.iconHeaderSize,
          marginTop: 0,
          marginRight: 2,
          marginLeft: 1,
          paddingTop: 1
        },
        'NativeBase.IconNB': {
          color: variables.toolbarBtnColor,
          fontSize:
            platform === 'ios' && variables.platformStyle !== 'material'
              ? variables.iconHeaderSize + 1
              : variables.iconHeaderSize - 2,
          marginTop: 0,
          marginRight: 2,
          marginLeft: 1,
          paddingTop: 1
        },
        'NativeBase.Text': {
          color: variables.toolbarBtnTextColor,
          fontSize: platform === 'ios' ? 17 : 0,
          top: platform === 'ios' ? 1 : -1.5,
          paddingLeft: platform === 'ios' && platformStyle !== 'material' ? 2 : 5,
          paddingRight: platform === 'ios' && platformStyle !== 'material' ? undefined : 10
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
      paddingRight: variables.buttonPadding,
      paddingLeft: platform === 'ios' && platformStyle !== 'material' ? 4 : 8
    },
    // backgroundColor:'red',
    alignSelf: 'center',
    alignItems: 'flex-start'
  }
}

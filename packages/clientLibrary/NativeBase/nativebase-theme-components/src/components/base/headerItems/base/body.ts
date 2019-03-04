import { themeVariables } from '@app/native-base-variables'

export function getBodyBase(variables: themeVariables, platform, platformStyle) {
  return {
    flex: 1,
    // backgroundColor: 'yellow',
    minWidth: 160,
    alignItems: platform === 'ios' && platformStyle !== 'material' ? 'center' : 'flex-start',
    alignSelf: 'center',
    'NativeBase.Segment': {
      borderWidth: 0,
      alignSelf: 'flex-end',
      marginRight: platform === 'ios' ? -40 : -55
    },
    'NativeBase.Button': {
      alignSelf: 'center',
      '.transparent': {
        backgroundColor: 'transparent'
      },
      'NativeBase.Icon': {
        color: variables.toolbarBtnColor
      },
      'NativeBase.IconNB': {
        color: variables.toolbarBtnColor
      },
      'NativeBase.Text': {
        color: variables.inverseTextColor,
        backgroundColor: 'transparent'
      }
    }
  }
}

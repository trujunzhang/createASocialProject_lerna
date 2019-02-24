import { themeVariables } from '@app/native-base-variables'

export function getSvgLeftItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
    justifyContent: 'flex-start',
    'NativeBase.Text': {
      // backgroundColor:'red',
      lineHeight: 20,
      paddingHorizontal: 0,
      paddingLeft: 0,
      marginLeft: 0
    },
    'NativeBase.IconNB': {
      marginRight: 0,
      marginLeft: 16
    },
    'NativeBase.Icon': {
      marginRight: 0,
      marginLeft: 16
    }
  }
}

import { themeVariables } from '@app/native-base-variables'

export function getOnlyCenterItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    // backgroundColor:'red',
    'NativeBase.Icon': {
      alignSelf: 'center',
      marginHorizontal: 0
      // backgroundColor:'blue'
    },
    'NativeBase.Text': {
      paddingHorizontal: 0,
      // backgroundColor:'blue',
      alignSelf: 'center',
      textAlign: 'center'
    }
  }
}

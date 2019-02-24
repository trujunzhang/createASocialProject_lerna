import { themeVariables } from '@app/native-base-variables'

export function getInputGroupBase(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Icon': {
      paddingRight: 5
    },
    'NativeBase.IconNB': {
      paddingRight: 5
    },
    'NativeBase.Input': {
      paddingHorizontal: 5
    },
    flex: 1,
    borderWidth: null,
    margin: -10,
    borderBottomColor: 'transparent'
  }
}

import { themeVariables } from '@app/native-base-variables'

export function getSelectedItem(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Left': {
      ...selectedStyle
    },
    'NativeBase.Body': {
      ...selectedStyle
    },
    'NativeBase.Right': {
      ...selectedStyle
    },
    ...selectedStyle
  }
}

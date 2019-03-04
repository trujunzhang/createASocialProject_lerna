import { themeVariables } from '@app/native-base-variables'

export function getHeaderItem(variables: themeVariables, platform) {
  return {
    'NativeBase.Text': {
      fontSize: 16,
      fontWeight: platform === 'ios' ? '600' : '500'
    },
    '.bordered': {
      'NativeBase.Text': {
        color: variables.brandPrimary,
        fontWeight: platform === 'ios' ? '600' : '500'
      },
      borderBottomWidth: variables.borderWidth
    },
    borderBottomWidth: null,
    paddingVertical: variables.cardItemPadding + 5
  }
}

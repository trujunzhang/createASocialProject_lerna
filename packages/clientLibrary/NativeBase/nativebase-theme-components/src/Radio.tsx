import { themeVariables } from '@app/native-base-variables'
export const radioTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color: platform === 'ios' ? variables.radioColor : variables.radioSelectedColorAndroid,
        lineHeight: platform === 'ios' ? 25 : variables.radioBtnLineHeight,
        height: platform === 'ios' ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: platform === 'ios' ? 'transparent' : undefined,
      lineHeight: platform === 'ios' ? undefined : variables.radioBtnLineHeight,
      fontSize: platform === 'ios' ? undefined : variables.radioBtnSize
    }
  }

  return radioTheme
}

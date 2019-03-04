import { themeVariables } from '@app/native-base-variables'
export const checkBoxTheme = (variables: themeVariables) => {
  const checkBoxTheme = {
    '.checked': {
      'NativeBase.Icon': {
        color: variables.checkboxTickColor
      },
      'NativeBase.IconNB': {
        color: variables.checkboxTickColor
      }
    },
    'NativeBase.Icon': {
      color: 'transparent',
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    'NativeBase.IconNB': {
      color: 'transparent',
      lineHeight: variables.CheckboxIconSize,
      marginTop: variables.CheckboxIconMarginTop,
      fontSize: variables.CheckboxFontSize
    },
    borderRadius: variables.CheckboxRadius,
    overflow: 'hidden',
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    borderWidth: variables.CheckboxBorderWidth,
    paddingLeft: variables.CheckboxPaddingLeft - 1,
    paddingBottom: variables.CheckboxPaddingBottom,
    left: 10
  }

  return checkBoxTheme
}

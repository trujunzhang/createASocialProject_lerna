import { IThemeVariables } from '@app/tools' // typings

export function hasSubtitleProps(variables: IThemeVariables, platform, platformStyle) {
  return {
    'NativeBase.Body': {
      'NativeBase.Title': {
        fontSize: variables.titleFontSize - 2,
        fontFamily: variables.titleFontfamily,
        textAlign: 'center',
        fontWeight: '500',
        paddingBottom: 3
      },
      'NativeBase.Subtitle': {
        fontSize: variables.subTitleFontSize,
        fontFamily: variables.titleFontfamily,
        color: variables.subtitleColor,
        textAlign: 'center'
      }
    }
  }
}

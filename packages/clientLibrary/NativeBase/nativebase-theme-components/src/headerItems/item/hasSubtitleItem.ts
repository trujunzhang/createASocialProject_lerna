import { themeVariables } from '@app/native-base-variables'

export function getHasSubtitleItem(variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Body': {
      // backgroundColor:'yellow',
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

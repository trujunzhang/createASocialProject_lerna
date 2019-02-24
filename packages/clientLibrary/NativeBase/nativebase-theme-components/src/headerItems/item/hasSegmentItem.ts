import { themeVariables } from '@app/native-base-variables'

export function getHasSegmentItem(variables: themeVariables, platform, platformStyle) {
  return {
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
    borderBottomWidth: null,
    'NativeBase.Left': {
      flex: 0.3
    },
    'NativeBase.Right': {
      flex: 0.3
    },
    'NativeBase.Body': {
      flex: 1,
      'NativeBase.Segment': {
        marginRight: 0,
        alignSelf: 'center',
        'NativeBase.Button': {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    }
  }
}

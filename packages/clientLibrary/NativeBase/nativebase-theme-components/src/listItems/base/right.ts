import { themeVariables } from '@app/native-base-variables'

export function getRightBase(selectedStyle, variables: themeVariables, platform) {
  return {
    'NativeBase.Badge': {
      alignSelf: null
    },
    'NativeBase.PickerNB': {
      'NativeBase.Button': {
        marginRight: -15,
        'NativeBase.Text': {
          color: variables.topTabBarActiveTextColor
        }
      }
    },
    'NativeBase.Button': {
      alignSelf: null,
      '.transparent': {
        'NativeBase.Text': {
          color: variables.topTabBarActiveTextColor
        }
      }
    },
    'NativeBase.Icon': {
      alignSelf: null,
      fontSize: variables.iconFontSize - 8,
      color: '#c9c8cd'
    },
    'NativeBase.IconNB': {
      alignSelf: null,
      fontSize: variables.iconFontSize - 8,
      color: '#c9c8cd'
    },
    'NativeBase.Text': {
      '.note': {
        color: variables.listNoteColor,
        fontWeight: '200'
      },
      alignSelf: null
    },
    'NativeBase.Thumbnail': {
      alignSelf: null
    },
    'NativeBase.Image': {
      alignSelf: null
    },
    'NativeBase.Radio': {
      alignSelf: null
    },
    'NativeBase.Checkbox': {
      alignSelf: null
    },
    'NativeBase.Switch': {
      alignSelf: null
    },
    padding: null,
    flex: 0.28
  }
}

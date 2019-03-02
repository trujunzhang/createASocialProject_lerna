import { pickerTheme } from '../../Picker'

import { PixelRatio } from 'react-primitives'
import { themeVariables } from '@app/native-base-variables'

export function getIconItem(selectedStyle, variables: themeVariables, platform) {
  return {
    '.last': {
      'NativeBase.Body': {
        borderBottomWidth: null
      },
      'NativeBase.Right': {
        borderBottomWidth: null
      },
      borderBottomWidth: variables.borderWidth,
      borderColor: variables.listBorderColor
    },
    'NativeBase.Left': {
      'NativeBase.Button': {
        'NativeBase.IconNB': {
          marginHorizontal: null,
          fontSize: variables.iconFontSize - 5
        },
        'NativeBase.Icon': {
          marginHorizontal: null,
          fontSize: variables.iconFontSize - 8
        },
        alignSelf: 'center',
        height: 29,
        width: 29,
        borderRadius: 6,
        paddingVertical: null,
        paddingHorizontal: null,
        alignItems: 'center',
        justifyContent: 'center'
      },
      'NativeBase.Icon': {
        width: variables.iconFontSize - 5,
        fontSize: variables.iconFontSize - 2
      },
      'NativeBase.IconNB': {
        width: variables.iconFontSize - 5,
        fontSize: variables.iconFontSize - 2
      },
      paddingRight: variables.listItemPadding + 5,
      flex: 0,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center'
    },
    'NativeBase.Body': {
      'NativeBase.Text': {
        marginLeft: null,
        fontSize: 17
      },
      flex: 1,
      height: 44,
      justifyContent: 'center',
      borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
      borderColor: variables.listBorderColor
    },
    'NativeBase.Right': {
      'NativeBase.Text': {
        textAlign: 'center',
        color: '#8F8E95',
        fontSize: 17
      },
      'NativeBase.IconNB': {
        color: '#C8C7CC',
        fontSize: variables.iconFontSize - 10,
        alignSelf: 'center',
        paddingLeft: 10,
        paddingTop: 3
      },
      'NativeBase.Icon': {
        color: '#C8C7CC',
        fontSize: variables.iconFontSize - 10,
        alignSelf: 'center',
        paddingLeft: 10,
        paddingTop: 3
      },
      'NativeBase.Switch': {
        marginRight: platform === 'ios' ? undefined : -5,
        alignSelf: null
      },
      'NativeBase.PickerNB': {
        ...pickerTheme(variables)
      },
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0,
      alignSelf: 'stretch',
      height: 44,
      justifyContent: 'flex-end',
      borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
      borderColor: variables.listBorderColor,
      paddingRight: variables.listItemPadding + 5
    },
    '.noBorder': {
      'NativeBase.Body': {
        borderBottomWidth: null
      },
      'NativeBase.Right': {
        borderBottomWidth: null
      }
    },
    borderBottomWidth: null,
    paddingVertical: null,
    paddingRight: null,
    height: 44,
    justifyContent: 'center'
  }
}

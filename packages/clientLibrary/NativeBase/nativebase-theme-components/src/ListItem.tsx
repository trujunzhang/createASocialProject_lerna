import {
  getInputGroupBase,
  getSearchBarItem,
  getItemHeaderItem,
  getItemDividerItem,
  getSelectedItem,
  getLeftBase,
  getRightBase,
  getAvatarItem,
  getIconItem,
  getThumbnailItem,
  getFullItem
} from './listItems'

import { themeVariables } from '@app/native-base-variables'
export const listItemTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const themePlatformFunc = variables.themePlatformFunc
  const selectedStyle = {
    'NativeBase.Text': {
      color: variables.listItemSelected
    },
    'NativeBase.Icon': {
      color: variables.listItemSelected
    }
  }

  const listItemTheme = {
    'NativeBase.InputGroup': getInputGroupBase(selectedStyle, variables, platform),
    '.searchBar': getSearchBarItem(selectedStyle, variables, platform),
    'NativeBase.CheckBox': {
      marginLeft: -10,
      marginRight: 10
    },
    '.first': {
      '.itemHeader': {
        paddingTop: variables.listItemPadding + 3
      }
    },
    '.itemHeader': getItemHeaderItem(selectedStyle, variables, platform),
    '.full': getFullItem(selectedStyle, variables, platform),
    '.itemDivider': getItemDividerItem(selectedStyle, variables, platform),
    '.selected': getSelectedItem(selectedStyle, variables, platform),

    'NativeBase.Left': getLeftBase(selectedStyle, variables, platform),

    'NativeBase.Body': {
      'NativeBase.Text': {
        marginHorizontal: variables.listItemPadding,
        '.note': {
          color: variables.listNoteColor,
          fontWeight: '200'
        }
      },
      alignSelf: null,
      alignItems: null
    },

    'NativeBase.Right': getRightBase(selectedStyle, variables, platform),

    'NativeBase.Text': {
      '.note': {
        color: variables.listNoteColor,
        fontWeight: '200'
      },
      alignSelf: 'center'
    },
    '.last': {
      marginLeft: -(variables.listItemPadding + 5),
      paddingLeft: (variables.listItemPadding + 5) * 2,
      top: 1
    },

    '.avatar': getAvatarItem(selectedStyle, variables, platform),
    '.thumbnail': getThumbnailItem(selectedStyle, variables, platform),
    '.icon': getIconItem(selectedStyle, variables, platform),

    '.noBorder': {
      borderBottomWidth: null
    },
    '.noIndent': {
      marginLeft: null,
      padding: variables.listItemPadding,
      paddingLeft: variables.listItemPadding + 6
    },
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: variables.listItemPadding + 6,
    paddingVertical: variables.listItemPadding + 3,
    marginLeft: variables.listItemPadding + 6,
    borderBottomWidth: 1 / themePlatformFunc.getPixelSizeForLayoutSize(1),
    backgroundColor: variables.listBg,
    borderColor: variables.listBorderColor
  }

  return listItemTheme
}

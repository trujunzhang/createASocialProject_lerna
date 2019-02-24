import {
  getLeftBase,
  getBodyBase,
  getRightBase,
  getBorderedItem,
  getCardBodyItem,
  getContentItem,
  getFirstItem,
  getFooterItem,
  getHeaderItem,
  getLastItem
} from './cardItems'

import { themeVariables } from '@app/native-base-variables'
export const cardItemTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const transparentBtnCommon = {
    'NativeBase.Text': {
      fontSize: variables.DefaultFontSize - 3,
      color: variables.sTabBarActiveTextColor
    },
    'NativeBase.Icon': {
      fontSize: variables.iconFontSize - 10,
      color: variables.sTabBarActiveTextColor,
      marginHorizontal: null
    },
    'NativeBase.IconNB': {
      fontSize: variables.iconFontSize - 10,
      color: variables.sTabBarActiveTextColor
    },
    paddingVertical: null,
    paddingHorizontal: null
  }

  const cardItemTheme = {
    'NativeBase.Left': getLeftBase(transparentBtnCommon, variables, platform),

    '.content': getContentItem(variables, platform),
    '.cardBody': getCardBodyItem(variables, platform),
    'NativeBase.Body': getBodyBase(transparentBtnCommon, variables, platform),
    'NativeBase.Right': getRightBase(transparentBtnCommon, variables, platform),

    '.header': getHeaderItem(variables, platform),
    '.footer': getFooterItem(variables, platform),
    'NativeBase.Text': {
      '.note': {
        color: variables.listNoteColor,
        fontWeight: '200'
      }
    },
    'NativeBase.Icon': {
      width: variables.iconFontSize + 5,
      fontSize: variables.iconFontSize - 2
    },
    'NativeBase.IconNB': {
      width: variables.iconFontSize + 5,
      fontSize: variables.iconFontSize - 2
    },

    '.bordered': getBorderedItem(variables, platform),
    '.first': getFirstItem(variables, platform),
    '.last': getLastItem(variables, platform),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    padding: variables.cardItemPadding + 5,
    paddingVertical: variables.cardItemPadding,
    backgroundColor: variables.cardDefaultBg
  }

  return cardItemTheme
}

import {
  getCommons,
  getBlockItem,
  getBorderedItem,
  getDangerItem,
  getDarkItem,
  getDisabledItem,
  getFullItem,
  getIconLeftItem,
  getIconRightItem,
  getInfoItem,
  getLargeItem,
  getLightItem,
  getPickerItem,
  getPrimaryItem,
  getRoundedItem,
  getSmallItem,
  getSuccessItem,
  getTransparentItem,
  getVerticalItem,
  getWarningItem,
  getTwitterItem,
  getFacebookItem,
  getOnlyCenterItem,
  getSvgLeftItem,
  getTextBase,
  getIconBase,
  getIconNBBase
} from './buttonItems'

import { themeVariables } from '@app/native-base-variables'
export const buttonTheme = (variables: themeVariables) => {
  const platformStyle = variables.platformStyle
  const platform = variables.platform

  const buttonCommons = getCommons(variables, platform, platformStyle)

  const buttonTheme = {
    '.disabled': getDisabledItem(buttonCommons, variables, platform, platformStyle),
    '.bordered': getBorderedItem(buttonCommons, variables, platform, platformStyle),
    '.dark': getDarkItem(buttonCommons, variables, platform, platformStyle),
    '.light': getLightItem(buttonCommons, variables, platform, platformStyle),
    '.primary': getPrimaryItem(buttonCommons, variables, platform, platformStyle),
    '.success': getSuccessItem(buttonCommons, variables, platform, platformStyle),

    '.info': getInfoItem(buttonCommons, variables, platform, platformStyle),
    '.warning': getWarningItem(buttonCommons, variables, platform, platformStyle),
    '.danger': getDangerItem(buttonCommons, variables, platform, platformStyle),
    '.block': getBlockItem(buttonCommons, variables, platform, platformStyle),
    '.full': getFullItem(buttonCommons, variables, platform, platformStyle),

    '.twitter': getTwitterItem(buttonCommons, variables, platform, platformStyle),
    '.facebook': getFacebookItem(buttonCommons, variables, platform, platformStyle),

    '.rounded': getRoundedItem(buttonCommons, variables, platform, platformStyle),
    '.transparent': getTransparentItem(buttonCommons, variables, platform, platformStyle),

    '.small': getSmallItem(buttonCommons, variables, platform, platformStyle),
    '.large': getLargeItem(buttonCommons, variables, platform, platformStyle),

    '.capitalize': {},
    '.onlyCenter': getOnlyCenterItem(buttonCommons, variables, platform, platformStyle),

    '.vertical': getVerticalItem(buttonCommons, variables, platform, platformStyle),

    'NativeBase.Text': getTextBase(variables, platform, platformStyle),
    'NativeBase.Icon': getIconBase(variables, platform, platformStyle),
    'NativeBase.IconNB': getIconNBBase(variables, platform, platformStyle),

    '.svgLeft': getSvgLeftItem(buttonCommons, variables, platform, platformStyle),
    '.iconLeft': getIconLeftItem(buttonCommons, variables, platform, platformStyle),
    '.iconRight': getIconRightItem(buttonCommons, variables, platform, platformStyle),
    '.picker': getPickerItem(buttonCommons, variables, platform, platformStyle),

    paddingVertical: variables.buttonPadding,
    backgroundColor: variables.btnPrimaryBg(),
    borderRadius: variables.borderRadiusBase,
    borderColor: variables.btnPrimaryBg(),
    borderWidth: null,
    height: 45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: platformStyle === 'material' ? variables.brandDark : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  return buttonTheme
}

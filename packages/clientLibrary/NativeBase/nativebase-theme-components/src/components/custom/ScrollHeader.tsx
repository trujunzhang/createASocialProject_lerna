import {
  getSpanItem,
  getHasSegmentItem,
  getHasSubtitleItem,
  getHasTabsItem,
  getNoLeftItem,
  getNoShadowItem,
  getTransparentItem,
  getSearchBarItem,
  getRoundedItem,
  getLeftBase,
  getBodyBase,
  getRightBase,
  getButtonBase
} from '../base/headerItems'

import { PixelRatio } from 'react-primitives'
import { themeVariables } from '@app/native-base-variables'
export const scrollHeaderTheme = (variables: themeVariables) => {
  const platformStyle = variables.platformStyle
  const platform = variables.platform
  const scrollHeaderTheme = {
    '.span': getSpanItem(variables, platform, platformStyle),
    '.hasSubtitle': getHasSubtitleItem(variables, platform, platformStyle),
    '.transparent': getTransparentItem(variables, platform, platformStyle),
    '.noShadow': getNoShadowItem(variables, platform, platformStyle),
    '.hasTabs': getHasTabsItem(variables, platform, platformStyle),
    '.hasSegment': getHasSegmentItem(variables, platform, platformStyle),
    '.noLeft': getNoLeftItem(variables, platform, platformStyle),

    'NativeBase.Button': getButtonBase(variables, platform, platformStyle),

    '.searchBar': getSearchBarItem(variables, platform, platformStyle),
    '.rounded': getRoundedItem(variables, platform, platformStyle),

    'NativeBase.Left': getLeftBase(variables, platform, platformStyle),
    'NativeBase.Body': getBodyBase(variables, platform, platformStyle),
    'NativeBase.Right': getRightBase(variables, platform, platformStyle),

    backgroundColor: variables.toolbarDefaultBg,
    flexDirection: 'row',
    // paddingHorizontal: 10,
    paddingLeft: platform === 'ios' && variables.platformStyle !== 'material' ? 6 : 10,
    paddingRight: 10,
    justifyContent: 'center',
    paddingTop: variables.toolbarPaddingTop,
    borderBottomWidth: platform === 'ios' ? 1 / PixelRatio.getPixelSizeForLayoutSize(1) : 0,
    borderBottomColor: variables.toolbarDefaultBorder,
    height: variables.toolbarHeight,
    elevation: 3,
    shadowColor: platformStyle === 'material' ? '#000' : undefined,
    shadowOffset: platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    top: 0,
    left: 0,
    right: 0
  }

  return scrollHeaderTheme
}

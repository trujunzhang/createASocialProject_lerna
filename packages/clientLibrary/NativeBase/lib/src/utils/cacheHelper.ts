import { View } from 'react-primitives'

import {
  getCachDict,
  CACHE_VECTOR_ICONS,
  CACHE_KEYBOARD_AWARE_SCROLL_VIEW,
  VectorIconsDictWithNull,
  VectorIconWithNull,
  IconVectorTypeMaterialIcons,
  IconVectorTypeIonicons
} from '@app/tools'

/**
 * Example:
 *  const VectorIcons: VectorIconWithNull = getMaterialIcons()
 */

export const getVectorIcon = (iconType): VectorIconWithNull => {
  const iconVectorVariables: VectorIconsDictWithNull = getCachDict(CACHE_VECTOR_ICONS)
  if (!!iconVectorVariables) {
    return iconVectorVariables[iconType]
  }
  return null
}

export const getIoniconsIcons = (): VectorIconWithNull => {
  const iconType = IconVectorTypeIonicons
  return getVectorIcon(iconType)
}
export const getMaterialIcons = (): VectorIconWithNull => {
  const iconType = IconVectorTypeMaterialIcons
  return getVectorIcon(iconType)
}

export const getKeyboardAwareScrollView = (): any => {
  // const keyboardAwareScrollView: VectorIconsDictWithNull = null
  const keyboardAwareScrollView: VectorIconsDictWithNull = getCachDict(
    CACHE_KEYBOARD_AWARE_SCROLL_VIEW
  )
  return keyboardAwareScrollView || View
}

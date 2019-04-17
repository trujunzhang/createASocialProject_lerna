import * as React from 'react'

import { ReactNative, RnTextStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Icon.js
 */
interface ThumbnailProps extends ReactNative.ImageProps {
  /**
   * Dimension of thumbnail.
   * Default: 30
   */
  size?: number
  /**
   * Represents shape of thumbnail.
   * By default thumbnail is circle in shape.
   */
  circular?: boolean
  /**
   * Represents shape of thumbnail.
   * By default thumbnail is circle in shape.
   */
  square?: boolean
  small?: boolean
  large?: boolean
}

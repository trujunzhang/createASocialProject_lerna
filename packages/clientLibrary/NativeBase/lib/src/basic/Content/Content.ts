import * as React from 'react'
import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Content.js
 */
export interface ContentProps {
  /**
   * The theme prop can be applied to any component of NativeBase.
   */
  refreshing?: boolean
  refreshControl?: object
  theme?: Object
  padder?: boolean
  disableKBDismissScroll?: boolean
  enableResetScrollToCoords?: boolean
  contentOffset?: Object
  scrollEnabled?: boolean
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  contentContainerStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  keyboardShouldPersistTaps?: string
  keyboardDismissMode?: string
}

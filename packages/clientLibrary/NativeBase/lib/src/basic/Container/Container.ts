import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Container.js
 */
export interface ContainerProps {
  /**
   * The theme prop can be applied to any component of NativeBase.
   */
  theme?: Object
  style?: RnViewStyleProp | Array<RnViewStyleProp>
}

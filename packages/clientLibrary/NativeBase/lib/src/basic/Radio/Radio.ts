import * as React from 'react'

import { ReactNative, RnTextStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget CheckBox.js
 */
export interface RadioProps extends ReactNative.TouchableOpacityProps {
  selected?: boolean
  selectedColor?: string
  // Others
  color?: any
}

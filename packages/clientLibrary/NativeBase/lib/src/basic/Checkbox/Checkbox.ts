import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget CheckBox.js
 */
export interface CheckBoxProps extends ReactNative.TouchableOpacityProps {
  checked?: boolean
  color?: string
}

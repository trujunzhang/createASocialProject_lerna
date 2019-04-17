import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget CardItem.js
 */
export interface CardItemProps extends ReactNative.TouchableOpacityProps {
  header?: boolean
  footer?: boolean
  cardBody?: boolean
  button?: boolean
  bordered?: boolean
  onPress?: () => void
  // Others
  first?: boolean
  last?: boolean
}

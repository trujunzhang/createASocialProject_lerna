import * as React from 'react'
import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface FabProps {
  active?: boolean
  direction?: 'down' | 'up' | 'left' | 'right'
  containerStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  onPress?: () => void
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  style?: RnViewStyleProp
}

import * as React from 'react'

import { ReactNative, RnViewStyleProp, Testable } from '@appUtils/rnCommonProps'

export interface ViewNBProps extends ReactNative.ViewProps, Testable {
  padder?: boolean
  name?: any
}

export type ViewProps = ViewNBProps

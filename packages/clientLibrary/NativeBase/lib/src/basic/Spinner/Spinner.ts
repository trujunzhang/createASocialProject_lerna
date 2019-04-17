import * as React from 'react'

import { ReactNative, RnTextStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Spinner.js
 */
export interface SpinnerProps extends ReactNative.ActivityIndicatorProps {
  inverse?: boolean
}

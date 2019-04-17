import {
  ActionSheetIOSStatic,
  ActionSheetIOSOptions,
  ShareActionSheetIOSOptions
} from '../../../typings'

import * as React from 'react'

export class ActionSheetIOS implements ActionSheetIOSStatic {
  showActionSheetWithOptions = (
    options: ActionSheetIOSOptions,
    callback: (buttonIndex: number) => void
  ) => {}

  showShareActionSheetWithOptions = (
    options: ShareActionSheetIOSOptions,
    failureCallback: (error: Error) => void,
    successCallback: (success: boolean, method: string) => void
  ) => {}
}

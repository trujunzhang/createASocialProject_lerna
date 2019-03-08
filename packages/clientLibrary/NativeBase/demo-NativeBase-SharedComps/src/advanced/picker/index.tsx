import { Platform } from 'react-primitives'

import { NHPickerAndroid } from './indexAndroid'
import { NHPickerIos } from './indexIos'

const NHPickerPage = Platform.OS === 'ios' ? NHPickerIos : NHPickerAndroid

export * from './picker-with-iconstyle'
export * from './regularPicker'
export * from './picker-with-icon'
export * from './placeholderPicker'
export * from './placeholderPickernote'
export * from './backButtonPicker'
export * from './picker-text-itemtext'
export * from './headerPicker'
export * from './headerStylePicker'
export * from './customHeaderPicker'

export { NHPickerPage }

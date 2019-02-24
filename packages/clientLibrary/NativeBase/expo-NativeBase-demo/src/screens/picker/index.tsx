import { Platform } from 'react-native'

import { NHPickerAndroid } from './indexAndroid'
import { NHPickerIos } from './indexIos'

const NHPickerPage = Platform.OS === 'ios' ? NHPickerIos : NHPickerAndroid

import PickerWithIconStyle from './picker-with-iconstyle'
import RegularPicker from './regularPicker'
import PickerWithIcon from './picker-with-icon'
import PlaceholderPicker from './placeholderPicker'
import PlaceholderPickerNote from './placeholderPickernote'
import BackButtonPicker from './backButtonPicker'
import PickerTextItemText from './picker-text-itemtext'
import HeaderPicker from './headerPicker'
import HeaderStylePicker from './headerStylePicker'
import CustomHeaderPicker from './customHeaderPicker'

export {
  NHPickerPage,
  PickerWithIconStyle,
  RegularPicker,
  PickerWithIcon,
  PlaceholderPicker,
  PlaceholderPickerNote,
  BackButtonPicker,
  PickerTextItemText,
  HeaderPicker,
  HeaderStylePicker,
  CustomHeaderPicker
}

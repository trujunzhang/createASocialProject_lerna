import { Platform } from 'react-native'

import { NHPickerAndroid } from './pickerAndroid'
import { ActionSheetNBIOS } from './pickerIos'

const ActionsheetPage = Platform.OS === 'ios' ? NHPickerAndroid : NHPickerAndroid

import { ActionSheetNB as RegularActionSheet } from './regular'
import { ActionSheetNB as IconActionSheet } from './icon'

export { ActionsheetPage, RegularActionSheet, IconActionSheet }

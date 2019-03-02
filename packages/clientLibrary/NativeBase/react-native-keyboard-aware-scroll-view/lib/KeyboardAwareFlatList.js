/* @flow */

import { FlatList } from 'react-primitives'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(FlatList)

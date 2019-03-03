
export * from './reactPrimitives'

// Type definitions for react-primitives 0.6
// Project: https://github.com/lelandrichardson/react-primitives
// Definitions by: Ahmed Ghoneim <https://github.com/aghoneim92>
//                 David Pett <https://github.com/davidpett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react'
import * as React from 'react'
import {
    TextInput as RNTextInput,
    Text as RNText,
    View as RNView,
    // Props
    TouchableOpacityProps,
    TouchableHighlightProps,
    PickerProps,
    PickerItemProps,
    TextInputProps,
    SwitchProps,
    ActivityIndicatorProps,
    ScrollViewProperties,
    ListViewProperties,
    ImageProps,
    ViewProps,
    TextProps,
    // styles
    StatusBarStyle,
    ViewStyle,
    TextStyle,
    ScaledSize,
} from 'react-native'

export interface SketchAppProps {
    name?: string
}

export class View extends React.Component<ViewProps & SketchAppProps> { }
export class Text extends React.Component<TextProps & SketchAppProps> { }
export class TextInput extends React.Component<TextInputProps & SketchAppProps> { }

export {
    // styles
    StatusBarStyle,
    ViewStyle,
    TextStyle,
    ScaledSize,
    // Props
    TouchableHighlightProps,
    PickerProps,
    PickerItemProps,
    TextInputProps,
    SwitchProps,
    ActivityIndicatorProps,
    TouchableOpacityProps,
    ScrollViewProperties,
    ListViewProperties,
    ImageProps,
    ViewProps,
    TextProps
}

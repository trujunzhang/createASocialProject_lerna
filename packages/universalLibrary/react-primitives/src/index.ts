import { ReactPrimitivesHelper, StyleSheet, Animated } from './reactPrimitives'

// So important here, directly export.
export {
    StyleSheet,
    Animated
}

import {
    // List
    KeyboardAwareScrollView,
    ScrollView,
    ListView,
    FlatList
} from './reactPrimitives'

export {
    // List
    KeyboardAwareScrollView,
    ScrollView,
    ListView,
    FlatList
}


import {
    // Dialog
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
} from './reactPrimitives'

export {
    // Dialog
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
}


import {
    // Touch
    PanResponder,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
} from './reactPrimitives'

export {
    // Touch
    PanResponder,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
}

import {
    IInjectionBaseModel,
    IInjectionAnimateModel,
    IInjectionPixelRatioModel,
    IInjectionSystemModel,
    IInjectionTextModel,
    IInjectionListModel,
    IInjectionDialogModel,
    IInjectionTouchModel
} from './models'

const {
    View,
    Image,
    isIphoneX,
} = ReactPrimitivesHelper as IInjectionBaseModel

export {
    View,
    Image,
    isIphoneX,
}

const {
    Easing,
} = ReactPrimitivesHelper as IInjectionAnimateModel

export {
    Easing
}


const {
    PixelRatio
} = ReactPrimitivesHelper as IInjectionPixelRatioModel

export {
    PixelRatio
}

const {
    Platform,
    StatusBar,
    Dimensions
} = ReactPrimitivesHelper as IInjectionSystemModel

export {
    Platform,
    StatusBar,
    Dimensions
}


const {
    TextInput,
    Text
} = ReactPrimitivesHelper as IInjectionTextModel

export {
    TextInput,
    Text
}



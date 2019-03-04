import { ReactPrimitives, StyleSheet, Animated } from './reactPrimitives'

// So important here, directly export.
export {
    StyleSheet,
    Animated
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
} = ReactPrimitives as IInjectionBaseModel

export {
    View,
    Image,
    isIphoneX,
}

const {
    Easing,
    Animated
} = ReactPrimitives as IInjectionAnimateModel

export {
    Easing
}


const {
    PixelRatio
} = ReactPrimitives as IInjectionPixelRatioModel

export {
    PixelRatio
}

const {
    Platform,
    StatusBar,
    Dimensions
} = ReactPrimitives as IInjectionSystemModel

export {
    Platform,
    StatusBar,
    Dimensions
}


const {
    TextInput,
    Text
} = ReactPrimitives as IInjectionTextModel

export {
    TextInput,
    Text
}



const {
    KeyboardAwareScrollView,
    ScrollView,
    ListView,
    FlatList
} = ReactPrimitives as IInjectionListModel

export {
    KeyboardAwareScrollView,
    ScrollView,
    ListView,
    FlatList
}



const {
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
} = ReactPrimitives as IInjectionDialogModel

export {
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
}


const {
    PanResponder,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Touchable
} = ReactPrimitives as IInjectionTouchModel

export {
    PanResponder,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Touchable
}
import { ReactPrimitivesHelper, StyleSheet, Animated } from './reactPrimitives'

// So important here, directly export.
export {
    StyleSheet,
    Animated
}

import {
    ScrollView,
    ListView,
    FlatList
} from './reactPrimitives'

export {
    ScrollView,
    ListView,
    FlatList
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



const {
    KeyboardAwareScrollView,
} = ReactPrimitivesHelper as IInjectionListModel

export {
    KeyboardAwareScrollView,
}


const {
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
} = ReactPrimitivesHelper as IInjectionDialogModel

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
} = ReactPrimitivesHelper as IInjectionTouchModel

export {
    PanResponder,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Touchable
}
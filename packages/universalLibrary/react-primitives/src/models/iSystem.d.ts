
import {
    Platform,
    PlatformOSType as RNPlatformOSType,
    StatusBar,
    Dimensions,
    PixelRatio
} from 'react-native'

// react-primitives also supports react-sketchapp and react-vr as platforms
export type PlatformOSType = RNPlatformOSType | 'sketch' | 'vr'
export interface PlatformStatic {
    OS: PlatformOSType
    Version: number | string
    select<T>(specifics: { [platform in PlatformOSType | 'default']?: T }): T
}

// export type Platform = PlatformStatic
// export interface Platform extends PlatformStatic {

// }

export {
    Platform,
    StatusBar,
    Dimensions,
    PixelRatio
}
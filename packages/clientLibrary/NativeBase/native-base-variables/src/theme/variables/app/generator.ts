import { themeVariables, themeVariablesWithIconVector, IIconVectorVariables } from '../../../types'

import {
    baseVariables,
    accordionVariables,
    androidVariables,
    badgeVariables,
    buttonVariables,
    buttonColorVariables,
    buttonFuncVariables,
    cardVariables,
    checkBoxVariables,
    containerVariables,
    datePickerVariables,
    fontVariables,
    fontFuncVariables,
    footerVariables,
    footerTabVariables,
    headerVariables,
    headerFuncVariables,
    iconVariables,
    inputGroupVariables,
    inputGroupFuncVariables,
    lineHeightVariables,
    listVariables,
    otherVariables,
    pageScrollVariables,
    parallaxVariables,
    iPhoneXSafeAreaVariables,
    progressBarVariables,
    radioButtonVariables,
    radioButtonFuncVariables,
    segmentVariables,
    spinnerVariables,
    tabVariables,
    tabsVariables,
    textVariables,
    textFuncVariables,
    titleVariables
} from './theme'

export const appThemeVariables: themeVariables = {
    ...baseVariables,
    ...accordionVariables,
    ...androidVariables,
    ...badgeVariables,
    ...buttonVariables,
    ...buttonColorVariables,
    ...buttonFuncVariables,
    ...cardVariables,
    ...checkBoxVariables,
    ...containerVariables,
    ...datePickerVariables,
    ...fontVariables,
    ...fontFuncVariables,
    ...footerVariables,
    ...footerTabVariables,
    ...headerVariables,
    ...headerFuncVariables,
    ...iconVariables,
    ...inputGroupVariables,
    ...inputGroupFuncVariables,
    ...lineHeightVariables,
    ...listVariables,
    ...otherVariables,
    ...pageScrollVariables,
    ...parallaxVariables,
    ...iPhoneXSafeAreaVariables,
    ...progressBarVariables,
    ...radioButtonVariables,
    ...radioButtonFuncVariables,
    ...segmentVariables,
    ...spinnerVariables,
    ...tabVariables,
    ...tabsVariables,
    ...textVariables,
    ...textFuncVariables,
    ...titleVariables
}

export const generatorForAppThemeVariables = (iconVectorVariable: IIconVectorVariables): themeVariablesWithIconVector => {
    const nextAppThemeVariables = appThemeVariables
    return Object.assign(nextAppThemeVariables, iconVectorVariable)
}
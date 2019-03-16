
import {
    vectorIconSizes
} from './iconSizeConst'

const iconsRatios = {
    'ios-arrow-back': {
        width: 57,
        height: 100
    }
}

export const IonIconFixSize = (size: number, name: string) => {
    const iconSize = vectorIconSizes['ionicons']
    const fontSize = size * 100 * iconSize.fontSize / iconSize.width / 100
    let height = fontSize
    let width = fontSize
    if (Object.keys(iconsRatios).indexOf(name) != -1) {
        const ration = iconsRatios[name]
        width = height * ration.width / ration.height
    }

    return {
        width,
        height
    }
}
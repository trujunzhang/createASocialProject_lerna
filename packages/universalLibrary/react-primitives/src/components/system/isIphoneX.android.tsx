import { Dimensions, Platform as RNPlatform } from 'react-native';

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    const Platform: any = RNPlatform
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}


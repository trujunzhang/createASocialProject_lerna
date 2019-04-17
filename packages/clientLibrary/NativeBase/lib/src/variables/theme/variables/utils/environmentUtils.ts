import { Dimensions, Platform, View } from 'react-primitives'

import { IconVectorTypeMaterialIcons, IconVectorTypeIonicons } from '@app/tools'

export const deviceHeight = !!Dimensions ? Dimensions.get('window').height : 400
export const deviceWidth = !!Dimensions ? Dimensions.get('window').width : 400

// TODO:DJZHANG
export const platform = Platform.OS

export const AppVectorIcons = {
  platformOS: IconVectorTypeIonicons,
  Ionicons: IconVectorTypeIonicons,
  MaterialIcons: IconVectorTypeMaterialIcons
}

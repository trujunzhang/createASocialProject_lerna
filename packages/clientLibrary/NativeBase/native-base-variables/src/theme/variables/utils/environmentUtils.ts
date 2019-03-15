import { Dimensions, Platform } from 'react-primitives'

export const deviceHeight = !!Dimensions ? Dimensions.get('window').height : 400
export const deviceWidth = !!Dimensions ? Dimensions.get('window').width : 400

// TODO:DJZHANG
export const platform = Platform.OS

export const AppVectorIcons = {
  platformOS: 'Ionicons',
  Ionicons: 'Ionicons',
  MaterialIcons: 'MaterialIcons'
}

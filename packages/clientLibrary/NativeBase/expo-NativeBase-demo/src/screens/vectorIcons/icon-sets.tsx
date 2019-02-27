import { pipe, toPairs, groupBy, map } from 'ramda'

import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  // FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial
} from '@expo/vector-icons';

// import AntD from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo'
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Foundation from 'react-native-vector-icons/Foundation'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Octicons from 'react-native-vector-icons/Octicons'
// import Zocial from 'react-native-vector-icons/Zocial'



import {
  AntDGlyphs,
  EntypoGlyphs,
  EvilIconsGlyphs,
  FeatherGlyphs,
  FontAwesomeGlyphs,
  // FontAwesome5Glyphs,
  FoundationGlyphs,
  IoniconsGlyphs,
  MaterialIconsGlyphs,
  MaterialCommunityIconsGlyphs,
  OcticonsGlyphs,
  ZocialGlyphs
} from './vectorIcons'

const GLYPH_MAPS = {
  AntDesign: AntDGlyphs,
  Entypo: EntypoGlyphs,
  EvilIcons: EvilIconsGlyphs,
  Feather: FeatherGlyphs,
  FontAwesome: FontAwesomeGlyphs,
  // FontAwesome5: FontAwesome5Glyphs,
  Foundation: FoundationGlyphs,
  Ionicons: IoniconsGlyphs,
  MaterialIcons: MaterialIconsGlyphs,
  MaterialCommunityIcons: MaterialCommunityIconsGlyphs,
  Octicons: OcticonsGlyphs,
  Zocial: ZocialGlyphs
}

const ICON_SETS = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  // FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial
}

// debugger
// console.log('GLYPH_MAPS: ', GLYPH_MAPS)

const groupGlyphNames = (glyphMap: any) =>
  Object.values(groupBy((name) => glyphMap[name])(Object.keys(glyphMap)))

const transformIconSets = pipe(
  toPairs,
  map(([name, component]) => ({
    name,
    component,
    glyphNames: groupGlyphNames(GLYPH_MAPS[name])
  }))
)

export default transformIconSets(ICON_SETS)

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
} from '@expo/vector-icons'

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

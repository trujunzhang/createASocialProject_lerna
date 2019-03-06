const cacheGlyphs: any = {}
const cacheSvgDatas: any = {}

/**
 * "_glyph-name": "uniE000",
 *
 */
const adjustGlyphName = (iconName: string) => {}

const getSvgData = (currentGlyphs: any[], iconName: string) => {
  if (Object.keys(cacheSvgDatas).indexOf(iconName) !== -1) {
    return cacheSvgDatas[iconName]
  }
  const keys = Object.keys(currentGlyphs)
  const index = keys.indexOf(iconName)
  const svgData = currentGlyphs[index]
  const pathData = svgData['_d']
}

export const getSvgDataByIconName = (iconType: string, iconName: string, svgJsonRoot: any) => {
  if (Object.keys(cacheGlyphs).indexOf(iconType) === -1) {
    const glyphs = svgJsonRoot['svg']['defs']['font']['glyph']
    cacheGlyphs[iconType] = glyphs
  }

  const currentGlyphs = cacheGlyphs[iconType]
}

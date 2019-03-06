const cacheGlyphs: any = {}
const cacheSvgDatas: any = {}

/**
 * "_glyph-name": "uniE000",
 *
 */
const getSvgPathData = (currentGlyphs: any[], iconName: string): string | null => {
  if (Object.keys(cacheSvgDatas).indexOf(iconName) !== -1) {
    return cacheSvgDatas[iconName]
  }

  const svgObject = currentGlyphs.find((o) => o['_unicode'] === iconName)

  // console.log('resultObject :  ', JSON.stringify(resultObject))

  if (!!svgObject) {
    const pathData = svgObject['_d']
    cacheSvgDatas[iconName] = pathData
    return pathData
  }

  return null
}

export const getSvgDataByIconName = (
  svgJsonRoot: any,
  iconType: string,
  iconName: string
): string | null => {
  if (Object.keys(cacheGlyphs).indexOf(iconType) === -1) {
    const glyphs = svgJsonRoot['svg']['defs']['font']['glyph']
    cacheGlyphs[iconType] = glyphs
  }

  const currentGlyphs = cacheGlyphs[iconType]
  return getSvgPathData(currentGlyphs, iconName)
}

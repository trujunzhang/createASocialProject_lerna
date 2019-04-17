import glob from 'glob-promise'
import path from 'path'
import { DIST } from './constants'

export const getIconFiles = async (content) => {
  return glob(content.files)
}

/**
 * iconId: fontAwesome
 * @param iconId
 */
export const getAllPath = (iconId) => {
  // './src/svgs/fontAwesome'
  const modulePath = path.resolve(DIST, iconId)
  // './src/svgs/fontAwesome/icons'
  const moduleIconPath = path.resolve(modulePath, 'icons/')

  return {
    modulePath,
    moduleIconPath
  }
}

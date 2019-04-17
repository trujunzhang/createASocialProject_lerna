import { promisify } from 'util'
import fs from 'fs'
import { getAllPath } from '../../utils/filesHelper'
import path from 'path'

const IndexFilesSet = {}

const appendFile = promisify(fs.appendFile)

const existIndexFilesSet = (iconId, firstLetter) => {
  const keyName = iconId + '_' + firstLetter
  const keys = Object.keys(IndexFilesSet)
  if (keys.indexOf(keyName) !== -1) {
    return true
  }

  IndexFilesSet[keyName] = 'true'
  return false
}

export const writeIndexFile = async (iconId, firstLetter) => {
  if (existIndexFilesSet(iconId, firstLetter)) {
    return
  }

  const {
    // './src/svgs/fontAwesome'
    modulePath,
    // './src/svgs/fontAwesome/icons'
    moduleIconPath
  } = getAllPath(iconId)

  const iconIndexFilePath = path.resolve(modulePath, 'index.ts')

  const exportString = `export * from './icons/${firstLetter}'\r\n`
  await appendFile(iconIndexFilePath, exportString, 'utf8')
}

import { promisify } from 'util'
import fs from 'fs'
import { getAllPath } from '../../utils/filesHelper'
import path from 'path'

const InportFilesSet = {}

const appendFile = promisify(fs.appendFile)

const existInportFilesSet = (iconId, fileName) => {
  const keyName = iconId + '_' + fileName
  const keys = Object.keys(InportFilesSet)
  if (keys.indexOf(keyName) !== -1) {
    return true
  }

  InportFilesSet[keyName] = 'true'
  return false
}

export const writeImportHeader = async (iconId, fileName) => {
  if (existInportFilesSet(iconId, fileName)) {
    return
  }

  const {
    // './src/svgs/fontAwesome'
    modulePath,
    // './src/svgs/fontAwesome/icons'
    moduleIconPath
  } = getAllPath(iconId)

  const iconFilePath = path.resolve(moduleIconPath, fileName)

  const importString =
    "// THIS FILE IS AUTO GENERATED\nimport { GenIcon } from '../../../lib/iconBase';\n"
  await appendFile(iconFilePath, importString, 'utf8')
}

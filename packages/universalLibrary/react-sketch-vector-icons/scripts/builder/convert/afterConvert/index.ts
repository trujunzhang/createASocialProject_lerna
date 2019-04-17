import path from 'path'
import { promisify } from 'util'
import fs from 'fs'
import { getAllPath } from '../../utils/filesHelper'

const appendFile = promisify(fs.appendFile)
export const writeComRes = async (iconId, fileName, comRes) => {
  const {
    // './src/svgs/fontAwesome'
    modulePath,
    // './src/svgs/fontAwesome/icons'
    moduleIconPath
  } = getAllPath(iconId)

  const iconFilePath = path.resolve(moduleIconPath, fileName)

  await appendFile(iconFilePath, comRes, 'utf8')
}

import { promisify } from 'util'
import fs from 'fs'
import { DIST, icons } from '../utils/constants'
import { getAllPath } from '../utils/filesHelper'

const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index) {
      var curPath = path + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

export const dirInit = async () => {
  const ignore = (err) => {
    if (err.code === 'EEXIST') return
    throw err
  }

  const mkdir = promisify(fs.mkdir)
  const existdir = promisify(fs.exists)
  // './src/svgs'
  await mkdir(DIST).catch(ignore)

  for (const icon of icons) {
    const {
      // './src/svgs/fontAwesome'
      modulePath,
      // './src/svgs/fontAwesome/icons'
      moduleIconPath
    } = getAllPath(icon.id)
    let exist = await existdir(modulePath).catch(ignore)
    if (exist === true) {
      await deleteFolderRecursive(modulePath)
    }
    await mkdir(modulePath).catch(ignore)

    exist = await existdir(moduleIconPath).catch(ignore)
    if (exist === true) {
      await deleteFolderRecursive(moduleIconPath)
    }
    await mkdir(moduleIconPath).catch(ignore)
  }
}

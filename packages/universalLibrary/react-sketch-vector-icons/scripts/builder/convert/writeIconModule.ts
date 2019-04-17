import { promisify } from 'util'
import fs from 'fs'
import { getIconFiles } from '../utils/filesHelper'
import path from 'path'

import { generateIconRow } from './generateIconRow'
import { convertIconData } from './convertIconData'
import { getIconName } from '../utils/iconNameHelper'
import { writeComRes } from './afterConvert'
import { writeIndexFile } from './afterConvert/writeIndexFile'
import { writeImportHeader } from './afterConvert/writeImportHeader'

export const writeIconModule = async (icon) => {
  const exists = new Set() // for remove duplicate
  for (const content of icon.contents) {
    const files = await getIconFiles(content)
    const iconId = icon.id

    for (const file of files) {
      const svgStr = await promisify(fs.readFile)(file, 'utf8')

      const iconData = await convertIconData(svgStr)

      const rawName = path.basename(file, path.extname(file))
      const { name, firstLetter, fileName } = getIconName(content, iconId, rawName)

      if (exists.has(name)) {
        continue
      }
      exists.add(name)

      // write like: module/fa/data.mjs
      const comRes = generateIconRow(icon, name, iconData, 'module')

      await writeImportHeader(iconId, fileName)
      await writeComRes(iconId, fileName, comRes)
      await writeIndexFile(iconId, firstLetter)
      exists.add(file)
    }
  }
}

import fs from 'fs'
import path from 'path'

const rootDir = path.join(__dirname, '..')

export const generatedIconHome = `${rootDir}/src/generate`

if (!fs.existsSync(generatedIconHome)) {
  fs.mkdirSync(generatedIconHome)
}

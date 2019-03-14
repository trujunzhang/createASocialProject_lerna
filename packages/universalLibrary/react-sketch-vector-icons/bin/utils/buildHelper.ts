import fs from 'fs'
import path from 'path'
import glob from 'glob'
import { generatedIconHome } from './buildConst'
import { initialTypeDefinitions } from './reactTypes'

export interface IVectorIcconsParams {
  svgPath: string
  iconType: string
}

export interface ISvgModel {
  svgPath: string
  svgData: string
  svgId: string
  location: string
  tsxFileName: string
}

export class BuildHelper {
  private params: IVectorIcconsParams
  private generatedIconRoot: string

  constructor(params: IVectorIcconsParams) {
    const { iconType } = params
    this.params = params
    this.generatedIconRoot = `${generatedIconHome}/${iconType}`

    this.readyBuild()
  }

  private readyBuild() {
    // Home Root
    if (!fs.existsSync(generatedIconHome)) {
      fs.mkdirSync(generatedIconHome)
    }
    // IconType Root
    if (!fs.existsSync(this.generatedIconRoot)) {
      fs.mkdirSync(this.generatedIconRoot)
    }
    // Icon Folder
    if (!fs.existsSync(this.generatedIconPath)) {
      fs.mkdirSync(this.generatedIconPath)
    }
  }

  get svgPath() {
    return this.params.svgPath
  }

  get generatedIconPath() {
    return `${this.generatedIconRoot}/icons`
  }

  get mainTSPath() {
    return `${this.generatedIconRoot}/index.ts`
  }

  get mainTypingsPath() {
    return `${this.generatedIconRoot}/index.d.ts`
  }

  buildAllSvgs(buildSingleSvgFunc: (model: ISvgModel) => any) {
    glob(this.svgPath, (err, icons) => {
      fs.writeFileSync(this.mainTSPath, '', 'utf-8')
      fs.writeFileSync(this.mainTypingsPath, initialTypeDefinitions, 'utf-8')

      icons.map((iconPath: string, index: number) => {
        const svg = fs.readFileSync(iconPath, 'utf-8')
        const id = path.basename(iconPath, '.svg')
        const fileName = path.basename(iconPath).replace('.svg', '.tsx')

        const location = path.join(this.generatedIconPath, fileName)
        const model: ISvgModel = {
          svgPath: iconPath,
          svgData: svg,
          svgId: id,
          location,
          tsxFileName: fileName
        }

        buildSingleSvgFunc(model)
      })
    })
  }
}

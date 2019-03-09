import fs from 'fs'
import { generatedIconHome } from './buildConst'

export interface IVectorIcconsParams {
  svgPath: string
  iconType: string
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
}

import fs from 'fs'
import path from 'path'
import glob from 'glob'
import prettier from 'prettier'
import { generatedIconHome } from './buildConst'

export interface IVectorIcconsParams {
  svgPath: string
  iconType: string
}

export interface ISvgFileModel {
  iconName: string
  svgData: string
  location: string
}

export type GetSingleSvgElement = (model: ISvgFileModel) => any
export type GetComponentName = (model: ISvgFileModel) => any

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

  private onFetchedSvgList = (
    initialTypeDefinitions: string,
    getSingleSvgElement: GetSingleSvgElement,
    getComponentName: GetComponentName,
    err, icons) => {
    fs.writeFileSync(this.mainTSPath, '', 'utf-8')
    fs.writeFileSync(this.mainTypingsPath, initialTypeDefinitions, 'utf-8')

    icons.map((iconPath: string, index: number) => {
      const svg = fs.readFileSync(iconPath, 'utf-8')
      const iconName = path.basename(iconPath, '.svg')
      const fileName = path.basename(iconPath).replace('.svg', '.tsx')

      const location = path.join(this.generatedIconPath, fileName)
      const model: ISvgFileModel = {
        svgData: svg,
        iconName,
        location,
      }

      const element = getSingleSvgElement(model)

      const component = prettier.format(element, {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        parser: 'flow'
      })

      const fixedComponent = this.fixedComponent(component)

      fs.writeFileSync(location, fixedComponent, 'utf-8')

      const exportString = `export * from './icons/${iconName}'\r\n`
      fs.appendFileSync(this.mainTSPath, exportString, 'utf-8')

      const componentName = getComponentName(model)
      const exportTypeString = `export const ${componentName}: Icon\n`
      fs.appendFileSync(this.mainTypingsPath, exportTypeString, 'utf-8')
    })
  }

  buildSvgsFromFiles(
    initialTypeDefinitions: string,
    getSingleSvgElement: GetSingleSvgElement,
    getComponentName: GetComponentName
  ) {
    glob(this.svgPath, (err, icons) => {
      this.onFetchedSvgList(
        initialTypeDefinitions,
        getSingleSvgElement,
        getComponentName,
        err,
        icons
      )
    })
  }

  buildSvgsFromObjects(
    initialTypeDefinitions: string,
    getSingleSvgElement: GetSingleSvgElement,
    getComponentName: GetComponentName
  ) {
    glob(this.svgPath, (err, icons) => {
      this.onFetchedSvgList(
        initialTypeDefinitions,
        getSingleSvgElement, getComponentName,
        err,
        icons
      )
    })
  }

  fixedComponent(component: string) {
    const fixedComponent = component
      .replace(/<path/g, '<svg.Path')
      .replace(/<circle/g, '<svg.Circle')
      .replace(/<polyline/g, '<svg.Polyline')
      .replace(/<rect/g, '<svg.Rect')
      .replace(/<line/g, '<svg.Line')
    return fixedComponent
  }

}

import fs from 'fs'
import { generatedIconHome } from '../buildConst'

export interface IVectorIcconsParams {
    svgPath: string
    iconType: string
}

export class BuildHelper {
    private params: IVectorIcconsParams
    private generatedIconRoot: string

    constructor(params: IVectorIcconsParams) {
        const {
            iconType
        } = params
        this.params = params
        const generatedIconRoot = `${generatedIconHome}/${iconType}`

        if (!fs.existsSync(generatedIconRoot)) {
            fs.mkdirSync(generatedIconRoot)
        }

        if (!fs.existsSync(this.generatedIconPath)) {
            fs.mkdirSync(this.generatedIconPath)
        }

        this.generatedIconRoot = generatedIconRoot
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
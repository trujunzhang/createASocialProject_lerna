// import * as JsonData from '../components/Header'
import * as path from 'path'
import * as fs from 'fs'
import * as esprima from 'esprima'
import { Program } from 'esprima'

import { rewriteAst } from './utils/rewrite'
import { VariableNodeFetcher } from './parse/getVariableNode'

// file path
const rootDir = path.resolve(__dirname, '../')
// const DIST = path.resolve(rootDir, './components/Header.js')
const DIST = path.resolve(rootDir, './components/Fab.js')

const analyzeCode = (code) => {
  const script: Program = esprima.parseScript(code)
  const node = new VariableNodeFetcher(script).parse().end()
  // const func = script.body[4]
  // rewriteAst()
  debugger
}

const codeTemp = `
const headerTheme = {
     '.span': {
     height: 128,
     'NativeBase.Left': {
       alignSelf: 'flex-start'
     }
    }
   }
`

async function main() {
  try {
    const code = fs.readFileSync(DIST, 'utf8')

    // analyzeCode(code as any)
    analyzeCode(`${code}`)

    debugger

    // const parse : any= ((esprima as any).parse as any)
    // let ast = parse (tsData)

    // const keys = Object.keys(JsonData)
    //  console.log('keys: ',keys[0])
    console.log('done')
  } catch (e) {
    console.error(e)
  }
}

main()

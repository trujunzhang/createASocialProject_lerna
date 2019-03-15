const makeTitles = require('./make-titles')
const makeTypings = require('./make-typings')
const readSvgFiles = require('./read-svg-files')
const fs = require('fs')
const uppercamelcase = require('uppercamelcase')
const { camelize, ensurePath, distWrite, iconWrite, formatDate } = require('./utils')
const { IDX_IOS, IDX_MD, PREFIX, GENERATOR_FOLDER, ICON_FOLDER, ICON_PATH, DIST_FOLDER, mainTSPath } = require('./constants')

const REP_TAG = PREFIX.slice(0, -1) + ' {...props}>\n<svg.Text>{iconTitle}</svg.Text>'

// ensurePath(DIST_FOLDER)
ensurePath(GENERATOR_FOLDER)
ensurePath(ICON_PATH)

if (!fs.existsSync(ICON_PATH)) {
  fs.mkdirSync(ICON_PATH)
}

/**
 * @typedef {{ [k: string]: string | [string, string] }} SvgPathInfo
 * @typedef {(e: string) => boolean} FilterFn
 */

const fixedComponent = (component) => {
  const fixedComponent = component
    .replace(/<path/g, '<svg.Path')
    .replace(/<circle/g, '<svg.Circle')
    .replace(/<polyline/g, '<svg.Polyline')
    .replace(/<rect/g, '<svg.Rect')
    .replace(/<line/g, '<svg.Line')
    .replace(/<title/g, '<svg.Text')
    .replace(/title>/g, 'svg.Text>')
  return fixedComponent
}


const getComponentName = (iconName) => {
  const componentName = uppercamelcase(iconName)
  return componentName
}

/**
 * Take care of icons with multiple paths, must not close the `<svg>` tag
 * @param {string} name
 * @param {string | string[]} item
 */
const makeIcon = (name, item) => {
  const gTag = `<svg.G className="ion-${name}">`

  if (typeof item === 'string') {
    return `\n${REP_TAG}\n${gTag}\n${item}\n</svg.G>`
  }

  const ios = item[IDX_IOS].replace(/>\s+</g, '')
  const md = item[IDX_MD].replace(/>\s+</g, '')

  if (~ios.indexOf('><') || ~md.indexOf('><')) {
    return `
  ${REP_TAG}
  {ios
  ? ${gTag}${fixedComponent(ios)}</svg.G>
  : ${gTag}${fixedComponent(md)}</svg.G>}`
  }

  return `
  ${REP_TAG}
  ${gTag}{ios
  ? ${ios}
  : ${md}
  }</svg.G>`
}

/**
 * Make a JSX component
 * @param {string} name
 * @param {string | [string, string]} item
 */
const createTSX = (name, item) => {
  const temp = camelize(name)
  const type = `import { SVGIcon } from '../index.d'
declare const ${temp}: SVGIcon
export default ${temp}
`
  // iconWrite(`${name}.d.ts`, type)

  const componentName = getComponentName(name)

  const parm = typeof item === 'string' ? '' : ', ios?: boolean'
  const icon = `import * as React from 'react'
  import { Svg as svg } from 'react-sketchapp'

export const ${componentName} = (props: object, iconTitle: string${parm}) =>${makeIcon(name, item)}</svg>
`
  iconWrite(`${name}.tsx`, icon)
}

/**
 * Creates an export of icons
 * @param {string} name
 * @param {string[]} icons
 * @param {FilterFn} filter
 */
const makeBundle = (name, icons, filter) => {
  icons = icons.filter(filter)
  const src = ICON_FOLDER
  const exp = icons.map((e) => `  '${e}': require('../${src}/${e}').default,`).join('\n')
  const dts = icons.map((e) => `  '${e}': SVGIcon`).join('\n')

  const text = `"use strict";
/*eslint-disable*/
/**
 * Bundle of ${name} icons.
 * Date: ${formatDate()}
 */
Object.defineProperty(exports, "__esModule", { value: true })
exports.default = {
${exp}
}
`
  const type = `import { SVGIcon } from '..'
export default ${name}Bundle
declare const ${name}Bundle: {
${dts}
}
`
  distWrite(`${name}.d.ts`, type)
  distWrite(`${name}.js`, text)
}

/**
 * @param {SvgPathInfo} info
 * @param {[number, number]} count
 */
const writeFiles = (info, count) => {
  const names = Object.keys(info)

  names.sort().forEach((name) => {
    const item = info[name]

    // check if we have both formats
    if (Array.isArray(item) && !(item[0] && item[1])) {
      throw new Error(`"${name}" has no both formats!`)
    }

    // create component for this icon
    createTSX(name, item)

    const exportString = `export * from './icons/${name}'\r\n`.replace('\n\n', '\n')
    fs.appendFileSync(mainTSPath, exportString, 'utf-8')
  })

  makeTitles(names)
  makeTypings(names, count)
  makeBundle('all', names, () => true)
  makeBundle('logos', names, (e) => e.startsWith('logo-'))
  makeBundle('generic', names, (e) => !e.startsWith('logo-'))
}

/**
 * Read the whole ionicons "svg" folder
 * @param {string} inDir
 */
const buildAll = () => {
  const result = readSvgFiles()
  writeFiles(result.info, result.count)
}

buildAll()

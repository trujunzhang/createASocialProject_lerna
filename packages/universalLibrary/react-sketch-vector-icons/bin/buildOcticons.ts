import fs from 'fs'
import glob from 'glob'
import camelcase from 'camelcase'
import uppercamelcase from 'uppercamelcase'
import path from 'path'
import cheerio from 'cheerio'
import prettier from 'prettier'

const rootDir = path.join(__dirname, '..')

import { BuildHelper, ISvgFileModel } from './utils'

const buildHelper = new BuildHelper({
  svgPath: `${rootDir}/node_modules/octicons/build/svg/**.svg`,
  iconType: 'octicons'
})

import octicons from 'octicons'

const SUFFIX = 'Icon'

Object.getOwnPropertyNames(octicons).forEach((iconName) => {
  let { options, path: svgContents } = octicons[iconName]
  const { width, height, viewBox, class: className, 'aria-hidden': ariaHidden } = options

  svgContents = svgContents.replace(/fill-rule="/g, 'fillRule="')

  const componentName = `${uppercamelcase(iconName)}${SUFFIX}`

  const element = `
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Svg as svg } from 'react-sketchapp';

const CLASS_NAME = '${className}'
export const ${componentName} = (props) => {
  let defaults: any= {
    height: ${height},
    width: ${width},
    viewBox: '${viewBox}',
    'aria-hidden': ${ariaHidden}
  }

   let {className, size} = props
    if (className) {
      className = CLASS_NAME + ' ' + className
    } else {
      className = CLASS_NAME
    }

    if (size === 'mega') {
      defaults.height *= 2
      defaults.width *= 2
    }

    return (
      <svg {...defaults} {...props} className={className}>
        ${svgContents}
      </svg>
    )
}
${componentName}.propTypes = {
  className: PropTypes.string
}

`

  const component = prettier.format(element, {
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    parser: 'flow'
  })
  const location = path.join(buildHelper.generatedIconPath, `${iconName}.tsx`)

  const fixedComponent = buildHelper.fixedComponent(component)
  fs.writeFileSync(location, fixedComponent, 'utf-8')

  const exportString = `export * from './icons/${iconName}'\r\n`.replace('\n\n', '\n')
  fs.appendFileSync(buildHelper.mainTSPath, exportString, 'utf-8')

  const exportTypeString = `export const ${componentName}: Icon\n`
  fs.appendFileSync(buildHelper.mainTypingsPath, exportTypeString, 'utf-8')
})

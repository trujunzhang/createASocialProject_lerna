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

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  className?: string;
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`
import octicons from 'octicons'

const SUFFIX = 'Icon'

const getComponentName = (model: ISvgFileModel) => {
  const { iconName } = model
  const componentName = `${uppercamelcase(iconName)}${SUFFIX}`
  return componentName
}

const getSingleSvgElement = (model: ISvgFileModel) => {
  const { iconName } = model
  let { options, path: svgContents } = octicons[iconName]
  const { width, height, viewBox, class: className, 'aria-hidden': ariaHidden } = options

  svgContents = svgContents.replace(/fill-rule="/g, 'fillRule="')

  const componentName = getComponentName(model)

  return `
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

}

buildHelper.buildSvgsFromObjects(initialTypeDefinitions, octicons, getSingleSvgElement, getComponentName)
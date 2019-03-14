import fs from 'fs'
import glob from 'glob'
import camelcase from 'camelcase'
import uppercamelcase from 'uppercamelcase'
import path from 'path'
import cheerio from 'cheerio'
import prettier from 'prettier'

const rootDir = path.join(__dirname, '..')

import { BuildHelper, ISvgFileModel } from './utils'

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`

const buildHelper = new BuildHelper({
  svgPath: `${rootDir}/node_modules/feather-icons/dist/icons/**.svg`,
  iconType: 'feather'
})

const buildSingleSvgFunc = (model: ISvgFileModel) => {
  const { svgPath, svgData: svg, iconName, location, tsxFileName: fileName } = model
  const componentName = iconName === 'github' ? 'GitHub' : uppercamelcase(iconName)
  const $ = cheerio.load(svg, {
    xmlMode: true
  })

  $('*').each((index, el) => {
    Object.keys(el.attribs).forEach((x) => {
      if (x.includes('-')) {
        $(el)
          .attr(camelcase(x), el.attribs[x])
          .removeAttr(x)
      }
      if (x === 'stroke') {
        $(el).attr(x, 'currentColor')
      }
    })

    if (el.name === 'svg') {
      $(el).attr('otherProps', '...')
    }
  })

  const element = `
      import * as React from 'react';
      import * as PropTypes from 'prop-types';
      import { Svg as svg } from 'react-sketchapp';

      export const ${componentName} = (props) => {
        const { color, size, ...otherProps } = props;
        return (
          ${$('svg')
      .toString()
      .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
      .replace('width="24"', 'width={size}')
      .replace('height="24"', 'height={size}')
      .replace('otherProps="..."', '{...otherProps}')}
        )
      };

      ${componentName}.propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
      }

      ${componentName}.defaultProps = {
        color: 'currentColor',
        size: '24',
      }
    `

  const component = prettier.format(element, {
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    parser: 'flow'
  })

  const fixedComponent = buildHelper.fixedComponent(component)

  fs.writeFileSync(location, fixedComponent, 'utf-8')

  const exportString = `export * from './icons/${iconName}'\r\n`
  fs.appendFileSync(buildHelper.mainTSPath, exportString, 'utf-8')

  const exportTypeString = `export const ${componentName}: Icon\n`
  fs.appendFileSync(buildHelper.mainTypingsPath, exportTypeString, 'utf-8')
}

buildHelper.buildSvgsFromFiles(initialTypeDefinitions, buildSingleSvgFunc)
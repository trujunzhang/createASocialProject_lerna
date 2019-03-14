import fs from 'fs'
import glob from 'glob'
import camelcase from 'camelcase'
import uppercamelcase from 'uppercamelcase'
import path from 'path'
import cheerio from 'cheerio'
import prettier from 'prettier'

const rootDir = path.join(__dirname, '..')

import { BuildHelper, ISvgModel } from './utils'

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

const buildComponent = (model: ISvgModel) => {
  const { svgPath, svgId, tsxFileName } = model
}

glob(buildHelper.svgPath, (err, icons) => {
  fs.writeFileSync(buildHelper.mainTSPath, '', 'utf-8')
  fs.writeFileSync(buildHelper.mainTypingsPath, initialTypeDefinitions, 'utf-8')

  icons.forEach((i) => {
    const svg = fs.readFileSync(i, 'utf-8')
    const id = path.basename(i, '.svg')
    const ComponentName = id === 'github' ? 'GitHub' : uppercamelcase(id)
    const $ = cheerio.load(svg, {
      xmlMode: true
    })
    const fileName = path.basename(i).replace('.svg', '.tsx')
    const location = path.join(buildHelper.generatedIconPath, fileName)

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

      export const ${ComponentName} = (props) => {
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

      ${ComponentName}.propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
      }

      ${ComponentName}.defaultProps = {
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

    const fixedComponent = component
      .replace(/<path/g, '<svg.Path')
      .replace(/<circle/g, '<svg.Circle')
      .replace(/<polyline/g, '<svg.Polyline')
      .replace(/<rect/g, '<svg.Rect')
      .replace(/<line/g, '<svg.Line')

    fs.writeFileSync(location, fixedComponent, 'utf-8')

    const exportString = `export * from './icons/${id}'\r\n`
    fs.appendFileSync(buildHelper.mainTSPath, exportString, 'utf-8')

    const exportTypeString = `export const ${ComponentName}: Icon\n`
    fs.appendFileSync(buildHelper.mainTypingsPath, exportTypeString, 'utf-8')
  })
})

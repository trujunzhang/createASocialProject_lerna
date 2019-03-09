import fs from 'fs';
import glob from 'glob';
import camelcase from 'camelcase';
import uppercamelcase from 'uppercamelcase';
import path from 'path';
import cheerio from 'cheerio';
import prettier from 'prettier';

const rootDir = path.join(__dirname, '..');

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

const mainTS = "index.ts"
const mainTypings = "index.d.ts"
const featherIconsPath = `${rootDir}/node_modules/feather-icons/dist/icons/**.svg`
const generatedIconHome = `${rootDir}/src/generate`
const generatedIconPath = `${generatedIconHome}/feather`

if (!fs.existsSync(generatedIconHome)) {
  fs.mkdirSync(generatedIconHome)
}
if (!fs.existsSync(generatedIconPath)) {
  fs.mkdirSync(generatedIconPath)
}

glob(
  featherIconsPath,
  (err, icons) => {
    fs.writeFileSync(path.join(rootDir, 'src', mainTS), '', 'utf-8');
    fs.writeFileSync(
      path.join(rootDir, 'src', mainTypings),
      initialTypeDefinitions,
      'utf-8'
    );

    icons.forEach(i => {
      const svg = fs.readFileSync(i, 'utf-8');
      const id = path.basename(i, '.svg');
      const ComponentName = (id === 'github') ? 'GitHub' : uppercamelcase(id);
      const $ = cheerio.load(svg, {
        xmlMode: true,
      });
      const fileName = path.basename(i).replace('.svg', '.tsx');
      const location = path.join(generatedIconPath, fileName);

      $('*').each((index, el) => {
        Object.keys(el.attribs).forEach(x => {
          if (x.includes('-')) {
            $(el)
              .attr(camelcase(x), el.attribs[x])
              .removeAttr(x);
          }
          if (x === 'stroke') {
            $(el).attr(x, 'currentColor');
          }
        });

        if (el.name === 'svg') {
          $(el).attr('otherProps', '...');
        }
      });

      const element = `
      import * as React from 'react';
      import * as PropTypes from 'prop-types';

      const ${ComponentName} = (props) => {
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

      export default ${ComponentName}
    `;

      const component = prettier.format(element, {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        parser: 'flow',
      });

      fs.writeFileSync(location, component, 'utf-8');

      const exportString = `export ${ComponentName} from './icons/${id}';\r\n`;
      fs.appendFileSync(
        path.join(rootDir, 'src', mainTS),
        exportString,
        'utf-8'
      );

      const exportTypeString = `export const ${ComponentName}: Icon;\n`;
      fs.appendFileSync(
        path.join(rootDir, 'src', mainTypings),
        exportTypeString,
        'utf-8'
      );
    });
  });

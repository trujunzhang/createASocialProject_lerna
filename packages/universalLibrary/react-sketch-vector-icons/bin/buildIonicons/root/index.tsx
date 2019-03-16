import * as React from 'react'
import * as PropTypes from 'prop-types'
import invariant from 'invariant'
import { IconMap, IonIconDefs, IonIconProps, IonIconSizes, IconNames } from './index.d'

export declare const iconTitles: { [k: string]: string }

import { UpperCaseStringUtils } from '@app/tools'
import * as Icons from './icons'

type Dict<T = any> = { [k: string]: T }

type IconProps = IonIconProps<IconNames>
type IonConf = {
  map: IconMap
  defs: IonIconDefs
  sizes: IonIconSizes
  titles: Dict<string>
  baseClass: string | undefined
}

const UNDEF = undefined

/**
 * We are running in a Mac-like OS?
 */
// const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)

/**
 * Shorthand to `Object.keys` that returns a more-sense type.
 */
const keyArray = Object.keys as <T>(obj: T) => (keyof T)[]

/**
 * Check if `obj` is a non-falsy object.
 */
const isObject = (obj: any) => !!obj && typeof obj === 'object'

/**
 * Simple `Object.assign`-like function
 */
const assign = function<T extends Dict, U extends Dict>(dest: T, src?: U) {
  dest = dest || {}
  if (src) {
    Object.keys(src).forEach((k) => {
      dest[k] = isObject(src[k]) ? assign(isObject(dest[k]) ? dest[k] : {}, src[k]) : src[k]
    })
  }
  return dest as T & U
}

/**
 * Internal configuration object.
 */
const _Conf: IonConf = {
  map: {},
  defs: {
    display: 'inline-block',
    fill: 'currentColor',
    stroke: 'currentColor',
    size: '1em'
  },
  sizes: {
    small: '18px',
    large: '32px'
  },
  titles: {},
  baseClass: UNDEF
}

/**
 * Renders a SVG Ionicon
 */
export class IonIcon extends React.PureComponent<IconProps> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mode: PropTypes.oneOf(['ios', 'md']),
    title: PropTypes.string,
    innerRef: PropTypes.func,
    children: PropTypes.oneOf([undefined])
  }

  titleify(name: string) {
    const title =
      name[0].toUpperCase() + name.substr(1).replace(/-+([a-z])/g, (_, c) => ` ${c.toUpperCase()}`)

    return (_Conf.titles[name] = title)
  }

  expandColor(opts: Dict, color?: string) {
    if (opts.fill === UNDEF) {
      opts.fill = color
    }
    if (opts.stroke === UNDEF) {
      opts.stroke = color
    }
  }

  expandSize(opts: Dict, size?: string | number) {
    if (typeof size === 'string') {
      size = _Conf.sizes[size] || size
    }
    if (opts.width === UNDEF) {
      opts.width = size
    }
    if (opts.height === UNDEF) {
      opts.height = size
    }
  }

  /**
   * Merge the user properties with the defaults, taking care to preserve
   * the classes and styles of both.
   */
  mergeDefs(props: IconProps) {
    const defs = _Conf.defs
    const keys = keyArray(defs)

    // Give preference to specific color/size.
    if (props.color !== UNDEF) {
      this.expandColor(props, props.color)
      delete props.color
    }
    if (props.size !== UNDEF) {
      this.expandSize(props, props.size)
      delete props.size
    }

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]

      switch (k) {
        case 'className':
          if (props.className === UNDEF) {
            props.className = defs.className
          }
          break

        case 'style':
          if (props.style === UNDEF) {
            props.style = assign({}, defs.style)
          }
          break

        case 'color':
          this.expandSize(props, defs.color)
          break

        case 'size':
          this.expandSize(props, defs.size)
          break

        default:
          if (props[k] === UNDEF) {
            props[k] = defs[k]
          }
      }
    }

    // Add inconditionally the base class, if any.
    const classes = _Conf.baseClass
    if (classes) {
      props.className = props.className ? `${classes} ${props.className}` : classes
    }

    return props
  }

  checkIconPlatform(name: string) {
    let originalName = name
    let ios = false
    if (name.indexOf('ios-') !== -1) {
      originalName = name.replace('ios-', '')
      ios = true
    }
    const svgClassName = UpperCaseStringUtils.toCamelClassName(originalName)
    const renderIcon = Icons[svgClassName]
    return {
      originalName,
      renderIcon,
      ios
    }
  }

  render() {
    console.log('ionicons: (props)', JSON.stringify(this.props))
    /**
     * Example icon's props:
     * {"name":"ios-arrow-back","size":17,"color":"rgba(0, 0, 0, 0.44)"}
     */
    const { name, size, color } = this.props

    const platformModel = this.checkIconPlatform(name)

    const renderIcon = platformModel.renderIcon
    invariant(renderIcon, 'The icon "%s" is not registered.', name)

    // Guess whether the "iOS" style should be used with double-style icons.
    // let ios = isMacLike
    const ios = platformModel.ios

    return renderIcon(size, size, color, ios)
  }
}

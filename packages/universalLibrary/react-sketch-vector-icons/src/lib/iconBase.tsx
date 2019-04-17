import * as React from 'react'

import { Svg, Text, View } from 'react-sketchapp'

import { DefaultContext, IconContext } from './iconContext'

export interface IconTree {
  tag: string
  attr: { [key: string]: string }
  child: IconTree[] | any
}

const Tree2Element = (tree: IconTree[]): any => {
  if (!!tree) {
    return tree.map((node: IconTree, i: number) => {
      const ElementType: any = Svg.Path
      // const elementType: any = node.tag
      const props: any = { key: i, ...node.attr }
      const children: any = Tree2Element(node.child)
      // React.createElement(elementType, props, children)
      // console.log('SVG.path(props), ',JSON.stringify(props))
      // console.log('SVG.path(node.attr), ', JSON.stringify(node.attr))
      return (
        <ElementType key={i} {...props}>
          {children}
        </ElementType>
      )
    })
  }
  return null
}
export const GenIcon = (data: IconTree) => {
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attr }} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  )
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
  size?: string | number
  color?: string
}

export type IconType = (props: IconBaseProps) => JSX.Element

const iconDs = {
  FaAdn: {
    d:
      'M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z'
  }
}

export function IconBase(props: IconBaseProps & { attr: {} | undefined }): JSX.Element {
  const elem = (conf: IconContext) => {
    const computedWidth = props.width || 24
    const computedHeight = props.height || 24
    // const computedSize = props.size || conf.size || '1em'
    let className
    if (conf.className) className = conf.className
    if (props.className) className = (className ? className + ' ' : '') + props.className
    const { attr, ...svgProps } = props

    // stroke="currentColor"
    // fill="currentColor"
    // strokeWidth="0"
    const style = { color: props.color || conf.color, ...conf.style, ...props.style }

    // console.log('SVG(style), ', JSON.stringify(style))
    // console.log('SVG(props), ', JSON.stringify(props))
    const children = React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, {
        fill: style.color
      })
    })

    return (
      <Svg
        {...conf.attr}
        {...attr}
        {...svgProps}
        color={style.color}
        className={className}
        width={computedWidth}
        height={computedHeight}
        xmlns="http://www.w3.org/2000/svg">
        {children}
      </Svg>
    )
  }

  return IconContext !== undefined ? (
    <IconContext.Consumer>{(conf: IconContext) => elem(conf)}</IconContext.Consumer>
  ) : (
    elem(DefaultContext)
  )
}

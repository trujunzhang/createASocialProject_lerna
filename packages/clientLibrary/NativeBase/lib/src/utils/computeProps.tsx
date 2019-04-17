import { LodashUtils as _ } from '@app/tools'

import { StyleSheet } from 'react-primitives'

const computeProps = (incomingProps, defaultProps) => {
  // External props has a higher precedence
  let computedProps: any = {}

  incomingProps = _.clone(incomingProps)
  delete incomingProps.children

  const incomingPropsStyle: any = incomingProps.style
  delete incomingProps.style

  // console.log(defaultProps, incomingProps);
  if (incomingProps) {
    _.assign(computedProps, defaultProps, incomingProps)
  } else {
    computedProps = defaultProps
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {}
    computedProps.style = {}
    if (Array.isArray(incomingPropsStyle)) {
      _.forEach(incomingPropsStyle, (style) => {
        if (typeof style === 'number') {
          _.merge(computedPropsStyle, (StyleSheet as any).flatten(style))
        } else {
          _.merge(computedPropsStyle, style)
        }
      })
    } else if (typeof incomingPropsStyle === 'number') {
      computedPropsStyle = (StyleSheet as any).flatten(incomingPropsStyle)
    } else {
      computedPropsStyle = incomingPropsStyle
    }

    _.merge(computedProps.style, defaultProps.style, computedPropsStyle)
  }
  // console.log("computedProps ", computedProps);
  return computedProps
}

export default computeProps

import * as React from 'react'
import { StyleSheet } from 'react-primitives'
import { LodashUtils as _ } from '@app/tools'

function computeProps(incomingProps, defaultProps) {
  // External props has a higher precedence
  var computedProps: any = {}

  incomingProps = _.clone(incomingProps)
  delete incomingProps.children

  var incomingPropsStyle: any = incomingProps.style
  delete incomingProps.style

  // console.log(defaultProps, incomingProps);

  if (incomingProps) _.merge(computedProps, defaultProps, incomingProps)
  else computedProps = defaultProps

  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    var computedPropsStyle = {}
    computedProps.style = {}
    if (Array.isArray(incomingPropsStyle)) {
      _.forEach(incomingPropsStyle, (style: any) => {
        if (typeof style == 'number') {
          _.merge(computedPropsStyle, StyleSheet.flatten(style as any))
        } else {
          _.merge(computedPropsStyle, style)
        }
      })
    } else {
      if (typeof incomingPropsStyle == 'number') {
        computedPropsStyle = StyleSheet.flatten(incomingPropsStyle as any)
      } else {
        computedPropsStyle = incomingPropsStyle
      }
    }

    _.merge(computedProps.style, defaultProps.style, computedPropsStyle)
  }

  // console.log("computedProps ", computedProps);

  return computedProps
}

export default computeProps

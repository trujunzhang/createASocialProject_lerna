import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

export function clean(obj: any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  return obj
}

export const convertValidateStyle = (style: any) => {
  const json = StyleSheet.flatten(style)

  return clean(json)
}

export const getChildStyle = (props: any) => {
  const child: any = props.children
  const childStyle = child && child.props && child.props.style
  const compStyle = convertValidateStyle(childStyle)
  return compStyle
}

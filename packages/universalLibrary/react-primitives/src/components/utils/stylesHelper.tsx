import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

function clean(obj: any) {
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

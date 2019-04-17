import * as React from 'react'

export type GravatarStyle = Object | number | any[]

export interface GravatarProps {
  email: string
  style?: GravatarStyle
  size?: number
  circular?: boolean
  square?: boolean
}

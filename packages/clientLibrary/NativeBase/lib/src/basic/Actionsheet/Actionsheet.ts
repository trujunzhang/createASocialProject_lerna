import * as React from 'react'

export type ActionSheetContainerStyle = Object | number | any[]

export interface ActionSheetContainerProps {
  style?: ActionSheetContainerStyle
  // Others
  autoHide?: boolean
  duration?: any
}

// export class ActionSheet {
//   static show: (
//     configuration: {
//       options: string[] | Array<{ text: string; icon?: string; iconColor?: string }>
//       cancelButtonIndex?: number
//       destructiveButtonIndex?: number
//       title?: string
//     },
//     onSelect: (index: number) => void
//   ) => void
// }

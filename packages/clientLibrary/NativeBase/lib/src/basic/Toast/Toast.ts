import * as React from 'react'

export type ToastStyle = Object | number | any[]

export interface ToastProps {
  style?: ToastStyle
}

// export class Toast extends React.Component<ToastProps, any> {
//   public static show(configuration: {
//     text: string
//     buttonText?: string
//     position?: 'top' | 'bottom' | 'center'
//     type?: 'danger' | 'success' | 'warning'
//     duration?: number
//     onClose?: (reason: 'user' | 'timeout' | 'functionCall') => any
//     textStyle?: RnTextStyleProp
//     buttonTextStyle?: RnTextStyleProp
//     buttonStyle?: RnViewStyleProp
//   }): void

//   /**
//    * Hides the currently visible toast
//    */
//   public static hide(): void

//   render(): JSX.Element
// }

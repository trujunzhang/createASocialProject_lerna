import { IAvatarProps } from './iAvatar'

export interface IAvatarRenderWebContainerProps extends IAvatarProps {
  children?: any
  classNames: string
  onClick?: () => any
  hostStyle: any
}

export interface IAvatarRenderWebImageViewProps extends IAvatarProps {
  imageStyle: any
  imageSrc: string
  alt: any
  onError?: any
}

export interface IAvatarRenderWebTextViewProps extends IAvatarProps {
  className: string
  initialsStyle: any | null
  tableStyle: any
  spanStyle: any
  scaleTextNode: (node: any) => any
  spanKey: string
  textValue?: string | null
}

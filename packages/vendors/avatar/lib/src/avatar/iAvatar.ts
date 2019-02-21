import {
  ISrcSource,
  IValueSource,
  IGravatarBaseSource,
  IGoogleBaseSource,
  IFacebookBaseSource,
  ISkypeSource,
  ITwitterBaseSource,
  IVkontakteBaseSource,
  IIconSource
} from '../sources'

import {
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps
} from './iAvatarClient'

import {
  IAvatarRenderWebContainerProps,
  IAvatarRenderWebImageViewProps,
  IAvatarRenderWebTextViewProps
} from './iAvatarWeb'

export interface IAvatarSourceProps
  extends ISrcSource,
    IValueSource,
    IGravatarBaseSource,
    IGoogleBaseSource,
    IFacebookBaseSource,
    ISkypeSource,
    ITwitterBaseSource,
    IVkontakteBaseSource,
    IIconSource {}

export interface IAvatarURISource {
  uri: string
}

export type AvatarURISourceWithNull = IAvatarURISource | null

export interface IAvatarProps extends IAvatarSourceProps {
  // For Client
  renderClientContainerView?: (renderClientContainerProps: IAvatarRenderClientContainerProps) => any
  renderClientImageView?: (renderClientImageViewProps: IAvatarRenderClientImageViewProps) => any
  renderClientTextView?: (renderClientTextViewProps: IAvatarRenderClientTextViewProps) => any
  // For Web
  renderWebContainerView?: (renderWebContainerProps: IAvatarRenderWebContainerProps) => any
  renderWebImageView?: (renderWebImageViewProps: IAvatarRenderWebImageViewProps) => any
  renderWebTextView?: (renderWebTextViewProps: IAvatarRenderWebTextViewProps) => any
  // Styles
  containerStyle?: any
  avatarStyle?: any
  titleStyle?: any
  className?: string
  fgColor?: string
  round?: boolean | string
  style?: any
  size?: number
  textSizeRatio?: number
  unstyled?: boolean
  onClick?: () => any
  // Only for client.
  clientStaticImageSource?: any
}

export interface IAvatarDefaultProps {
  className: string
  fgColor: string
  round: boolean | string
  size: number
  textSizeRatio: number
  unstyled: boolean
}

export interface IAvatarState {
  internal: any
  src?: string | null
  value?: string | null
  color?: string
  sourceName?: any
}

export type AvatarPropsWithDefaults = IAvatarProps & IAvatarDefaultProps

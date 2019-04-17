import {
  Avatar,
  IAvatarProps,
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps
} from '@app/avatar'

export const fixImageSrc = (renderClientImageViewProps: IAvatarRenderClientImageViewProps) => {
  const { imageSrc } = renderClientImageViewProps

  return imageSrc
}

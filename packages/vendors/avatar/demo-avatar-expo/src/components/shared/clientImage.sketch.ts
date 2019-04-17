import {
  Avatar,
  IAvatarProps,
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps
} from '@app/avatar'

export const fixImageSrc = (renderClientImageViewProps: IAvatarRenderClientImageViewProps) => {
  const { imageSrc } = renderClientImageViewProps

  if (typeof imageSrc === 'object') {
    const keys = Object.keys(imageSrc)
    if (keys.indexOf('uri') !== -1) {
      // console.log('image Src: ', JSON.stringify(imageSrc))
      // console.log('image Src: ', imageSrc.uri)
      return imageSrc.uri
    }
  }

  return imageSrc
}

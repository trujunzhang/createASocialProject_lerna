import { Image, Text, View, StyleSheet } from 'react-primitives'

import {
  Avatar,
  IAvatarProps,
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps
} from '@app/avatar'

import * as React from 'react'

import { fixImageSrc } from './clientImage'

interface IAppAvatarProps extends IAvatarProps {}

export class AppAvatar extends React.Component<IAppAvatarProps, {}> {
  render() {
    return (
      <Avatar
        {...this.props}
        renderClientContainerView={(
          renderClientContainerProps: IAvatarRenderClientContainerProps
        ) => {
          const { children, styles, round, width, containerStyle } = renderClientContainerProps
          const viewStyle = StyleSheet.flatten([
            styles.container,
            round && { borderRadius: width / 2 },
            containerStyle && containerStyle,
            {
              backgroundColor: 'blue'
            }
          ])
          return <View style={viewStyle}>{children}</View>
        }}
        renderClientImageView={(renderClientImageViewProps: IAvatarRenderClientImageViewProps) => {
          const { styles, onError, round, width, avatarStyle } = renderClientImageViewProps
          const fixedImageSrc = fixImageSrc(renderClientImageViewProps)
          const imageStyle = StyleSheet.flatten([
            styles.avatar,
            round && { borderRadius: width / 2 },
            avatarStyle && avatarStyle,
            {
              backgroundColor: 'red'
            }
          ])
          return <Image onError={onError} style={imageStyle} source={fixedImageSrc} />
        }}
        renderClientTextView={(renderClientTextViewProps: IAvatarRenderClientTextViewProps) => {
          const { styles, titleContainerStyle, titleStyle, textValue } = renderClientTextViewProps
          return (
            <View
              style={[
                titleContainerStyle,
                {
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center'
                }
              ]}>
              <Text style={[styles.title, titleStyle && titleStyle]}>{textValue}</Text>
            </View>
          )
        }}
      />
    )
  }
}

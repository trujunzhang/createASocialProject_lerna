import { Image, Text, View } from 'react-native'

import {
  Avatar,
  IAvatarProps,
  IAvatarRenderClientContainerProps,
  IAvatarRenderClientImageViewProps,
  IAvatarRenderClientTextViewProps
} from '@app/avatar'

import {} from '@app/avatar'

import * as React from 'react'

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
          return (
            <View
              style={[
                styles.container,
                round && { borderRadius: width / 2 },
                containerStyle && containerStyle,
                {
                  backgroundColor: 'blue'
                }
              ]}>
              {children}
            </View>
          )
        }}
        renderClientImageView={(renderClientImageViewProps: IAvatarRenderClientImageViewProps) => {
          const {
            styles,
            onError,
            round,
            width,
            avatarStyle,
            imageSrc
          } = renderClientImageViewProps
          return (
            <Image
              onError={onError}
              style={[
                styles.avatar,
                round && { borderRadius: width / 2 },
                avatarStyle && avatarStyle,
                {
                  backgroundColor: 'red'
                }
              ]}
              source={imageSrc}
            />
          )
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

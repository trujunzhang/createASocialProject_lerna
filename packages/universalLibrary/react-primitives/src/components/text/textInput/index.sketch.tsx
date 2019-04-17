import { TextInputProps } from '../../../typings'

import { View, Text } from 'react-sketchapp'

import * as React from 'react'

interface ISketchTextInputState {}
export const colors = {
  Purple: '#5700A2',
  Yellow: '#BB9A05',
  Orange: '#fd6134',
  Rose: '#ff4289',
  Green: '#005b4c',
  Black: '#222223',
  LightGrey: '#eeeeee',
  Grey: '#cccccc',
  White: '#ffffff'
}

export const spacing = {
  xSmall: 4,
  Small: 8,
  Medium: 16,
  Large: 32,
  xLarge: 64
}

export const typeRamp = {
  xSmall: 7,
  Small: 12,
  Medium: 16,
  Large: 24,
  xLarge: 36
}

export const typography = {
  Heading: {
    fontSize: typeRamp.Large,
    textAlign: 'center',
    marginBottom: spacing.Large
  }
}
export const fontFamily = 'Helvetica'

const styles = {
  textbox: {
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.Grey,
    backgroundColor: colors.White,
    fontFamily,
    fontSize: typeRamp.Medium,
    lineHeight: typeRamp.Medium,
    padding: spacing.Medium,
    width: 300
  }
}

export class TextInput extends React.Component<TextInputProps, ISketchTextInputState> {
  render() {
    const { value } = this.props
    return (
      <View style={styles.textbox as any}>
        <Text>{value}</Text>
      </View>
    )
  }
}

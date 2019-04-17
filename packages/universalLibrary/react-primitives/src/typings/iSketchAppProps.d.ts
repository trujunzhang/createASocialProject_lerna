import { ImageProps, ViewProps, TextProps, TextInputProps, StatusBarProps } from 'react-native'

export interface SketchAppProps {
  name?: string
}

export class Image extends React.Component<ImageProps & SketchAppProps> {}
export class View extends React.Component<ViewProps & SketchAppProps> {}
export class Text extends React.Component<TextProps & SketchAppProps> {}
export class TextInput extends React.Component<TextInputProps & SketchAppProps> {}
export class StatusBar extends React.Component<StatusBarProps & SketchAppProps> {
  /**
   * The current height of the status bar on the device.
   * @platform android
   */
  static currentHeight?: number
}

import { ITextVariables, ITextFuncVariables } from '@app/tools' // typings
const textColor = '#000'

export const textVariables: ITextVariables = {
  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14
}

export const textFuncVariables: ITextFuncVariables = {
  get defaultTextColor() {
    return textColor
  }
}

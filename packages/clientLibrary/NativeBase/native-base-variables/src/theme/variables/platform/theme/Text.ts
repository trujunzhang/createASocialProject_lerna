import { ITextVariables, ITextFuncVariables } from '../../../../types'

const textColor = '#000'

export const textVariables: ITextVariables = {
  // Text
  textColor,
  inverseTextColor: '#fff',
  noteFontSize: 14
}

export const textFuncVariables: ITextFuncVariables = {
  defaultTextColor: () => {
    return textColor
  }
}

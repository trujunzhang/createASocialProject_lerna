import { IInputGroupVariables, IInputGroupFuncVariables } from '../../../../types'

const textColor = '#000'
export const inputGroupVariables: IInputGroupVariables = {
  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50
}
export const inputGroupFuncVariables: IInputGroupFuncVariables = {
  inputColor: () => {
    return textColor
  },
  inputColorPlaceholder: () => {
    return '#575757'
  }
}
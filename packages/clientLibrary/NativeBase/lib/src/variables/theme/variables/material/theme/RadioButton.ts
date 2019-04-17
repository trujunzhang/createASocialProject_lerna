import { IRadioButtonVariables, IRadioButtonFuncVariables } from '@app/tools' // typings

import { platform } from '../../utils'

import { brandPrimary } from './Button'
export const radioButtonVariables: IRadioButtonVariables = {
  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: 24
}

export const radioButtonFuncVariables: IRadioButtonFuncVariables = {
  get radioColor() {
    return brandPrimary
  }
}

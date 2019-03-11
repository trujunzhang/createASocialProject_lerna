import { IRadioButtonVariables, IRadioButtonFuncVariables } from '../../../../types'
import { commonColor } from '../../utils'

import { brandPrimary } from './Button'
export const radioButtonVariables: IRadioButtonVariables = {
  // Radio Button
  radioBtnSize: commonColor === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: commonColor === 'ios' ? 29 : 24
}

export const radioButtonFuncVariables: IRadioButtonFuncVariables = {
  radioColor: () => {
    return brandPrimary
  }
}

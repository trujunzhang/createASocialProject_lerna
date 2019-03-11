import { commonColor } from '../../utils'
import { ICheckBoxVariables } from '../../../../types'

export const checkBoxVariables: ICheckBoxVariables = {
  // CheckBox
  CheckboxRadius: commonColor === 'ios' ? 13 : 0,
  CheckboxBorderWidth: commonColor === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: commonColor === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: commonColor === 'ios' ? 0 : 5,
  CheckboxIconSize: commonColor === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: commonColor === 'ios' ? undefined : 1,
  CheckboxFontSize: commonColor === 'ios' ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff'
}

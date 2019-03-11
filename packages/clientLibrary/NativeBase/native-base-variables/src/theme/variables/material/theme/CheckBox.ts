import { material } from '../../utils'
import { ICheckBoxVariables } from '../../../../types'

export const checkBoxVariables: ICheckBoxVariables = {
  // CheckBox
  CheckboxRadius: material === 'ios' ? 13 : 0,
  CheckboxBorderWidth: material === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: material === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: material === 'ios' ? 0 : 5,
  CheckboxIconSize: material === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: material === 'ios' ? undefined : 1,
  CheckboxFontSize: material === 'ios' ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff'
}

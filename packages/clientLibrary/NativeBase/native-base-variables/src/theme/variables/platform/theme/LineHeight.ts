import { ILineHeightVariables } from '../../../../types'

import { platform } from '../../utils'
export const lineHeightVariables: ILineHeightVariables = {
  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 24
}

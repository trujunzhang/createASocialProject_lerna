import { platform } from '../../utils'
import { IFooterVariables } from '../../../../types'

export const footerVariables: IFooterVariables = {
  // Footer
  footerHeight: 55,
  footerDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0
}

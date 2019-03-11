import { IListVariables } from '../../../../types'
import { commonColor } from '../../utils'

export const listVariables: IListVariables = {
  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: commonColor === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  listItemSelected: commonColor === 'ios' ? '#007aff' : '#3F51B5'
}

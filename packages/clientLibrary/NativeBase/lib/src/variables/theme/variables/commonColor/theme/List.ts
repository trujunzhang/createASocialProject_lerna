import { IListVariables } from '@app/tools' // typings

import { platform } from '../../utils'

export const listVariables: IListVariables = {
  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: platform === 'ios' ? '#007aff' : '#3F51B5'
}

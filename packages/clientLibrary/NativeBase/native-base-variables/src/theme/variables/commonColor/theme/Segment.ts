import { ISegmentVariables } from '../../../../types'
import { commonColor } from '../../utils'

export const segmentVariables: ISegmentVariables = {
  // Segment
  segmentBackgroundColor: commonColor === 'ios' ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: commonColor === 'ios' ? '#007aff' : '#fff',
  segmentTextColor: commonColor === 'ios' ? '#007aff' : '#fff',
  segmentActiveTextColor: commonColor === 'ios' ? '#fff' : '#3F51B5',
  segmentBorderColor: commonColor === 'ios' ? '#007aff' : '#fff',
  segmentBorderColorMain: commonColor === 'ios' ? '#a7a6ab' : '#3F51B5'
}

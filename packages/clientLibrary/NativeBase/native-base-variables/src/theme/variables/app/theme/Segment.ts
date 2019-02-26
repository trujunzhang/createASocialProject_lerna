import { ISegmentVariables } from '../../../../types'
import { platform } from '../../utils'

export const segmentVariables: ISegmentVariables = {
  // Segment
  segmentBackgroundColor: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: platform === 'ios' ? '#007aff' : '#fff',
  segmentTextColor: platform === 'ios' ? '#007aff' : '#fff',
  segmentActiveTextColor: platform === 'ios' ? '#fff' : '#3F51B5',
  segmentBorderColor: platform === 'ios' ? '#007aff' : '#fff',
  segmentBorderColorMain: platform === 'ios' ? '#a7a6ab' : '#3F51B5'
}

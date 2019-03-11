import { ISegmentVariables } from '../../../../types'
import { material } from '../../utils'

export const segmentVariables: ISegmentVariables = {
  // Segment
  segmentBackgroundColor: material === 'ios' ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: material === 'ios' ? '#007aff' : '#fff',
  segmentTextColor: material === 'ios' ? '#007aff' : '#fff',
  segmentActiveTextColor: material === 'ios' ? '#fff' : '#3F51B5',
  segmentBorderColor: material === 'ios' ? '#007aff' : '#fff',
  segmentBorderColorMain: material === 'ios' ? '#a7a6ab' : '#3F51B5'
}

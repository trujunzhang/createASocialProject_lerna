import { IParallaxVariables } from '../../../../types'
import { fixedHeaderLeftWidth } from '../platformVariables'

export const parallaxVariables: IParallaxVariables = {
  // Parallax
  parallaxFixedHeaderContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: fixedHeaderLeftWidth
    // backgroundColor: 'transparent'
    // backgroundColor: 'yellow'
  },

  parallaxStickHeaderContainerStyle: {
    paddingLeft: fixedHeaderLeftWidth
  }
}

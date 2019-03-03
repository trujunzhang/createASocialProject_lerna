
import { PixelRatioHelper } from '../PixelRatio'

import { Dimensions } from '../../injection/sketchapp/dimensions'

describe('Functions of the PixelRatioHelper', () => {
    test('should return string correctly,  invoked scale', () => {
        const PixelRatio = new PixelRatioHelper(Dimensions)
        const scale = PixelRatio.get()

        expect(scale).toBe(2)
    })
})

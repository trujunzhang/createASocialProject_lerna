import { PixelRatio } from '../index.sketch'

describe('Functions of the PixelRatioHelper', () => {
  test('should return string correctly,  invoked scale', () => {
    const scale = PixelRatio.get()

    expect(scale).toBe(2)
  })
})
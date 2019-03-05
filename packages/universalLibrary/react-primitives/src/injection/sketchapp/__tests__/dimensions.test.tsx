import { Dimensions } from '../dimensions'

describe('Functions of the Dimensions', () => {
  test('should return string correctly,  invoked window', () => {
    const deviceHeight = Dimensions.get('window').height
    const deviceWidth = Dimensions.get('window').width

    expect(deviceWidth).toBe(414)
  })
})

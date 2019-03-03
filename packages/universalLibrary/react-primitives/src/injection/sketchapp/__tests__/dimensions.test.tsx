
import { Dimensions } from '../dimensions'

describe('Functions of the utils', () => {
  test('should return string correctly,  invoked random', () => {
    const deviceHeight = Dimensions.get('window').height
    const deviceWidth = Dimensions.get('window').width

    expect(deviceWidth).toBe(414)
  })
})

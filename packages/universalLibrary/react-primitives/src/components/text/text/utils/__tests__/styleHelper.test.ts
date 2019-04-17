import { getStylesForText } from '../styleHelper'

describe('Functions of the getStylesForText', () => {
  test('should return correctly, invoked styles', () => {
    const style = {
      fontSize: 19,
      fontFamily: 'Proxima Nova regular',
      color: '#FFF',
      fontWeight: '700',
      textAlign: 'center',
      paddingLeft: 4,
      paddingTop: 1
    }

    const { viewStyle, textStyle } = getStylesForText(style)

    const x = 0

    // expect(scale).toBe(2)
  })
  test('should return correctly, when styles is undefined', () => {
    const style = undefined

    const { viewStyle, textStyle } = getStylesForText(style)

    const x = 0

    // expect(scale).toBe(2)
  })

  test('should return correctly, when styles is null', () => {
    const style = null

    const { viewStyle, textStyle } = getStylesForText(style)

    const x = 0

    // expect(scale).toBe(2)
  })
})

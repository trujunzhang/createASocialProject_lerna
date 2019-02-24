import { appVariables } from '../appVariables'

describe('Functions of the appVariables', () => {
  it('should parseSize result correctly', () => {
    const result = appVariables
    expect(result.fontFamily).toBe('System')
    expect(result.btnFontFamily).toBe('System')
    expect(result.iconFamily).toBe('MaterialIcons')
  })
})

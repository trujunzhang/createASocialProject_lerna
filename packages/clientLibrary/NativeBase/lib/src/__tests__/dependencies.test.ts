const MyPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies } = MyPackage

    expect(dependencies['tween-functions']).toBeDefined()
  })
})

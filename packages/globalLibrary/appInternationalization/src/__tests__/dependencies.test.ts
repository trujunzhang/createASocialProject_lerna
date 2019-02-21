const MyPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies } = MyPackage

    expect(dependencies.i18next).toEqual('12.1.0')
    expect(dependencies['@types/i18next']).toEqual('12.1.0')
  })
})

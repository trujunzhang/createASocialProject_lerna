const ClientPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies, devDependencies } = ClientPackage

    expect(dependencies.moment).toBeDefined()
    expect(dependencies.slugify).toBeDefined()

    // i18next
    expect(dependencies['@types/i18next']).toBeUndefined() // No need '@type/xxx'.
    expect(dependencies['@types/react-i18next']).toBeUndefined() // No need '@type/xxx'.
    expect(dependencies.i18next).toEqual('15.0.0')
    expect(dependencies['react-i18next']).toEqual('9.0.10')

    // lodash
    expect(devDependencies['@types/lodash']).toBeUndefined()
    expect(dependencies.lodash).toBeDefined()

    // axios
    expect(dependencies['@types/axios']).toBeUndefined() // No need '@type/xxx'.
    expect(dependencies.axios).toBeDefined()

    // numeral
    expect(dependencies['@types/numeral']).toBeUndefined() // No need '@type/numeral'.
    expect(dependencies.numeral).toBeDefined()
  })
})

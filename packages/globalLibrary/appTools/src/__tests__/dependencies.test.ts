const ClientPackage = require('../../package.json')

describe('Verify the static third lib dependencies', () => {
  it('should return correctly', () => {
    const { dependencies, devDependencies } = ClientPackage

    expect(dependencies.moment).toBeDefined()
    expect(dependencies.slugify).toBeDefined()

    expect(dependencies['@types/lodash']).toBeDefined()
    expect(dependencies.lodash).toBeDefined()

    expect(dependencies['@types/axios']).toBeUndefined() // No need '@type/asios'.
    expect(dependencies.axios).toBeDefined()

    // numeral
    expect(dependencies['@types/numeral']).toBeUndefined() // No need '@type/numeral'.
    expect(dependencies.numeral).toBeDefined()
  })
})

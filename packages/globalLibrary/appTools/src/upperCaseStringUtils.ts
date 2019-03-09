import CamelCase from 'camelCase'

export class UpperCaseStringUtils {
  static toCamelClassName(name: string) {
    return CamelCase(name, { pascalCase: true })
  }
}

import { Program, Syntax } from 'esprima'
import {
  FunctionDeclaration,
  VariableDeclaration,
  // For Const.
  VariableDeclarator,
  Identifier,
  ObjectExpression,
  Property,
  Literal
} from 'estree'
import { parseValueFromKey } from './getValueFromKey'

export class ObjectFromNodeFetcher {
  private id: Identifier
  private init: ObjectExpression
  private nodeObject: any = {}

  constructor(id: Identifier, init: ObjectExpression) {
    this.id = id
    this.init = init
  }

  private getVariable(variable: Property, parentObject: any) {
    const { key, value } = variable
    const objKey: string = parseValueFromKey(key)

    const valueType: string = value.type
    switch (valueType) {
      case Syntax.Literal: {
        const objValue = (value as Literal).value
        parentObject[objKey] = objValue
        break
      }
      case Syntax.ObjectExpression: {
        const objectValue = {}
        parentObject[objKey] = objectValue
        this.getNode(value as ObjectExpression, objectValue)
        break
      }
    }
  }

  private getNode(express: ObjectExpression, parentObject) {
    const pNodes = express.properties

    pNodes.map((nodeP, index: number) => {
      this.getVariable(nodeP, parentObject)
    })
  }

  parse() {
    this.getNode(this.init, this.nodeObject)

    return this
  }

  end() {
    debugger
    return this.nodeObject
  }
}

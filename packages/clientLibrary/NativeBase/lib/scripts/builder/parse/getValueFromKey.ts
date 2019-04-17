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

export const parseValueFromKey = (key: any) => {
  const keyType: string = key.type

  let objKey = 'undefined'

  switch (keyType) {
    case Syntax.Literal: {
      objKey = (key as Literal).value as string
      break
    }
    case Syntax.Identifier: {
      objKey = (key as Identifier).name as string
      break
    }
  }

  return objKey
}

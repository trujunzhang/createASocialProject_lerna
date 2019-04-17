import { Program, Syntax } from 'esprima'
import {
  FunctionDeclaration,
  VariableDeclaration,
  // For Const.
  VariableDeclarator,
  Identifier,
  ObjectExpression
} from 'estree'
import { ObjectFromNodeFetcher } from './getObjectFromNode'

export class VariableNodeFetcher {
  private script: Program
  private variableNode: any = null
  private tmpNode: any
  constructor(script: Program) {
    this.script = script
    this.tmpNode = script
  }

  private getNode(nodeP: any, isParentFunction: boolean) {
    const nodeType = (nodeP as any).type

    switch (nodeType) {
      case Syntax.Program: {
        const pBody = (nodeP as any).body

        pBody.map((nodeC, index: number) => {
          this.getNode(nodeC, false)
        })

        break
      }
      case Syntax.VariableDeclarator: {
        const vNode = nodeP as VariableDeclarator
        const { id, init } = vNode
        new ObjectFromNodeFetcher(id as Identifier, init as ObjectExpression).parse().end()
        break
      }
      case Syntax.VariableDeclaration: {
        if (isParentFunction) {
          const declarationNode = (nodeP as VariableDeclaration).declarations

          declarationNode.map((nodeV, index: number) => {
            this.getNode(nodeV, true)
          })
          // debugger
        }
        break
      }
      case Syntax.FunctionDeclaration: {
        const fBody: any = (nodeP as FunctionDeclaration).body.body

        fBody.map((nodeF, index: number) => {
          this.getNode(nodeF, true)
        })
        break
      }
      case Syntax.BlockStatement: {
        break
      }
    }
  }

  parse() {
    this.getNode(this.script, false)

    return this
  }

  end() {
    return this.variableNode
  }
}

import { Children, cloneElement, ReactNode, ReactElement } from 'react'
import * as React from 'react'
// import { Element, Node } from 'react';
// import { Element, Node } from 'react';
type Element<P> = ReactElement<P>
type Node = ReactNode

const hasChildren = (child: Element<any>): boolean =>
  Boolean(child && child.props && child.props.children)

const hasComplexChildren = (child: Element<any>): boolean =>
  hasChildren(child) && typeof child.props.children === 'object'

export class ReactChildrenHelper {
  /**
   * Filter children
   * @param   {object} children - React component children
   * @param {function} filterFn - Array filter callback
   * @returns  {array}          - Filtered children
   */
  static filter(children: number, filterFn: (child: Node) => boolean): Node {
    return Children.toArray(children).filter(filterFn)
  }

  /**
   * Filter children and its children
   * @param   {object} children     - React component children
   * @param {function} deepFilterFn - Deep Filter callback
   * @returns  {array}              - Deep Filtered children
   */
  static deepFilter(children: Node, deepFilterFn: (child: Node) => boolean): Node {
    return Children.toArray(children)
      .filter(deepFilterFn)
      .map((child: any) => {
        if (hasComplexChildren(child)) {
          // Clone the child that has children and filter them too
          return cloneElement(child, {
            ...child.props,
            children: this.deepFilter(child.props.children, deepFilterFn)
          })
        }
        return child
      })
  }

  /**
   * Group children by type and puts in a rest key
   * the types not indicated
   * @param   {object} children - React component children
   * @param {string[]} types    - Array of child types
   * @param   {string} rest     - Object key name where non types will be saved
   * @returns {object}          - Map of the types and rest
   */
  static groupByType(children: Node, types: Array<string>, rest: string): Object {
    return Children.toArray(children).reduce((group, child: any) => {
      const isGrouped = types.includes(child.type)
      const addChild = isGrouped ? child.props.children : child
      const key = isGrouped ? child.type : rest

      return {
        ...group,
        [key]: [...(group[key] || []), addChild]
      }
    }, {})
  }

  /**
   * Map children and its children
   * @param   {object} children  - React component children
   * @param {function} deepMapFn - Deep Map callback
   * @returns  {array}           - Deep Mapped children
   */
  static deepMap(children: Node, deepMapFn: (child: Node) => Node): Node {
    return Children.map(children, (child: any) => {
      if (hasComplexChildren(child)) {
        // Clone the child that has children and map them too
        return deepMapFn(
          cloneElement(child, {
            ...child.props,
            children: this.deepMap(child.props.children, deepMapFn)
          })
        )
      }
      return deepMapFn(child)
    })
  }

  /**
   * ForEach children and its children
   * @param   {object} children      - React component children
   * @param {function} deepForEachFn - Deep Map callback
   */
  static deepForEach(children: Node, deepForEachFn: (child: Node) => void): void {
    Children.forEach(children, (child: any) => {
      if (hasComplexChildren(child)) {
        // Each inside the child that has children
        this.deepForEach(child.props.children, deepForEachFn)
      }
      deepForEachFn(child)
    })
  }

  /**
   * Find in children and its children
   * @param   {object} children   - React component children
   * @param {function} deepFindFn - Deep Map callback
   * @returns  {array}            - Children found
   */
  static deepFind(children: Node, deepFindFn: (child: Node) => boolean): Node | void {
    return (Children.toArray(children) as any).find((child) => {
      if (hasComplexChildren(child as any)) {
        // Find inside the child that has children
        return this.deepFind((child as any).props.children, deepFindFn)
      }
      return deepFindFn(child)
    })
  }

  /**
   * Get only the text in children and its children
   * @param   {object} children - React component children
   * @returns  {string}         - Text of all children
   */
  static onlyText(children: Node): string {
    return Children.toArray(children)
      .reduce(
        (flattened: any, child: any) => [
          ...flattened,
          hasChildren(child) ? this.onlyText(child.props.children) : child
        ],
        []
      )
      .join('')
  }
}

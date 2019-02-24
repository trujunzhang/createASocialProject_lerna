import { IExListItemProps, ListItemCenterElement, ListItemCenterElementObject } from './ExListItem'

function hasOneLineCenter(centerElement: ListItemCenterElement) {
  if (typeof centerElement === 'object') {
    const object = centerElement as ListItemCenterElementObject

    return object.secondaryText === undefined
  }
  return true
}

export function getExListItemState(props: IExListItemProps) {
  const { leftElement, centerElement, rightElement } = props

  return {
    hasLeft: leftElement != undefined,
    oneLineCenter: hasOneLineCenter(centerElement)
  }
}

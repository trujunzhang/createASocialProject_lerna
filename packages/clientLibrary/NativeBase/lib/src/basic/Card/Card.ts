import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Card.js
 */
export interface CardProps extends ReactNative.ViewProps {
  dataArray?: Array<any>
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  ref?: React.Ref<ReactNative.ViewProperties | ReactNative.ListViewProperties>
  transparent?: boolean
  noShadow?: boolean

  // Adding ListView properties
  // dataSource?: ReactNative.ListViewDataSource;
  enableEmptySections?: boolean
  initialListSize?: number
  onChangeVisibleRows?: (
    visibleRows: Array<{
      [sectionId: string]: { [rowID: string]: boolean }
    }>,
    changedRows: Array<{
      [sectionId: string]: { [rowID: string]: boolean }
    }>
  ) => void
  onEndReached?: () => void
  onEndReachedThreshold?: number
  pageSize?: number
  removeClippedSubviews?: boolean
  renderFooter?: () => React.ReactElement<any>
  renderHeader?: () => React.ReactElement<any>
  renderRow?: (
    rowData: any,
    sectionID: string | number,
    rowID: string | number,
    highlightRow?: boolean
  ) => React.ReactElement<any>
  renderScrollComponent?: (
    props: ReactNative.ScrollViewProps
  ) => React.ReactElement<ReactNative.ScrollViewProps>
  renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>
  renderSeparator?: (
    sectionID: string | number,
    rowID: string | number,
    adjacentRowHighlighted?: boolean
  ) => React.ReactElement<any>
  scrollRenderAheadDistance?: number
  stickyHeaderIndices?: number[]
  stickySectionHeadersEnabled?: boolean
}

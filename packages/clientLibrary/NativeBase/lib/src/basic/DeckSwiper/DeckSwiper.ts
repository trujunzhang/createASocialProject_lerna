import * as React from 'react'

/**
 * see Widget DeckSwiper.js
 */
export interface DeckSwiperProps {
  /**
   * Array<any>
   */
  dataSource?: Array<any>
  /**
   * Direction of iteration for elements
   * Default: iterates in backward direction
   */
  onSwipeLeft?: Function
  /**
   * Direction of iteration for elements
   * Default: iterates in forward direction
   */
  onSwipeRight?: Function
  /**
   * Takes a data entry from the data source and should return a renderable component to be rendered as the row.
   */
  renderItem?: Function

  // Others
  looping?: any
  renderEmpty?: any
}

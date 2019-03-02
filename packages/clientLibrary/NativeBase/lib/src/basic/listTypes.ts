
import * as ReactNative from 'react-native'

/**
 * Override React ListViewProperties
 */
interface IReactListViewProperties
    extends ReactNative.ScrollViewProperties,
    React.Props<ReactNative.ListView> {
    /**
     * Flag indicating whether empty section headers should be rendered.
     * In the future release empty section headers will be rendered by
     * default, and the flag will be deprecated. If empty sections are not
     * desired to be rendered their indices should be excluded from
     * sectionID object.
     */
    enableEmptySections?: boolean

    /**
     * How many rows to render on initial component mount.  Use this to make
     * it so that the first screen worth of data apears at one time instead of
     * over the course of multiple frames.
     */
    initialListSize?: number

    /**
     * (visibleRows, changedRows) => void
     *
     * Called when the set of visible rows changes.  `visibleRows` maps
     * { sectionID: { rowID: true }} for all the visible rows, and
     * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
     * that have changed their visibility, with true indicating visible, and
     * false indicating the view has moved out of view.
     */
    onChangeVisibleRows?: (
        visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>,
        changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>
    ) => void

    /**
     * Called when all rows have been rendered and the list has been scrolled
     * to within onEndReachedThreshold of the bottom.  The native scroll
     * event is provided.
     */
    onEndReached?: () => void

    /**
     * Threshold in pixels for onEndReached.
     */
    onEndReachedThreshold?: number

    /**
     * Number of rows to render per event loop.
     */
    pageSize?: number

    /**
     * A performance optimization for improving scroll perf of
     * large lists, used in conjunction with overflow: 'hidden' on the row
     * containers.  Use at your own risk.
     */
    removeClippedSubviews?: boolean

    /**
     * () => renderable
     *
     * The header and footer are always rendered (if these props are provided)
     * on every render pass.  If they are expensive to re-render, wrap them
     * in StaticContainer or other mechanism as appropriate.  Footer is always
     * at the bottom of the list, and header at the top, on every render pass.
     */
    renderFooter?: () => React.ReactElement<any>

    /**
     * () => renderable
     *
     * The header and footer are always rendered (if these props are provided)
     * on every render pass.  If they are expensive to re-render, wrap them
     * in StaticContainer or other mechanism as appropriate.  Footer is always
     * at the bottom of the list, and header at the top, on every render pass.
     */
    renderHeader?: () => React.ReactElement<any>

    /**
     * (rowData, sectionID, rowID) => renderable
     * Takes a data entry from the data source and its ids and should return
     * a renderable component to be rendered as the row.  By default the data
     * is exactly what was put into the data source, but it's also possible to
     * provide custom extractors.
     */
    renderRow?: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        highlightRow?: boolean
    ) => React.ReactElement<any>

    /**
     * A function that returns the scrollable component in which the list rows are rendered.
     * Defaults to returning a ScrollView with the given props.
     */
    renderScrollComponent?: (
        props: ReactNative.ScrollViewProperties
    ) => React.ReactElement<ReactNative.ScrollViewProperties>

    /**
     * (sectionData, sectionID) => renderable
     *
     * If provided, a sticky header is rendered for this section.  The sticky
     * behavior means that it will scroll with the content at the top of the
     * section until it reaches the top of the screen, at which point it will
     * stick to the top until it is pushed off the screen by the next section
     * header.
     */
    renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>

    /**
     * (sectionID, rowID, adjacentRowHighlighted) => renderable
     * If provided, a renderable component to be rendered as the separator below each row
     * but not the last row if there is a section header below.
     * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
     */
    renderSeparator?: (
        sectionID: string | number,
        rowID: string | number,
        adjacentRowHighlighted?: boolean
    ) => React.ReactElement<any>

    /**
     * How early to start rendering rows before they come on screen, in
     * pixels.
     */
    scrollRenderAheadDistance?: number

    /**
     * An array of child indices determining which children get docked to the
     * top of the screen when scrolling. For example, passing
     * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
     * top of the scroll view. This property is not supported in conjunction
     * with `horizontal={true}`.
     * @platform ios
     */
    stickyHeaderIndices?: number[]

    ref?: React.Ref<ReactNative.ListView & ReactNative.ScrollView & ReactNative.View>
}

/**
   * see Widget List.js
   */
export interface IListBaseProperty extends IReactListViewProperties {
    listBorderColor?: string
    listDividerBg?: string
    listNoteColor?: string
    listItemPadding?: number
    listNoteSize?: number
    inset?: boolean
    /**
     * Array of data chunks to render iteratively.
     */
    dataArray?: Array<any>
    renderRow?: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        highlightRow?: boolean
    ) => React.ReactElement<any>
    dataSource?: ReactNative.ListViewDataSource
    disableLeftSwipe?: boolean
    disableRightSwipe?: boolean
    rightOpenValue?: number
    leftOpenValue?: number
    renderRightHiddenRow?: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        rowMap?: any
    ) => React.ReactElement<any>
    renderLeftHiddenRow?: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        rowMap?: any
    ) => React.ReactElement<any>
    rowHasChanged?: (r1: any, r2: any) => boolean
    onRowOpen?: Function
    onRowClose?: Function
    onRowDidOpen?: Function
    onRowDidClose?: Function
    swipeToOpenPercent?: number
    closeOnRowBeginSwipe?: boolean
}
/**
 * see Widget ListItem.js
 */
interface ListItem extends ReactNative.TouchableOpacityProperties {
    full?: boolean
    header?: boolean
    noBorder?: boolean
    noIndent?: boolean
    /**
     * Aligns icon to the right of ListItem.
     * Default: false
     */
    iconRight?: boolean
    /**
     * Aligns icon to the left of ListItem.
     * Default: true
     */
    iconLeft?: boolean
    icon?: boolean
    avatar?: boolean
    thumbnail?: boolean
    button?: boolean
    /**
     * Helps to organize and group the list items.
     */
    itemDivider?: boolean
    /**
     * Sub caption for List Item.
     */

    note?: string
    itemHeader?: boolean
    first?: boolean
    last?: boolean
    selected?: boolean
    /**
     * [android] colored ripple effect
     */
    androidRippleColor?: string
    touchableHighlightStyle?: ReactNative.ViewStyle
}
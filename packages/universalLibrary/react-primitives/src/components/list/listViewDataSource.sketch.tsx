import {
    // ListView
    ListViewDataSource,
    DataSourceAssetCallback
} from '../../models/iListProps'

type ISketchListViewDataSource = ListViewDataSource | any

export class SketchListViewDataSource implements ISketchListViewDataSource {
    private onAsset: DataSourceAssetCallback | null = null
    private dataArray: any
    constructor(onAsset: DataSourceAssetCallback) {
        this.onAsset = onAsset
    }

    // new(onAsset: DataSourceAssetCallback): ISketchListViewDataSource {
    //     return this
    // }

    rowHasChanged?(r1: any, r2: any): boolean {
        return true
    }

    cloneWithRows(dataBlob: any, rowIdentities?: Array<string | number>): ISketchListViewDataSource {
        this.dataArray = dataBlob
        return this
    }

    /**
     * This performs the same function as the `cloneWithRows` function but here
     * you also specify what your `sectionIdentities` are. If you don't care
     * about sections you should safely be able to use `cloneWithRows`.
     *
     * `sectionIdentities` is an array of identifiers for  sections.
     * ie. ['s1', 's2', ...].  If not provided, it's assumed that the
     * keys of dataBlob are the section identities.
     *
     * Note: this returns a new object!
     */
    cloneWithRowsAndSections(
        dataBlob: Array<any> | { [key: string]: any },
        sectionIdentities?: Array<string | number>,
        rowIdentities?: Array<Array<string | number>>
    ): ISketchListViewDataSource {
        return this
    }

    getRowCount(): number {
        return this.dataArray.length
    }

    getRowAndSectionCount(): number {
        return 0
    }

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */
    rowShouldUpdate(sectionIndex: number, rowIndex: number): boolean {
        return true
    }

    /**
     * Gets the data required to render the row.
     */
    getRowData(sectionIndex: number, rowIndex: number): any {
        return this.dataArray[rowIndex]
    }

    /**
     * Gets the rowID at index provided if the dataSource arrays were flattened,
     * or null of out of range indexes.
     */
    getRowIDForFlatIndex(index: number): string {
        return 'xxx'
    }

    /**
     * Gets the sectionID at index provided if the dataSource arrays were flattened,
     * or null for out of range indexes.
     */
    getSectionIDForFlatIndex(index: number): string {
        return 'xxx'
    }

    /**
     * Returns an array containing the number of rows in each section
     */
    getSectionLengths(): Array<number> {
        return []
    }

    /**
     * Returns if the section header is dirtied and needs to be rerendered
     */
    sectionHeaderShouldUpdate(sectionIndex: number): boolean {
        return false
    }

    /**
     * Gets the data required to render the section header
     */
    getSectionHeaderData(sectionIndex: number): any {
        return []
    }
}



import {
    FlatListProps
} from '../../models/iListProps'

import * as React from 'react'

interface ISketchFlatlistProps<ItemT> extends FlatListProps<ItemT> {
}

interface ISketchFlatlistState { }

export class FlatList<ItemT> extends React.Component<ISketchFlatlistProps<ItemT>, ISketchFlatlistState> {

    render() {
        return null
    }
}

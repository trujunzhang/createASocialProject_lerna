import * as React from 'react'

import { ScrollView, FlatList, ListViewProps } from 'react-native'

export { ScrollView, FlatList }

import { ListViewDataSource } from './iListProps'

export interface IListViewProps extends ListViewProps {
  name?: string
}

export class ListView extends React.Component<IListViewProps> {
  static DataSource: ListViewDataSource
}

export declare const KeyboardAwareScrollView: any

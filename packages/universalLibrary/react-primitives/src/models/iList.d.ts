import { ScrollView, FlatList, ListViewProps } from 'react-native'

export { ScrollView, FlatList }

export interface IListViewProps extends ListViewProps {
  name?: string
}

export class ListView extends React.Component<IListViewProps> {
  static DataSource: ListViewDataSource
}

export declare const KeyboardAwareScrollView: any

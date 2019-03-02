import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View, ListView, ViewProps,ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ICardProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  dataArray: any[]
  renderRow: any
}
class Card extends React.Component<ICardProps, any> {
  private _root: any
  render() {
    if (this.props.dataArray && this.props.renderRow) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
      const dataSource = ds.cloneWithRows(this.props.dataArray)
      return (
        <ListView
          {...this.props}
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.props.renderRow}
        />
      )
    }
    return (
      <View ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Card.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ]),
//   dataArray: PropTypes.array,
//   renderRow: PropTypes.func
// };

const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(Card)

export { StyledCard as Card }

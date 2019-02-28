import * as React from 'react'
import * as ReactNative from 'react-native'
import { View, ViewProps } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IViewNBProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}

class ViewNB extends React.Component<IViewNBProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

//ViewNB.propTypes = {
//  ...ViewPropTypes,
//  style: PropTypes.oneOfType([
//    PropTypes.object,
//    PropTypes.number,
//   PropTypes.array
// ])
//};

const StyledViewNB = connectStyle('NativeBase.ViewNB', {}, mapPropsToStyleNames)(ViewNB)
export { StyledViewNB as ViewNB }

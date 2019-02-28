import * as React from 'react'

class StaticContainer extends React.Component <any,any>{
  shouldComponentUpdate(nextProps: any): boolean {
    return !!nextProps.shouldUpdate;
  }

  render() {
    var child = this.props.children;
    if (child === null || child === false) {
      return null;
    }
    return React.Children.only(child);
  }
}

module.exports = StaticContainer;
//export default StaticContainer;

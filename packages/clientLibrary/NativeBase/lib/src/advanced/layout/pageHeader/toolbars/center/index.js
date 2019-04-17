import * as React from 'react';
import { ToolbarCenterTitleObject } from './ToolbarCenterTitleObject';
export class CenterElement extends React.Component {
    render() {
        const { centerElement } = this.props;
        const { renderCenter, titleObject, searchBarObject } = centerElement;
        if (!!renderCenter) {
            return renderCenter();
        }
        if (!!titleObject) {
            return React.createElement(ToolbarCenterTitleObject, { titleObject: titleObject });
        }
        // if (!!titleObject) {
        //   return <ToolbarCenterTitleObject titleObject={titleObject} />
        // }
        if (!!searchBarObject) {
            // return <ToolbarCenterSearchBarObject searchBarObject={searchBarObject} />
        }
        return null;
    }
}
//# sourceMappingURL=index.js.map
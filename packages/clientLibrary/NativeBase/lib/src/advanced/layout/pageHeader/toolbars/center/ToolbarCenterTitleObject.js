import * as React from 'react';
import { Subtitle, Title } from '@appBasic/index'; // Advanced
export class ToolbarCenterTitleObject extends React.Component {
    render() {
        const { titleObject } = this.props;
        const { title, subTitle } = titleObject;
        return (React.createElement(React.Fragment, null,
            React.createElement(Title, null, title || ''),
            !!subTitle && React.createElement(Subtitle, null, subTitle)));
    }
}
//# sourceMappingURL=ToolbarCenterTitleObject.js.map
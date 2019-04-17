import * as React from 'react';
import { Container, Content } from '@appBasic/index'; // Advanced
import { ListSwipeHelper } from '@app/tools';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
import { ScrollView } from 'react-primitives';
import { PageHeader } from '../pageHeader';
class PageLayout extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { noScroll } = props;
        const listSwipeHelper = new ListSwipeHelper({
            onScrollEnableChanged: (enable) => {
                // console.log('onScrollEnableChanged, enable: ', enable)
                this.setState({
                    scrollEnabled: enable
                });
            }
        });
        this.state = {
            listSwipeHelper,
            scrollEnabled: !noScroll
        };
    }
    renderPageContent() {
        const { noScroll } = this.props;
        const { children } = this.props;
        if (noScroll === true) {
            return children;
        }
        const { listSwipeHelper } = this.state;
        const childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, { listSwipeHelper });
        });
        return (React.createElement(ScrollView, { scrollEventThrottle: 16, onScroll: () => {
                listSwipeHelper.onRowCloseOrPressOrScroll(true);
            }, scrollEnabled: this.state.scrollEnabled, style: [this.props.style] }, childrenWithProps));
    }
    renderPageHeader() {
        const { toolbarParams, renderHeader } = this.props;
        if (renderHeader != undefined) {
            return renderHeader();
        }
        if (toolbarParams === undefined) {
            return null;
        }
        return (React.createElement(PageHeader, { toolbarParams: toolbarParams, transparent: false, parallax: false, noStatusBar: false }));
    }
    render() {
        return (React.createElement(Container, null,
            this.renderPageHeader(),
            React.createElement(Content, { scrollEnabled: this.state.scrollEnabled }, this.renderPageContent())));
    }
}
PageLayout.defaultProps = {
    noScroll: false
};
const StyledPageLayout = connectStyle('NativeBase.PageLayout', {}, mapPropsToStyleNames)(PageLayout);
export { StyledPageLayout as PageLayout };
//# sourceMappingURL=index.js.map
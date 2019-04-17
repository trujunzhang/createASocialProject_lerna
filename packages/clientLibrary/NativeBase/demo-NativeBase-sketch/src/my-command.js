import * as React from 'react';
import { setVectorIconsCachDict } from './layouts/boot/vectorIcons';
setVectorIconsCachDict();
import { render, Artboard, View, Text } from 'react-sketchapp';
import { Setup } from './layouts/boot/setup';
import { Root } from '@app/native-base';
import { CurrentPage } from './pages';
import * as Sentry from '@sentry/browser';
Sentry.init({ dsn: 'https://0026c5a58b7748d4befb902e59a2a2f9@sentry.io/165521' });
// console.log('Dimensions(screen): ', JSON.stringify(Dimensions.get('window')))
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        Sentry.withScope((scope) => {
            Object.keys(errorInfo).forEach((key) => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
            // Sentry.showReportDialog();
        });
    }
    render() {
        // return null
        if (this.state.error) {
            //render fallback UI
            return (React.createElement(Text, null, 'error!')
            // <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
            );
        }
        return (React.createElement(View, { style: {
                flex: 1,
                backgroundColor: 'red'
            } },
            React.createElement(Setup, null,
                React.createElement(Root, null,
                    React.createElement(CurrentPage, null)))));
    }
}
const Document = () => (React.createElement(Artboard, { name: "Swatches", style: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (96 + 8) * 4
        // backgroundColor: 'blue'
    } },
    React.createElement(App, null)));
export default (context) => {
    render(React.createElement(Document, null), context.document.currentPage());
};
//# sourceMappingURL=my-command.js.map
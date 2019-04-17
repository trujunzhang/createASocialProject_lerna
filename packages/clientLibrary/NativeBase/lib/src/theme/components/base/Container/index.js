import { Platform, Dimensions } from 'react-primitives';
// import * as Props from './props'
// import * as Base from './base'
const deviceHeight = Dimensions.get('window').height;
export const containerTheme = (variables) => {
    const theme = {
        flex: 1,
        height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
        backgroundColor: variables.containerBgColor
    };
    return theme;
};
//# sourceMappingURL=index.js.map
import { Platform } from 'react-primitives';
// import * as Props from './props'
// import * as Base from './base'
export const subtitleTheme = (variables) => {
    const subtitleTheme = {
        fontSize: variables.subTitleFontSize,
        fontFamily: variables.titleFontfamily,
        color: variables.subtitleColor,
        textAlign: 'center',
        paddingLeft: Platform.OS === 'ios' ? 4 : 0,
        marginLeft: Platform.OS === 'ios' ? undefined : -3
    };
    return subtitleTheme;
};
//# sourceMappingURL=index.js.map
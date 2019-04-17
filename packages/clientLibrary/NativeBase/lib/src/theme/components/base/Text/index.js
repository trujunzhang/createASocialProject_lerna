// import * as Props from './props'
// import * as Base from './base'
export const textTheme = (variables) => {
    const textTheme = {
        fontSize: variables.DefaultFontSize,
        fontFamily: variables.fontFamily,
        color: variables.textColor,
        '.note': {
            color: '#a7a7a7',
            fontSize: variables.noteFontSize
        }
    };
    return textTheme;
};
//# sourceMappingURL=index.js.map
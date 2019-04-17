// import * as Props from './props'
// import * as Base from './base'
export const inputTheme = (variables) => {
    const inputTheme = {
        '.multiline': {
            height: null
        },
        height: variables.inputHeightBase,
        color: variables.inputColor,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        fontSize: variables.inputFontSize
    };
    return inputTheme;
};
//# sourceMappingURL=index.js.map
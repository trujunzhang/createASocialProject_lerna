import { StatusBar } from 'react-primitives';
export function transparentProps(variables, platform, platformStyle) {
    return {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        elevation: 0,
        shadowColor: null,
        shadowOffset: null,
        shadowRadius: null,
        shadowOpacity: null,
        paddingTop: platform === 'android' ? StatusBar.currentHeight || 0 : undefined,
        height: platform === 'android'
            ? variables.toolbarHeight + (StatusBar.currentHeight || 0)
            : variables.toolbarHeight
    };
}
//# sourceMappingURL=transparent.js.map
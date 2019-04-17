import { ColorUtils as Color } from '@app/tools';
import { StatusBar } from 'react-primitives';
import { platform } from '../../utils';
const toolbarDefaultBg = '#fff';
const tabBgColor = '#F8F8F8';
const currentStatusBarHeight = StatusBar.currentHeight || 0;
export const headerVariables = {
    // Header
    toolbarBtnColor: '#fff',
    toolbarDefaultBg: '#3F51B5',
    toolbarHeight: 56,
    toolbarSearchIconSize: 23,
    toolbarInputColor: '#fff',
    searchBarHeight: platform === 'ios' ? 30 : 40,
    searchBarInputHeight: platform === 'ios' ? 40 : 50,
    toolbarBtnTextColor: '#fff',
    toolbarDefaultBorder: '#3F51B5',
    iosStatusbar: 'light-content',
    toolbarPaddingTop: platform === 'ios' ? 18 : 0 + currentStatusBarHeight,
    toolbarParallaxHeight: platform === 'ios' ? 64 : 56 + currentStatusBarHeight,
    toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0 + currentStatusBarHeight
};
export const headerFuncVariables = {
    get statusBarColor() {
        return Color(toolbarDefaultBg)
            .darken(0.2)
            .hex();
    },
    get darkenHeader() {
        return Color(tabBgColor)
            .darken(0.03)
            .hex();
    }
};
//# sourceMappingURL=Header.js.map
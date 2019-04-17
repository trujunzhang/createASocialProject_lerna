import { ColorUtils as Color } from '@app/tools';
import { StatusBar } from 'react-primitives';
import { platform } from '../../utils';
const toolbarDefaultBg = '#fff';
const tabBgColor = '#F8F8F8';
const currentStatusBarHeight = StatusBar.currentHeight || 0;
export const headerVariables = {
    // Header
    toolbarBtnColor: 'rgba(0, 0, 0, 0.44)',
    toolbarDefaultBg,
    toolbarHeight: platform === 'ios' ? 64 : 56 + currentStatusBarHeight,
    toolbarPaddingTop: platform === 'ios' ? 18 : 0 + currentStatusBarHeight,
    toolbarParallaxHeight: platform === 'ios' ? 64 : 56 + currentStatusBarHeight,
    toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0 + currentStatusBarHeight,
    toolbarSearchIconSize: 14,
    toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
    searchBarHeight: platform === 'ios' ? 30 : 30,
    searchBarInputHeight: platform === 'ios' ? 30 : 30,
    toolbarBtnTextColor: platform === 'ios' ? '#007aff' : '#fff',
    iosStatusbar: 'dark-content',
    toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : '#3F51B5'
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
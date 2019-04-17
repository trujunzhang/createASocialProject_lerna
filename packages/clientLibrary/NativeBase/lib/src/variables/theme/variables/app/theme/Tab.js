import { platform } from '../../utils';
export const tabVariables = {
    // Tab
    tabDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
    topTabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
    topTabBarActiveTextColor: platform === 'ios' ? '#007aff' : '#fff',
    topTabBarBorderColor: platform === 'ios' ? '#a7a6ab' : '#fff',
    topTabBarActiveBorderColor: platform === 'ios' ? '#007aff' : '#fff'
};
//# sourceMappingURL=Tab.js.map